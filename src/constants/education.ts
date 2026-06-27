import uap from "@/assets/images/Education/uap.png";

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: uap,
    title: "University of Asia Pacific",
    degree: "Bachelor of Science in Computer Science & Engineering",
    duration: "2022 — Expected Graduation: 2026",
    content1: "Relevant Coursework: Machine Learning & Deep Learning, Data Structures & Algorithms, Database Systems,Object Oriented Programming, Operating Systems, Computer Architecture, System Design & Analysis, Software Engineering, Computer Networks, Web Development.",
    content2: "Relevant projects include UAP Bot by RAG, Bachelor Point, and VaxMate.",
  },
];
