import { StaticImageData } from "next/image";

import {
  TrevoraHeroImage,
  CafePosImage,
  EcommerceBackendImage,
} from "@/assets/projects";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  METRICS?: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  FEATURED?: boolean;
  PRIMARY?: boolean;
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
    ROLE: "Software Engineer",
    SPECIALIZATION: "Backend & Distributed Systems",
    HEADLINE:
      "Building scalable backend systems, event-driven architectures, and cloud-native applications.",
    RESUME:
      "https://drive.google.com/file/d/13h7dI6UJIONUlawpRcvWnOUmmc764GhS/view?usp=sharing",
    EMAIL: "mailto:anzil2003m@gmail.com",
    GITHUB: "https://github.com/Anzyll",
    LINKEDIN: "https://www.linkedin.com/in/muhammedanzilm/",
    TECH_PILLS: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Terraform",
      "AWS",
    ],
    IMPACTS: [
      "8,000+ Concurrent Users Tested",
      "30+ REST APIs Built",
      "Kafka Event Workflows",
      "AWS Infrastructure Provisioned",
    ],
    ABOUT: [
      "Backend-focused Software Engineer specializing in distributed systems, cloud infrastructure, and production-ready backend development.",
      "Experienced in designing scalable APIs, implementing event-driven architectures, building secure authentication systems, and deploying cloud-native applications.",
      "Recently focused on high-concurrency system design using Redis, Kafka, Terraform, AWS, and modern observability tooling.",
    ],
  },

  PROJECTS: {
    "High-Concurrency Flash Sale System": {
      GITHUB: "https://github.com/Anzyll/flash-sale-system",
      DESCRIPTION: [
        "Designed a high-concurrency backend for flash-sale ordering with atomic Redis stock reservation, asynchronous Kafka processing, and infrastructure provisioned on AWS with Terraform.",
      ],
      METRICS: [
        "8,000 concurrent users",
        "Zero overselling",
        "Redis Lua scripting",
        "Kafka DLQ architecture",
        "Terraform AWS infrastructure",
      ],
      TECH_STACK: [
        "Java",
        "Spring Boot",
        "Redis",
        "Lua",
        "Kafka",
        "PostgreSQL",
        "Terraform",
        "AWS",
        "k6",
      ],
      IMAGE: EcommerceBackendImage,
      FEATURED: true,
      PRIMARY: true,
    },
    BookMyVenue: {
      GITHUB: "https://github.com/Anzyll/bookmyvenue",
      DESCRIPTION: [
        "Built a venue-booking backend with authenticated user workflows, booking lifecycle management, role-based access control, and clean REST API boundaries.",
      ],
      TECH_STACK: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Hibernate",
        "Docker",
      ],
      IMAGE: EcommerceBackendImage,
      FEATURED: true,
    },
    "E-Commerce Backend System": {
      GITHUB: "https://github.com/Anzyll/ecommerce-backend-api",
      DESCRIPTION: [
        "Developed a modular e-commerce backend with 20+ REST APIs, JWT-secured user/admin access, transactional order workflows, and container-based testing.",
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
      FEATURED: true,
    },
    Trevora: {
      LIVE_PREVIEW: "https://trevora-3rjo.vercel.app/",
      GITHUB: "https://github.com/Anzyll/Trevora",
      DESCRIPTION: [
        "E-commerce application with authentication, product discovery, cart and wishlist flows, admin management, and order workflows.",
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
      IMAGE: TrevoraHeroImage,
    },
    "Cafe POS System": {
      GITHUB: "https://github.com/Anzyll/cafe-pos",
      DESCRIPTION: [
        "A production-oriented Point of Sale (POS) system built for a real café to streamline order management, billing, and table operations.",
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

  BLOGS: {
    "Building a High-Concurrency Flash Sale System": {
      DATE: "Medium",
      TIME: "6",
      LINK: "https://medium.com/@anzil2003m",
      DESCRIPTION:
        "A systems-oriented walkthrough of stock reservation, queue-backed order processing, and load testing for flash-sale workloads.",
    },
    "Redis Lua Scripting for Atomic Operations": {
      DATE: "Medium",
      TIME: "4",
      LINK: "https://medium.com/@anzil2003m",
      DESCRIPTION:
        "Notes on using Redis Lua scripts to keep high-contention inventory operations atomic and predictable.",
    },
    "Kafka Retry and DLQ Patterns": {
      DATE: "Medium",
      TIME: "5",
      LINK: "https://medium.com/@anzil2003m",
      DESCRIPTION:
        "A practical look at retry topics, dead-letter queues, and failure handling in event-driven Spring Boot systems.",
    },
    "Testing Spring Boot with Testcontainers": {
      DATE: "Medium",
      TIME: "5",
      LINK: "https://medium.com/@anzil2003m",
      DESCRIPTION:
        "How container-backed integration tests improve confidence around persistence, messaging, and API behavior.",
    },
  },

  SKILLS: {
    Backend: ["Java", "Spring Boot", "Spring Security", "Hibernate"],
    Data: ["PostgreSQL", "Redis"],
    Messaging: ["Kafka"],
    Security: ["JWT", "OAuth2", "Keycloak", "RBAC"],
    Cloud: ["Docker", "Terraform", "AWS", "GitHub Actions"],
    Observability: ["Prometheus", "Grafana", "OpenTelemetry", "Tempo"],
    Testing: ["JUnit", "Mockito", "Testcontainers", "k6"],
  },

  HIGHLIGHTS: [
    "Redis Lua Scripting",
    "Event-Driven Architecture",
    "Kafka Retry & DLQ Processing",
    "Terraform Infrastructure as Code",
    "OAuth2 / RBAC Security",
    "Distributed System Design",
    "Observability & Monitoring",
  ],

  MEDIUM: "https://medium.com/@anzil2003m",
};
