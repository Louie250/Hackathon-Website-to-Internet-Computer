import React from 'react'
import { Box, Center, Container, Paper, SegmentedControl } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let active;
  if (location.pathname.startsWith("/collections")) {
    active = '/collections'
  }
  if (location.pathname.startsWith("/send")) {
    active = '/send'
  }

  return (
    <Box sx={{ left: 0, position: 'fixed', right: 0, bottom: 0, backdropFilter: 'blur(10px)' }} p="xs" bg="rgba(30,30,30,0.3)">
      <Container size="sm">
        <Paper component="nav" withBorder bg="rgba(30,30,30,0.4)" radius="12px">
          <SegmentedControl
            size="md"
            radius="md"
            color="green.5"
            onChange={(v) => navigate(v)}
            value={active}
            withBorder
            sx={{ width: '100%', background: 'transparent' }}
            data={[
              {
                value: '/collections',
                label: (
                  <Center>
                    Collections
                  </Center>
                ),
              },
              {
                value: '/send',
                label: (
                  <Center>
                    Send
                  </Center>
                ),
              },
            ]}
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default Navigation;