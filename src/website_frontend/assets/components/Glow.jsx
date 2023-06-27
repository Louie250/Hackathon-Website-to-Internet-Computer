import React from 'react'
import { Box } from '@mantine/core';
import { Renderer, Triangle, Program, Mesh } from 'ogl';
import { useEffect, useRef } from 'react';

function createScene(container) {
  const renderer = new Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
    alpha: true,
  });

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
  });
  const gl = renderer.gl;

  const geometry = new Triangle(gl)

  // I BROKE THIS SHADER BUT IT LOOKS COOL SO IM NOT CHANGING IT
  const program = new Program(gl, {
    vertex: /* glsl */ `
        attribute vec3 position;
        attribute vec2 uv;

        uniform float uTime;
        uniform vec2 uResolution;

        varying vec3 vPosition;
        varying vec2 vUv;
        varying float vTime;

        void main() {
          vTime = uTime;
          vPosition = position;
          vUv = uv + 1.0 / 2.0;
          gl_Position = vec4(position, 1.0);
        }
      `,
    fragment: /* glsl */ `
        precision highp float;

        varying vec3 vPosition;
        varying vec2 vUv;
        varying float vTime;

        float borderRect(float width) {
          float enabled = 1.0;
          enabled *= smoothstep(0.0,width, vUv.x);
          enabled *= smoothstep(0.0,width, vUv.y);
          enabled *= smoothstep(0.0,width, vUv.x);
          enabled *= smoothstep(1.0-width,width, vUv.y);
          return enabled;
        }

        vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec2 mod289(vec2 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec3 permute(vec3 x) {
          return mod289(((x*34.0)+10.0)*x);
        }
        
        float snoise(vec2 v)
          {
          const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                              0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                             -0.577350269189626,  // -1.0 + 2.0 * C.x
                              0.024390243902439); // 1.0 / 41.0
        // First corner
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
        
        // Other corners
          vec2 i1;
          //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
          //i1.y = 1.0 - i1.x;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          // x0 = x0 - 0.0 + 0.0 * C.xx ;
          // x1 = x0 - i1 + 1.0 * C.xx ;
          // x2 = x0 - 1.0 + 2.0 * C.xx ;
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
        
        // Permutations
          i = mod289(i); // Avoid truncation effects in permutation
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
        
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
        
        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
        
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
        
        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        
        // Compute final noise value at P
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          float nScale = 1.0;
          float nAmplitude = 0.5;
          float timeScale = 0.1;
          float borderWidth = 0.025;

          float colorNoise = mix(0.2,1.0,(snoise(vUv + vTime*timeScale)+1.0)/2.0);
          float noise = snoise(vUv * nScale + vTime*timeScale);
          float nNoise = (noise + 1.0) / 2.0;

          float grad = borderRect(borderWidth);

          float enabled = sin(
            grad * (3.1415926535)
          ) * (nNoise * nAmplitude);

 
          vec4 c2 = mix(
            vec4(0.0,0.0,0.0,0.0),
            vec4(0.0,0.0,1.0,enabled),
            colorNoise*vUv.y
          );

          vec4 c3 = mix(
            vec4(0.0,0.0,0.0,0.0),
            vec4(0.0,1.0,0.0,enabled),
            colorNoise
          );

          gl_FragColor = c2+c3;
        }
    `,
    uniforms: {
      uTime: { value: 0 },
      uAspect: { value: [window.innerWidth, window.innerHeight] }
    },
  });

  const mesh = new Mesh(gl, { geometry, program });

  function update(t) {
    requestAnimationFrame(update);

    program.uniforms.uTime.value = t * 0.001;

    // Don't need a camera if camera uniforms aren't required
    renderer.render({ scene: mesh });
  }

  return { renderer, start: update, canvas: gl.canvas };
}

/**
 * Funkie WebGL GlowEdge.
 */
function GlowEdge() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) return;
    const scene = createScene(containerRef.current);

    sceneRef.current = scene;
    containerRef.current.appendChild(scene.canvas);

    scene.start()
  }, []);

  return (
    <Box sx={{ position: 'fixed', left: '0', right: '0', bottom: '0', top: '0' }} ref={containerRef} />
  )
}

export default GlowEdge;