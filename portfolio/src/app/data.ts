import { StaticImageData } from "next/image";

import {
  TrevoraHeroImage,
  BookMyVenueArchitectureImage,
  CafePosImage,
  EcommerceCicdImage,
  EcommerceBackendImage,
  FlashSaleArchitectureImage,
  FlashSaleDashboardImage,
  FlashSaleLoadTestImage,
} from "@/assets/projects";

export interface IProjectImage {
  LABEL: string;
  IMAGE: StaticImageData;
}

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  METRICS?: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  IMAGES?: IProjectImage[];
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
      "https://drive.google.com/file/d/1FjJB6KSZ80CnimtkQHBX06Oz5BHKh3wx/view?usp=sharing",
    EMAIL: "mailto:anzil2003m@gmail.com",
    GITHUB: "https://github.com/Anzyll",
    LINKEDIN: "https://www.linkedin.com/in/muhammedanzilm/",
    MEDIUM: "https://medium.com/@anzil2003m",
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
      "8,000+ Concurrent Users Simulated",
      "30+ REST APIs Built",
      "Kafka Event-Driven Workflows",
      "AWS Infrastructure via Terraform",
    ],
    ABOUT: [
      "Backend-focused Software Engineer specializing in distributed systems, cloud infrastructure, and production-ready backend development.",
      "Experienced in designing scalable APIs, implementing event-driven architectures, building secure authentication systems, and deploying cloud-native applications.",
      "Recently focused on high-concurrency system design using Redis, Kafka, Terraform, AWS, and modern observability tooling.",
    ],
  },

  PROJECTS: {
    "High-Concurrency Flash Sale System": {
      GITHUB: "https://github.com/Anzyll/flash-sale-order-system",
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
      IMAGE: FlashSaleArchitectureImage,
      IMAGES: [
        {
          LABEL: "Architecture Diagram",
          IMAGE: FlashSaleArchitectureImage,
        },
        {
          LABEL: "Load Test Result",
          IMAGE: FlashSaleLoadTestImage,
        },
        {
          LABEL: "Monitoring Dashboard",
          IMAGE: FlashSaleDashboardImage,
        },
      ],
      FEATURED: true,
      PRIMARY: true,
    },
    BookMyVenue: {
      GITHUB: "https://github.com/BookMyVenue-Team/BookMyVenue",
      DESCRIPTION: [
        "Collaborative venue-booking backend featuring dynamic slot availability calculation, booking lifecycle management, and double-booking prevention using transactional consistency.",
        "Implemented venue template management, dynamic availability computation, concurrent booking validation, and multithreaded testing to ensure booking correctness under concurrent requests.",
      ],
      TECH_STACK: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "Hibernate",
        "Docker",
        "JUnit",
      ],
      IMAGE: BookMyVenueArchitectureImage,
      IMAGES: [
        {
          LABEL: "BookMyVenue Architecture",
          IMAGE: BookMyVenueArchitectureImage,
        },
      ],
      FEATURED: true,
    },
    "E-Commerce Backend API": {
      GITHUB: "https://github.com/Anzyll/ecommerce-backend-api",
      DESCRIPTION: [
        "Production-oriented e-commerce backend featuring authentication, authorization, transactional order workflows, CI/CD automation, cloud deployment, and containerized testing.",
        "Implemented JWT authentication, role-based access control, Flyway migrations, GitHub Actions pipelines, and Testcontainers-powered integration testing.",
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
      IMAGES: [
        {
          LABEL: "Swagger API Documentation",
          IMAGE: EcommerceBackendImage,
        },
        {
          LABEL: "CI/CD Pipeline",
          IMAGE: EcommerceCicdImage,
        },
      ],
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
        "Production-oriented Point of Sale system built for a real café to streamline billing, order management, and table operations.",
        "Features role-based access for staff, live order synchronization, dynamic billing workflows, and responsive tablet-friendly interfaces.",
      ],
      NOTE: "Freelance Project",
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
    "How I Built a Flash Sale Backend That Survived 10,000 Concurrent Purchase Requests":
      {
        DATE: "Medium",
        TIME: "6",
        LINK: "https://medium.com/@anzil2003m/how-i-built-a-flash-sale-backend-that-survived-10-000-concurrent-purchase-requests-f4c65b2c8531",
        DESCRIPTION:
          "Lessons learned building a high-concurrency flash sale system with Redis, Kafka, load testing, and fault-tolerant processing.",
      },
    "The Git & GitHub Guide I Wish I Had as a Beginner": {
      DATE: "Medium",
      TIME: "5",
      LINK: "https://medium.com/@anzil2003m/the-git-github-guide-i-wish-i-had-as-a-beginner-38546d5400ea",
      DESCRIPTION:
        "A practical guide covering Git fundamentals, workflows, branching, collaboration, and GitHub best practices.",
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
    "Atomic Stock Reservation (Redis Lua)",
    "Kafka Retry & Dead-Letter Processing",
    "Dynamic Availability Calculation",
    "Terraform Infrastructure as Code",
    "OAuth2 & RBAC Security",
    "Distributed Booking Consistency",
    "Observability & Alerting",
  ],

  MEDIUM: "https://medium.com/@anzil2003m",
};
