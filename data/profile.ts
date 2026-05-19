import {
  Award,
  Bot,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  School,
  Sparkles,
  Trophy
} from "lucide-react";

export const contact = {
  email: "varun.garg405@gmail.com",
  linkedin: "https://www.linkedin.com/in/varun-garg-b1b64a192",
  github: "https://github.com/varungg",
  leetcode: "https://leetcode.com/u/user8137Ug/",
  resume: "/Varun_Garg_Resume_v5.pdf"
};

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" }
];

export const heroFacts = [
  { label: "Current", value: "Oracle Financial Services" },
  { label: "Focus", value: "Full-stack + GenAI" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Experience", value: "2+ years" }
];

export const storyCues = [
  "Intro",
  "Oracle",
  "PeerHook",
  "Projects",
  "Education",
  "Skills",
  "Achievements"
];

export const work = [
  {
    role: "Associate Application Developer",
    company: "Oracle Financial Services Software Limited",
    location: "Bengaluru, India",
    period: "Aug 2023 - Present",
    icon: BriefcaseBusiness,
    summary:
      "Working on Stress Testing and Scenario Analytics, a financial analytics product used by banks and financial institutions.",
    highlights: [
      "Joined the STSA product early and took core ownership of the Scenario module.",
      "Fixed fragmented UI flows and improved scenario output interpretation with graph-led visualizations.",
      "Built a metadata-driven Template Builder that reduced screen delivery time from 3-4 days to under 1 hour per screen.",
      "Developed Java APIs that convert user-configured scenarios into runtime queries for calculation pipelines.",
      "Optimized Oracle SQL schemas and batch queries, reducing processing time by 30-40% on high-volume datasets.",
      "Built a GenAI workflow using Python, Wayflow, and Oracle Code Assist that reduced manual configuration effort by roughly 60%."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "MeritHub Technologies (PeerHook)",
    location: "Mohali, India",
    period: "Jan 2023 - Jun 2023",
    icon: Code2,
    summary:
      "Built real-time chat product surfaces across backend APIs, data layer, mobile, and web.",
    highlights: [
      "Built Golang REST APIs and MongoDB data models for real-time messaging.",
      "Created Flutter mobile clients and web clients using HTML, CSS, and JavaScript.",
      "Moved chat from polling to MQTT event-driven communication for smoother concurrent-user performance."
    ]
  }
];

export const projects = [
  {
    title: "Stress Testing and Scenario Analytics",
    type: "Oracle financial analytics platform",
    icon: Cpu,
    stack: ["Java", "Oracle SQL", "React", "OJET", "REST APIs", "GenAI"],
    description:
      "Production financial analytics work around scenario creation, execution, visualization, and GenAI-assisted configuration.",
    details: [
      "Owned major parts of the Scenario module.",
      "Built Java APIs for runtime scenario execution logic.",
      "Improved UI clarity with graphs and configuration-driven screens."
    ],
    links: [
      {
        label: "Oracle STSA docs",
        href: "https://docs.oracle.com/en/industries/financial-services/ofs-analytical-applications/stress-testing-analytics/8.1.2.5.0/stsuh/introduction-ofsstsa.html"
      }
    ]
  },
  {
    title: "PeerHook",
    type: "Real-time chat product",
    icon: Database,
    stack: ["Golang", "MongoDB", "MQTT", "Flutter", "HTML", "CSS", "JavaScript"],
    description:
      "A chat platform built during internship, covering API development, data modeling, mobile clients, and web UI.",
    details: [
      "Built REST APIs and MongoDB-backed messaging flows.",
      "Delivered both mobile and web clients from scratch.",
      "Replaced polling with MQTT for lower-latency real-time behavior."
    ],
    links: []
  },
  {
    title: "VarBotChat",
    type: "Open-source RAG chatbot",
    icon: Bot,
    stack: ["Next.js", "React", "Node.js", "Express", "OpenAI GPT", "Pinecone", "FAISS"],
    description:
      "A RAG-powered Q&A chatbot where users ask natural-language questions and receive answers grounded in a custom knowledge base.",
    details: [
      "Built document ingestion, chunking, embeddings, indexing, retrieval, and streaming chat UI.",
      "Managed sessions and API calls through a Node.js and Express backend.",
      "Tuned prompts to reduce hallucinations across multi-turn conversations."
    ],
    links: [
      {
        label: "varungg/VarChatBot",
        href: "https://github.com/varungg/VarChatBot"
      }
    ]
  }
];

export const education = {
  degree: "B.Tech, Computer Science and Business Systems",
  school: "Thapar Institute of Engineering and Technology",
  location: "Patiala, India",
  period: "Aug 2019 - Aug 2023",
  cgpa: "CGPA: 7.54",
  icon: GraduationCap
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "Golang", "TypeScript", "JavaScript", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Flutter", "OJET", "HTML/CSS/JS"]
  },
  {
    title: "Backend and Data",
    skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "MongoDB", "Oracle SQL", "MQTT"]
  },
  {
    title: "AI and GenAI",
    skills: ["OpenAI API", "RAG", "LangChain", "Pinecone", "FAISS", "Prompt Engineering", "GenAI Workflows"]
  }
];

export const achievements = [
  {
    icon: Trophy,
    title: "Oracle Pacesetter Spark Award",
    text: "Received within the first year at Oracle for strong early impact."
  },
  {
    icon: Award,
    title: "Class XII Mathematics Topper",
    text: "Scored the highest marks in mathematics at school in the Class XII board exams."
  }
];

export const hobbies = [
  {
    icon: Sparkles,
    title: "Chess",
    text: "Regular chess player who enjoys calculation, patience, and long-form strategy."
  },
  {
    icon: School,
    title: "Problem Solving",
    text: "Drawn to systems, math-heavy thinking, and turning complex flows into something clear.",
    link: {
      label: "LeetCode profile",
      href: "https://leetcode.com/u/user8137Ug/"
    }
  }
];
