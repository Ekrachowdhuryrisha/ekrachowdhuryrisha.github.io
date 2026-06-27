import type { IconType } from "react-icons";
import {
  SiCss3,
  SiPython,
  SiStreamlit,
  SiGooglegemini,
  SiDjango,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

import uapbot from "@/assets/images/Projects/uapbot.png";
import bachelorpoint from "@/assets/images/Projects/bachelorpoint.png";
import vaxmate from "@/assets/images/Projects/vaxmate.png";
export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  link?: string;
  image?: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
 
  {
    id: "project-1",
    title: "UAP Bot by RAG",
    github: "https://github.com/Ekrachowdhuryrisha/uap-bot",

    image: uapbot,

    content:
      "An AI-powered chatbot for the University of Asia Pacific that uses Retrieval-Augmented Generation (RAG) with Google Gemini and LangChain to answer questions from university documents accurately and contextually.",

    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: SiStreamlit, name: "Streamlit" },
      { id: "3", icon: SiGooglegemini, name: "Gemini" },
    ],
  },
  {
    id: "project-2",
    title: "VaxMate",
    github: "https://github.com/Ekrachowdhuryrisha/VaxMate",
    image: vaxmate,

    content:
      "A vaccination management system that helps users track vaccination schedules, manage records, and receive timely reminders through an intuitive web interface. Built using Django with a MySQL database following the MVC architecture.",

    stack: [
      { id: "vm-1", icon: SiPython, name: "Python" },
      { id: "vm-2", icon: SiDjango, name: "Django" },
      { id: "vm-3", icon: SiMysql, name: "MySQL" },
      { id: "vm-4", icon: AiFillHtml5, name: "HTML" },
      { id: "vm-5", icon: SiCss3, name: "CSS" },
      { id: "vm-6", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-3",
    title: "Bachelor Point",
    github: "https://github.com/Ekrachowdhuryrisha/-BachelorPoint-",
    image: bachelorpoint,

    content:
      "A Django-based multi-vendor accommodation platform connecting bachelors, house owners, and food suppliers. The platform includes secure authentication, email verification, role-based dashboards, and an AI-powered website assistant that answers users' questions about the platform using its content.",

    stack: [
      { id: "bp-1", icon: SiPython, name: "Python" },
      { id: "bp-2", icon: SiDjango, name: "Django" },
      { id: "bp-3", icon: AiFillHtml5, name: "HTML" },
      { id: "bp-4", icon: SiCss3, name: "CSS" },
      { id: "bp-5", icon: SiJavascript, name: "JavaScript" },
    ],
  },
 
];
