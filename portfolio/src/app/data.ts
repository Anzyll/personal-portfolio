import { StaticImageData } from "next/image";

import {
  TrevoraHeroImage,
  CafePosImage,
  EcommerceBackendImage
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
    RESUME: "https://drive.google.com/file/d/13h7dI6UJIONUlawpRcvWnOUmmc764GhS/view?usp=sharing", // Placeholder as no resume link was provided
    EMAIL: "mailto:anzil2003m@gmail.com", // Placeholder
    GITHUB: "https://github.com/Anzyll", // Placeholder
    LINKEDIN: "https://www.linkedin.com/in/muhammedanzilm/",
    INTRO:
      "Backend Engineer with hands-on experience building production-oriented backend systems using Java, Spring Boot, RESTful APIs, and PostgreSQL. Architected secure authentication flows, transactional order workflows, and clean service-layer designs with a strong emphasis on correctness and scalability"

    , EXPERTISE:
      " Complemented by practical frontend experience using React, building user-facing and admin interfaces that integrate tightly with backend APIs. Experienced with Dockerized deployments, AWS infrastructure, CI/CD automation, and multi-level backend testing. Focused on maintainable system design, performance, and real-world engineering trade-offs.",
  },


  PROJECTS: {
    "E-Commerce Backend System": {
      GITHUB: "https://github.com/Anzyll/ecommerce-backend-api", // Using base URL as specific link wasn't provided, but I'll search if needed
      DESCRIPTION: [
        "Architected and developed a modular e-commerce backend following a clean layered architecture (Controller, Service/Orchestrator, Repository).",
        "Built 20+ REST endpoints covering user, product, cart, wishlist, and order workflows.",
        "Enforced secure role-based access control (User/Admin) using Spring Security and JWT.",
        "Engineered transactional order placement and cancellation flows using @Transactional, ensuring inventory consistency and idempotent operations.",
        "Established layered testing across unit, integration, container-based (Testcontainers), and end-to-end levels.",
        "Deployed a containerized backend on AWS EC2 backed by managed PostgreSQL on AWS RDS.",
        "Built a CI/CD pipeline automating build, test, Docker image creation, and deployment.",
      ],
      TECH_STACK: [
        "Java 17",
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "Spring Data Jpa",
        "Docker",
        "AWS EC2",
        "AWS RDS",
        "CI/CD",
        "JaCoCo",
      ],
      IMAGE: EcommerceBackendImage,
    },
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
    Backend: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
    ],
    Databases: ["PostgreSQL", "Relational Data Modeling", "Flyway"],
    "APIs & Security": [
      "RESTful APIs",
      "JWT",
      "Role-Based Access Control (RBAC)",
      "Global Exception Handling",
    ],
    Testing: [
      "JUnit 5",
      "Mockito",
      "Spring Boot Test",
      "@DataJpaTest",
      "Unit, Integration, Container (Testcontainers), E2E Testing",
      "JaCoCo",
    ],
    "DevOps & Cloud": [
      "Docker",
      "AWS EC2",
      "AWS RDS",
      "CI/CD",
      "GitHub Actions",
    ],
    Tools: ["Git", "GitHub", "Postman", "Swagger/OpenAPI"],
    "Frontend (Basic)": ["HTML", "CSS", "JavaScript", "React"],
  },
};
