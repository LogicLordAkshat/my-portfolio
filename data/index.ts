// data.ts

import { StaticImageData } from "next/image"; // You might need this if you use Next.js Image component with local images directly in data.

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Achievements", link: "#achievements" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Engineering scalable solutions with complete technical ownership",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgCdn: "/b1.svg",
    img: "/b1.svg",
    spareImg: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "Seamless collaboration across all global timezones",
    description: "US, Europe & APAC coverage",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "",
    spareImg: "",
    imgClassName: "",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Full-Stack & AI/ML Expert",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "/b4.svg",
    spareImg: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    title: "AI Engineer with a passion for scalable systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-start",
  },
  {
    id: 5,
    title: "Currently building AI-powered automation platforms",
    description: "Specializing in LLMs & RAG",
    className: "md:col-span-3 md:row-span-2",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    imgClassName: "absolute right-0 bottom-0 lg:w-[80%] md:w-[80%] w-full",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
  {
    id: 6,
    title: "Ready to scale your next ambitious product?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "",
    spareImg: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
];

export const projects = [
  {
    id: 1,
    title: "MarkovAI – Real-Time AI Assistant & Automation Platform",
    des: "Real-time, multimodal AI assistant with screen-context understanding, conversational voice interaction, and live data retrieval. Engineered scalable AI workflows reducing support workload by 45% and improving response latency by 65%.",
    img: "/s1(2).png",
    iconLists: ["/Node.js.svg", "/Python.svg", "/MongoDB.svg", "/AWS.svg", "/TypeScript.svg"],
    link: "https://www.markovai.in/",
  },
  {
    id: 2,
    title: "KravenAI – AI-Powered Password Security Platform",
    des: "AI security platform serving 50,000+ users with 98.2% threat detection accuracy and sub-50ms latency. Features quantum-resistant cryptography, zero-knowledge architecture, and browser extension with 99.9% uptime.",
    img: "/s1(3).png",
    iconLists: ["/React.svg", "/Python.svg", "/MongoDB.svg", "/Firebase.svg", "/AWS.svg"],
    link: "https://kravnai.netlify.app/",
  },
  {
    id: 3,
    title: "FinvestaAI – AI Financial Intelligence Platform",
    des: "AI-driven financial intelligence platform leveraging LLMs and RAG to deliver contextual market insights from real-time news and sentiment data. Optimized RAG pipelines reducing latency by 40% while improving accuracy.",
    img: "/s1(4).png",
    iconLists: ["/next.js(2).svg", "/TypeScript.svg", "/Python.svg", "/Flask.svg", "/AWS.svg"],
    link: "https://finvestaai.netlify.app/",
  },
  {
    id: 4,
    title: "VITrendz – Student Community Platform",
    des: "Full-stack student community platform serving 100,000+ users with 99.9% uptime. Features FFCS Planner, Roommate Finder, Faculty Feedback System, and CGPA tools. Improved backend performance by 45% while leading a 5-member team.",
    img: "/s1(5).png",
    iconLists: ["/React.svg", "/next.js(2).svg", "/TypeScript.svg", "/Node.js.svg", "/MongoDB.svg"],
    link: "https://www.vitrendz.in/",
  },
  {
    id: 5,
    title: "SpeechLite – AI Speech Analysis Platform",
    des: "CodeCortex 2.0 Finalist (Top 4 of 200+ teams). AI-powered speech analysis platform with real-time transcription, sentiment analysis, and presentation coaching. Built with advanced NLP and ML models.",
    img: "/s1(1).png",
    iconLists: ["/React.svg", "/Python.svg", "/NumPy.svg", "/Firebase.svg", "/TypeScript.svg"],
    link: "https://speechlite.netlify.app/",
  },
  {
    id: 6,
    title: "Podcast AI – AI-Powered Podcast Analysis Platform",
    des: "AI-powered podcast analysis platform with real-time transcription, sentiment analysis, and presentation coaching. Built with advanced NLP and ML models.",
    img: "/s1(6).png",
    iconLists: ["/React.svg", "/Python.svg", "/NumPy.svg", "/MongoDB.svg", "/TypeScript.svg"],
    link: "https://podcastai.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Akshat's work on VITrendz has been exceptional. He led the development of critical features like the FFCS Planner and Roommate Finder that serve over 100,000 students. His ability to optimize backend performance while managing a team showcases strong technical and leadership skills.",
    name: "VITrendz Team",
    title: "Platform Development Lead",
  },
  {
    quote:
      "Working with Akshat on our AI automation project was seamless. Despite the timezone difference, his communication was phenomenal and he always ensured a strong daily overlap. He independently architected and delivered a production-ready system with complex LLM and RAG workflows.",
    name: "SaaS Startup Client",
    title: "CTO, US-based Enterprise",
  },
  {
    quote:
      "I was initially hesitant about hiring a remote freelance engineer, but Akshat exceeded all expectations. He built our AI-powered financial intelligence platform completely from scratch. His implementation of real-time data streaming and vector databases reduced our latency perfectly.",
    name: "FinvestaAI Stakeholder",
    title: "Product Manager",
  },
  {
    quote:
      "The security platform Akshat developed serves 50,000+ users with 98.2% threat detection accuracy. His implementation of quantum-resistant cryptography and zero-knowledge architecture demonstrates deep understanding of both AI and security principles.",
    name: "KravenAI User",
    title: "Security Consultant",
  },
  {
    quote:
      "Akshat's real-time AI assistant platform showcases cutting-edge multimodal AI capabilities. The 65% improvement in response latency and 45% reduction in support workload speaks to his ability to deliver measurable business impact.",
    name: "MarkovAI Beta Tester",
    title: "Business Operations Manager",
  },
  {
    quote:
      "As an engineering manager, I'm deeply impressed by Akshat's full-stack capabilities and independent problem-solving skills. Whether it's React, Next.js, or complex Python backend systems, he delivers extremely clean, scalable code that requires very little hand-holding.",
    name: "Senior Mentor",
    title: "Director of Engineering",
  },
  {
    quote:
      "Akshat joined our team remotely and within the first week was already shipping features. His communication was crisp, he never missed a standup, and the code quality was production-ready from day one. Exactly the kind of engineer you want on a remote-first team.",
    name: "Rohan Kapoor",
    title: "Startup Founder, YC W24",
  },
  {
    quote:
      "We hired Akshat for a 3-month contract to build our internal AI dashboard. He delivered in 6 weeks, added features we hadn't even asked for, and left the codebase in better shape than he found it. Will definitely work with him again.",
    name: "Priya Mehta",
    title: "Head of Product, FinTech Startup",
  },
  {
    quote:
      "I was skeptical about hiring a freelancer for our core infrastructure work. Akshat changed my mind completely — deep understanding of system design, proactive communication, and zero hand-holding needed. Our API now handles 3x the load it did before.",
    name: "David Chen",
    title: "CTO, SaaS Platform (Singapore)",
  },
  {
    quote:
      "Akshat built our entire onboarding flow with AI document verification from scratch. The OCR accuracy was impressive and the explainability layer he added made our compliance team very happy. Shipped on time, on budget.",
    name: "Aisha Rahman",
    title: "Product Manager, BFSI Startup",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const techStack = [
  { name: "React", img: "/React.svg" },
  { name: "Next.js", img: "/next.js(2).svg" },
  { name: "TypeScript", img: "/TypeScript.svg" },
  { name: "JavaScript", img: "/JavaScript.svg" },
  { name: "Python", img: "/Python.svg" },
  { name: "Node.js", img: "/Node.js.svg" },
  { name: "MongoDB", img: "/MongoDB.svg" },
  { name: "AWS", img: "/AWS.svg" },
  { name: "Firebase", img: "/Firebase.svg" },
  { name: "Tailwind", img: "/Tailwind.svg" },
  { name: "GitHub", img: "/GitHub.svg" },
  { name: "NumPy", img: "/NumPy.svg" },
  { name: "Flask", img: "/Flask.svg" },
  { name: "C++", img: "/C++.svg" },
  { name: "Java", img: "/Java.svg" },
  { name: "Docker", img: "/dock.svg" },
  { name: "Three.js", img: "/Three.js.svg" },
  { name: "Azure", img: "/Azure.svg" },
  { name: "Angular", img: "/Angular.svg" },
  { name: "VS", img: "/VS.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Engineer Intern – BizNeuro AI",
    desc: "Building AI-driven fraud detection and document authenticity pipelines for BFSI and e-commerce. Working with computer vision, OCR, and anomaly detection. Engineering explainable AI outputs — risk scores, reason codes, and anomaly signals — for real-world compliance and fraud prevention.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Engineer – VITrendz",
    desc: "Engineered and scaled a full-stack student community platform serving 100,000+ users with 99.9% uptime. Designed core features including FFCS Planner, Roommate Finder, and Faculty Feedback System, improving backend performance by 45% while leading a 5-member team.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Full Stack Developer – Freelancer",
    desc: "Delivered 6+ production-grade AI and SaaS platforms using React/Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL. Integrated LLM workflows, RAG pipelines, secure payments, and automation, reducing development timelines by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "CodeCortex 2.0 Finalist – VIT Vellore",
    desc: "Top 4 of 200+ teams in AI/ML Competition. Built SpeechLite, an AI-powered speech analysis platform with real-time transcription, sentiment analysis, and presentation coaching using advanced NLP models.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Finance Head – German Literary Association, VIT",
    desc: "Managing finances and operations for an 85+ member organization. Responsible for budget planning, event funding, and financial strategy to support cultural and literary initiatives.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LogicLordAkshat",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/LogicLordAkshat",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/akshat-srivastava-83a684209/",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/_akshat_7._/",
  },
];
