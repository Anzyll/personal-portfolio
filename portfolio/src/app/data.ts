import { StaticImageData } from "next/image";

import {
  TrevoraHeroImage,
  CafePosImage,
} from "@/assets/projects";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
}

export interface IBlogData {
  DATE: string;
  TIME: string;
  LINK: string;
  DESCRIPTION: string;
  IMAGE?: StaticImageData;
}

export const DATA = {
  HEADER: {
    NAME: "Muhammed Anzil M",
    AGE: "22",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME: "https://drive.google.com/file/d/1kevo_q7ram_gXgDqD6hQKIJ00ddkU1ej/view?usp=sharing", // Placeholder as no resume link was provided
    EMAIL: "mailto:anzil2003m@gmail.com", // Placeholder
    GITHUB: "https://github.com/Anzyll", // Placeholder
    LINKEDIN: "https://www.linkedin.com/in/muhammedanzilm/",
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in React js and Springboot, and I enjoy working across the stack to bring ideas to life.",
  },

  EXPERIENCE: {},

  PROJECTS: {
    "Trevora": {
      LIVE_PREVIEW: "https://trevora-3rjo.vercel.app/",
      GITHUB: "https://github.com/Anzyll/Trevora",
      DESCRIPTION: [
        "Trevora is a full-stack e-commerce platform designed to simulate a real-world shopping experience with a focus on clean engineering, scalability, and a modern user interface.",
        "Key features include Authentication and authorization flow, Product browsing with search, filtering, and sorting, and Wishlist and cart with persistent state.",
        "Includes an Admin Dashboard for Sales and user analytics, Product management (CRUD), and Order management.",
      ],
      TECH_STACK: [
        "React",
        "Tailwind CSS",
        "JSON Server",
        "Razorpay",
        "Recharts",
        "Vercel",
        "Render",
      ],
      IMAGE: TrevoraHeroImage, // Updated main image


    },
    "Cafe POS System": {
      // No live preview for internal tool
      GITHUB: "https://github.com/Anzyll/cafe-pos",
      DESCRIPTION: [
        "A production-oriented Point of Sale (POS) system built for a real café to streamline order management, billing, and table operations.",
        "Features role-based access for Waiter and Cashier, Table management with real-time occupancy status, and Live order synchronization using Firestore listeners.",
        "Includes Dynamic billing with discounts, Digital bill sharing via WhatsApp, and a Responsive UI optimized for tablets and POS screens.",
      ],
      TECH_STACK: [
        "React",
        "Tailwind CSS",
        "Firebase (Firestore, Auth, Hosting)",
        "WhatsApp Integration",
      ],
      IMAGE: CafePosImage,
    },
  },

  BLOGS: {},

  SKILLS: {
    Languages: ["Java", "JavaScript","HTML", "CSS"],
    Frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    Backend: [
      "Spring Framework",
      "Spring Boot",
    ],
    Database: ["PostgreSQL", "Firebase"],
    "Build & Tools": ["Maven", "Git", "GitHub","JUnit","Mockito"],
    "Cloud & Deployment": ["Vercel", "Render"],
  },
};
