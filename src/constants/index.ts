export { SOCIAL_MEDIA } from "./socialMedia";
export type { SocialLink } from "./socialMedia";

export { SKILLS_LIST } from "./skillsList";
export type { Skill, SkillGroup } from "./skillsList";

export { EXPERIENCES } from "./experience";
export type { Achievement } from "./experience";

export { EDUCATION_LIST } from "./education";
export type { Education } from "./education";

export { PROJECTS } from "./projects";
export type { Project, TechIcon } from "./projects";

export {
  OPEN_SOURCE_CONTRIBUTIONS,
  getOrgSummaries,
} from "./openSource";
export type { Contribution, OrgSummary } from "./openSource";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1fAlHoNfCHkJCkmcpGFzbanTZorT2r2U_/view";
export const REPO_LINK = "https://github.com/Sudhanva-Nadiger/Portfolio";

export const ABOUT_ME = {
  name: "Ekra Chowdhury Risha",
  firstName: "Ekra Chowdhury",
  lastName: "Risha",
  tagLine:
    "Aspiring AI/ML Engineer | Python & Django Developer | Computer Science Student",
  intro: "Computer Science student at the University of Asia Pacific with a passion for Artificial Intelligence, Machine Learning, and Backend Development. I enjoy building intelligent applications using Python, Django, and modern AI technologies, and I'm currently preparing for an AI/ML Engineering internship.",
  email: "ekrachowdhuryrisha@gmail.com",
};

export const NAV_LINKS = [
  { link: "#experience", title: "Experience" },
  { link: "#skills", title: "Skills" },
  { link: "#education", title: "Education" },
  { link: "#projects", title: "Projects" },
  { link: "#opensource", title: "Open Source" },
  { link: "#contact", title: "Contact" },
];
