import {
  Code2,
  Globe,
  BrainCircuit,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const tracks = [
  {
    id: 1,
    icon: Globe,
    title: "Frontend",
    duration: "60 Days",
    level: "Beginner",
    color: "from-cyan-500 to-blue-600",
    description:
      "Master HTML, CSS, JavaScript, React, Tailwind and build modern UIs.",
  },
  {
    id: 2,
    icon: Server,
    title: "Backend",
    duration: "60 Days",
    level: "Intermediate",
    color: "from-orange-500 to-red-600",
    description:
      "Learn Node.js, Express, APIs, Authentication and Databases.",
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "AI Engineering",
    duration: "31 Days",
    level: "Intermediate",
    color: "from-violet-500 to-fuchsia-600",
    description:
      "Build AI apps using RAG, Agents, Prompt Engineering and MCP.",
  },
  {
    id: 4,
    icon: Database,
    title: "Data Science",
    duration: "60 Days",
    level: "Intermediate",
    color: "from-green-500 to-emerald-600",
    description:
      "Python, Pandas, Machine Learning and Data Visualization.",
  },
  {
    id: 5,
    icon: Smartphone,
    title: "Android",
    duration: "60 Days",
    level: "Beginner",
    color: "from-pink-500 to-rose-600",
    description:
      "Build Android apps with Kotlin, Firebase and Jetpack Compose.",
  },
  {
    id: 6,
    icon: Code2,
    title: "Full Stack",
    duration: "60 Days",
    level: "Advanced",
    color: "from-indigo-500 to-violet-600",
    description:
      "End-to-end web development with React, Node.js and MongoDB.",
  },
];

export default tracks;