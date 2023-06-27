import { create } from 'zustand';

const colorMap = {
  'green': "120deg 30% 61%",
  'blue': "288deg 30% 61%",
  'yellow': "30deg 30% 61%",
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const useStore = create(set => ({
  collections: {
    byId: {
      "primary-school": {
        id: "primary-school",
        name: "Primary school",
        color: colorMap.green,
        categories: ["primary-school"],
      },
      "secondary-school": {
        id: "secondary-school",
        name: "Secondary school",
        color: colorMap.yellow,
        categories: ["secondary-school"],
      },
      "college": {
        id: "college",
        name: "College",
        color: colorMap.blue,
        categories: ["college"],
      },
      "biology": {
        id: "biology",
        name: "Biology",
        color: colorMap.blue,
        categories: ["science"]
      },
      "anatomy": {
        id: "anatomy",
        name: "Anatomy",
        color: colorMap.blue,
        categories: ["anatomy"]
      },
      "art": {
        id: "art",
        name: "Art",
        color: colorMap.yellow,
        categories: ["ars"]
      },
      "maths": {
        id: "maths",
        name: "Maths",
        color: colorMap.green,
        categories: ["maths"]
      },
      "comp-sci": {
        id: "comp-sci",
        name: "Computer Science",
        color: colorMap.blue,
        categories: ["comp-sci"]
      },
      "high-school": {
        id: "high-school",
        name: "High school",
        color: colorMap.yellow,
        categories: ["high-school"]
      },
      "cooking": {
        id: "cooking",
        name: "Cooking",
        color: colorMap.blue,
        categories: ["cooking"]
      },
      "geography": {
        id: "geography",
        name: "Geography",
        color: colorMap.blue,
        categories: ["geography"]
      },
      "geometry": {
        id: "geometry",
        name: "Geometry",
        color: colorMap.green,
        categories: ["geometry"]
      },
      "philosophy": {
        id: "philosophy",
        name: "Philosophy",
        color: colorMap.blue,
        categories: ["philosophy"]
      },
      "physics": {
        id: "physics",
        name: "Physics",
        color: colorMap.blue,
        categories: ["physics"]
      },
      "science": {
        id: "science",
        name: "Science",
        color: colorMap.blue,
        categories: ["science"]
      },
      "social-studies": {
        id: "social-studies",
        name: "Social studies",
        color: colorMap.yellow,
        categories: ["social-studies"]
      },
      "language-arts": {
        id: "language-arts",
        name: "Language arts",
        color: colorMap.blue,
        categories: ["language-arts"]
      },
      "exams": {
        id: "exams",
        name: "Exams",
        color: colorMap.green,
        categories: ["exams"]
      },
      "education": {
        id: "education",
        name: "Education",
        color: colorMap.yellow,
        categories: ["education"]
      },
      "chemistry": {
        id: "chemistry",
        name: "Chemistry",
        color: colorMap.blue,
        categories: ["chemistry"]
      }
    },
    entities: [
      "biology",
      "anatomy",
      "art",
      "maths",
      "comp-sci",
      "primary-school",
      "secondary-school",
      "high-school",
      "cooking",
      "college",
      "geography",
      "geometry",
      "philosophy",
      "physics",
      "science",
      "social-studies",
      "language-arts",
      "exams",
      "education",
      "chemistry"
    ],
  },
  categories: {
    byId: {
      "primary-school": {
        name: "Primary School",
      },
      "secondary-school": {
        name: "Secondary School",
      },
      "anatomy": {
        name: "Anatomy",
      },
      "high-school": {
        name: "High School",
      },
      "cooking": {
        name: "Cooking",
      },
      "college": {
        name: "College",
      },
      "geography": {
        name: "Geography",
      },
      "geometry": {
        name: "Geometry",
      },
      "maths": {
        name: "Maths",
      },
      "philosophy": {
        name: "Philosophy",
      },
      "physics": {
        name: "Physics",
      },
      "science": {
        name: "Science",
      },
      "social-studies": {
        name: "Social Studies",
      },
      "language-arts": {
        name: "Language Arts",
      },
      "biology": {
        name: "Biology",
      },
      "chemistry": {
        name: "Chemistry",
      },
      "education": {
        name: "Education",
      },
      "comp-sci": {
        name: "Computer Science",
      },
      "exams": {
        name: "Exams",
      }
    },
    entities: [
      "biology",
      "anatomy",
      "art",
      "maths",
      "comp-sci",
      "primary-school",
      "secondary-school",
      "high-school",
      "cooking",
      "college",
      "geography",
      "geometry",
      "philosophy",
      "physics",
      "science",
      "social-studies",
      "language-arts",
      "exams",
      "education",
      "chemistry"
    ],
  },
  tokens: {
    byId: {
      "shapes": {
        id: "shapes",
        name: "Shapes",
        image: "/tokens/primary_school_shapes_icon.png",
        owner: "Joshua Futcher",
        description: "Primary school shapes module.",
        categories: ["primary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "arithmetic": {
        id: "arithmetic",
        name: "Arithmetic",
        image: "/tokens/primary_school_shapes_icon.png",
        owner: "Joshua Futcher",
        description: "Primary school arithmetic module.",
        categories: ["primary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "anatomy-1": {
        id: "anatomy-1",
        name: "Anatomy",
        image: "/tokens/anatomy-1.png",
        owner: "Joshua Futcher",
        description: "Primary school anatomy module.",
        categories: ["primary-school", "biology", "anatomy"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "art-1": {
        id: "art-1",
        name: "Art",
        image: "/tokens/art-1.png",
        owner: "Joshua Futcher",
        description: "Primary school art module.",
        categories: ["primary-school", "art"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "art-2": {
        id: "art-2",
        name: "Art 2",
        image: "/tokens/art-2.png",
        owner: "Joshua Futcher",
        description: "Primary school art module.",
        categories: ["primary-school", "art"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "art-3": {
        id: "art-3",
        name: "Art 3",
        image: "/tokens/art-3.png",
        owner: "Joshua Futcher",
        description: "Secondary school art module.",
        categories: ["secondary-school", "art"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "art-4": {
        id: "art-4",
        name: "Art A Levels",
        image: "/tokens/art-4.png",
        owner: "Joshua Futcher",
        description: "College art module.",
        categories: ["college", "art"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "biology-1": {
        id: "biology-1",
        name: "Biology 1",
        image: "/tokens/biology-1.png",
        owner: "Joshua Futcher",
        description: "Primary school biology module.",
        categories: ["primary-school", "biology"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "biology-2": {
        id: "biology",
        name: "Biology Exam",
        image: "/tokens/biology.png",
        owner: "Joshua Futcher",
        description: "Secondary school biology exam.",
        categories: ["secondary-school", "biology", "exams"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "class-1": {
        id: "class-1",
        name: "First Year Primary",
        image: "/tokens/class-1.png",
        owner: "Joshua Futcher",
        description: "Primary school first year.",
        categories: ["primary-school"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "comp-sci": {
        id: "comp-sci",
        name: "Computer Science",
        image: "/tokens/comp-sci.png",
        owner: "Joshua Futcher",
        description: "Computer Science Class",
        categories: ["comp-sci"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "cooking-1": {
        id: "cooking-1",
        name: "Cooking 1",
        image: "/tokens/cooking-1.png",
        owner: "Joshua Futcher",
        description: "Primary school cooking module.",
        categories: ["primary-school", "cooking"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "cooking-2": {
        id: "cooking-2",
        name: "Cooking 2",
        image: "/tokens/cooking-2.png",
        owner: "Joshua Futcher",
        description: "Primary school 2nd cooking module.",
        categories: ["primary-school", "cooking"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "cooking-3": {
        id: "cooking-3",
        name: "Cooking 3",
        image: "/tokens/cooking-3.png",
        owner: "Joshua Futcher",
        description: "Secondary school cooking module.",
        categories: ["secondary-school", "cooking"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "cooking-4": {
        id: "cooking-4",
        name: "Cooking 4",
        image: "/tokens/cooking-4.png",
        owner: "Joshua Futcher",
        description: "College cooking module.",
        categories: ["college", "cooking"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "geography-1": {
        id: "geography-1",
        name: "Geography",
        image: "/tokens/geography-1.png",
        owner: "Joshua Futcher",
        description: "Primary school geography module.",
        categories: ["primary-school", "geography"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "geography-2": {
        id: "geography-2",
        name: "Geography 2",
        image: "/tokens/geography-2.png",
        owner: "Joshua Futcher",
        description: "Secondary school geography module.",
        categories: ["secondary-school", "geography"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "geography-3": {
        id: "geography-3",
        name: "Geography 3",
        image: "/tokens/geography-3.png",
        owner: "Joshua Futcher",
        description: "College geography module.",
        categories: ["college", "geography"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "geometry-1": {
        id: "geometry-1",
        name: "Geometry 1",
        image: "/tokens/geometry-1.png",
        owner: "Joshua Futcher",
        description: "High school geometry module.",
        categories: ["high-school", "geometry"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "maths-1": {
        id: "maths-1",
        name: "Maths 1",
        image: "/tokens/maths-1.png",
        owner: "Joshua Futcher",
        description: "Primary school mathematics module.",
        categories: ["primary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "maths-2": {
        id: "maths-2",
        name: "Maths 2",
        image: "/tokens/maths-2.png",
        owner: "Joshua Futcher",
        description: "Secondary school mathematics module.",
        categories: ["secondary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "philosophy": {
        id: "philosophy",
        name: "Philosophy",
        image: "/tokens/philosophy.png",
        owner: "Joshua Futcher",
        description: "College philosophy module.",
        categories: ["college", "philosophy"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "philosophy-2": {
        id: "philosophy-2",
        name: "Philosophy 2",
        image: "/tokens/philosophy-2.png",
        owner: "Joshua Futcher",
        description: "High school philosophy module.",
        categories: ["high-school", "philosophy"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "physics-1": {
        id: "physics-1",
        name: "Physics 1",
        image: "/tokens/physics-1.png",
        owner: "Joshua Futcher",
        description: "High school physics module.",
        categories: ["high-school", "physics"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "physics-2": {
        id: "physics-2",
        name: "Physics 2",
        image: "/tokens/physics-2.png",
        owner: "Joshua Futcher",
        description: "College physics module.",
        categories: ["college", , "physics"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "primary-school-1": {
        id: "primary-school-1",
        name: "Primary School 1",
        image: "/tokens/primary-school-1.png",
        owner: "Joshua Futcher",
        description: "Introduction to primary school education.",
        categories: ["primary-school", "education"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "primary-school-2": {
        id: "primary-school-2",
        name: "Primary School 2",
        image: "/tokens/primary-school-2.png",
        owner: "Joshua Futcher",
        description: "Primary school social studies module.",
        categories: ["primary-school", "social-studies"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "primary-school-3": {
        id: "primary-school-3",
        name: "Primary School 3",
        image: "/tokens/primary-school-3.png",
        owner: "Joshua Futcher",
        description: "Primary school science module.",
        categories: ["primary-school", "science"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "primary-school-4": {
        id: "primary-school-4",
        name: "Primary School 4",
        image: "/tokens/primary-school-4.png",
        owner: "Joshua Futcher",
        description: "Primary school language arts module.",
        categories: ["primary-school", "language-arts"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "science-1": {
        id: "science-1",
        name: "Science 1",
        image: "/tokens/science-1.png",
        owner: "Joshua Futcher",
        description: "Secondary school biology module.",
        categories: ["secondary-school", "biology"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        },
      "science-3": {
        id: "science-3",
        name: "Science 3",
        image: "/tokens/science-3.png",
        owner: "Joshua Futcher",
        description: "College chemistry module.",
        categories: ["college", "chemistry"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
        }
    },
    entities: [
      "shapes",
      "arithmetic",
      "anatomy-1",
      "art-1",
      "art-2",
      "art-3",
      "art-4",
      "biology-1",
      "biology-2",
      "class-1",
      "comp-sci",
      "cooking-1",
      "cooking-2",
      "cooking-3",
      "cooking-4",
      "geography-1",
      "geography-2",
      "geography-3",
      "geometry-1",
      "maths-1",
      "maths-2",
      "philosophy",
      "philosophy-2",
      "physics-1",
      "physics-2",
      "primary-school-1",
      "primary-school-2",
      "primary-school-3",
      "primary-school-4",
      "science-1",
      "science-3"
    ],
    updateToken: (token) => set(state => ({
      tokens: {
        ...state.tokens,
        byId: {
          ...state.tokens.byId,
          [token.id]: token
        },
      }
    })),
  },
  findEntity: (section, predicate) => {
    return section.entities
      .map(id => section.byId[id])
      .filter(predicate)
  },
}));

export default useStore;