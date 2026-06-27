import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import {
  SiKaggle,
  SiHuggingface,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  icon: IconType;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "linkedin.com/in/ekra-chowdhury-risha",
    label: "LinkedIn",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "github.com/Ekrachowdhuryrisha",
    label: "GitHub",
  },
  {
    id: "social-media-3",
    icon: SiKaggle,
    link: "kaggle.com/ekrachowdhuryrisha",
    label: "Kaggle",
  },
  {
    id: "social-media-4",
    icon: SiHuggingface,
    link: "huggingface.co/ekrachowdhuryrisha",
    label: "Hugging Face",
  },
  {
    id: "social-media-5",
    icon: AiFillMail,
    link: "mailto:ekrachowdhuryrisha@gmail.com",
    label: "Email",
  },
];