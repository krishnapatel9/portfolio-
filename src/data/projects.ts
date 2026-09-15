import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "leadforge",
    title: "LeadForge — AI-Powered Lead Generation Platform",
    status: "Shipped",
    github: "https://github.com/krishnapatel9/LeadForge",
    live: "https://lead-forge-azure.vercel.app/",
    description: "AI-powered lead generation platform. Features AI prompt workflows for lead research and scoring, async SQLAlchemy operations, REST APIs, and a Kanban pipeline. Automatically generates lead intelligence and personalized outreach drafts.",
    tags: ["FastAPI", "Python", "Next.js", "PostgreSQL", "SQLAlchemy", "Docker", "AI Agents"]
  },
  {
    id: "riderescue",
    title: "Ride Rescue — Motor Mechanic Web App",
    status: "Shipped",
    github: "[GitHub Repo URL]",
    live: "https://ride-rescue-updated.vercel.app/",
    description: "Full-stack responsive web application connecting users with verified motor mechanics for real-time roadside assistance. Built with Supabase authentication, real-time location tracking, and transparent pricing.",
    tags: ["React", "Vite", "Tailwind CSS", "Supabase"]
  },
  {
    id: "compliancetracker",
    title: "Compliance Document Tracker",
    status: "Shipped",
    github: "https://github.com/krishnapatel9/compliancedocumenttracker",
    live: "",
    description: "Full-stack compliance document management system. Features PDF uploads, secure JWT authentication, comprehensive RESTful APIs with API documentation, SQL analytics dashboards, automated email reminders via cron scheduling, and Docker deployment.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "JWT"]
  },
  {
    id: "video-captioning",
    title: "AI Multimodal Video Captioning Tool",
    status: "Shipped",
    github: "https://github.com/krishnapatel9/multimodalvideocaptions",
    live: "",
    description: "AI-driven application that generates synchronized captions from video content. Utilizes Google Gemini Pro for multimodal processing, PyTube for video extraction, and OpenCV for frame analysis.",
    tags: ["Python", "Google Gemini Pro", "Streamlit", "OpenCV", "PyTube"]
  },
  {
    id: "chrome-extension",
    title: "AI Productivity Chrome Extension",
    status: "Shipped",
    github: "https://github.com/krishnapatel9/AISummaryExtension",
    live: "",
    description: "AI-powered Chrome extension designed to summarize web content, manage bookmarks, and integrate seamlessly with browser workflows for enhanced daily productivity.",
    tags: ["JavaScript", "Chrome Extensions API", "OpenAI API", "HTML/CSS"]
  }
];
