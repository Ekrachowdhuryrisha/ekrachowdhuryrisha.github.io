export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: "Award" | "Competition" | "Scholarship" | "Certificate";
}

export const EXPERIENCES: Achievement[] = [
  {
    id: "1",
    title: "Vice Chancellor's Award for Academic Excellence",
    organization: "University of Asia Pacific",
    year: "Spring 2024 • Fall 2024 • Spring 2025",
    category: "Award",
  },
  {
    id: "2",
    title: "Dean's Award for Academic Excellence",
    organization: "University of Asia Pacific",
    year: "Spring 2023 • Fall 2023",
    category: "Award",
  },
  {
    id: "3",
    title: "Champion – Research Poster Presentation",
    organization: "Jahangirnagar University Research Society",
    year: "2025",
    category: "Competition",
  },
  {
    id: "4",
    title: "7th Position – National Data Analytics Competition (NDAC)",
    organization: "National Data Analytics Competition",
    year: "2025",
    category: "Competition",
  },
  {
    id: "5",
    title: "ICPC Jamilur Reza Chowdhury Scholarship",
    organization: "ICPC",
    year: "2025",
    category: "Scholarship",
  },
  {
    id: "6",
    title: "\"She Leads\" Award – ML Project Showcase",
    organization: "Research & Publication Unit, UAP",
    year: "2025",
    category: "Award",
  },
  {
    id: "7",
    title: "2nd Runner Up – Omor Ekushe Programming Contest",
    organization: "University of Asia Pacific",
    year: "2023",
    category: "Competition",
  },
  {
    id: "8",
    title: "Hands-on Data Science Boot Camp",
    organization: "Professional Training",
    year: "6 Months",
    category: "Certificate",
  },
]