"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links?: { type: "github" | "linkedin" | "youtube"; url: string }[];
}

const projects: Project[] = [
  {
    title: "Rentit - A Comprehensive Online Rental App",
    description:
      "RentIt is a web platform connecting people renting items and services with those looking to rent them, offering secure payments and real-time updates.",
    technologies: ["React", "PHP", "MySQL"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763807393/1733074015084_okb2xu.jpg",
    links: [
      { type: "github", url: "https://github.com/Thinuj01/RenItNew" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thinuja-hettiarachchi/details/projects/",
      },
    ],
  },
  {
    title: "Evently - Event Planning Website",
    description:
      "Evently helps users create, organize, and track events with guest lists, budgets, and task tools.",
    technologies: ["React", "Django", "MySQL"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763807393/1740051154319_zhfksc.jpg",
    links: [
      { type: "github", url: "https://github.com/Thinuj01/Evently" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thinuja-hettiarachchi/details/projects/",
      },
    ],
  },
  {
    title: "SpendWise - Expense Tracker Mobile App",
    description:
      "A Flutter app to monitor income and expenses with category sorting, filtering, and visual analytics.",
    technologies: ["Flutter", "Hive"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763807393/1742271027387_jw4ewe.jpg",
    links: [
      { type: "github", url: "https://github.com/Thinuj01/spendwise-new" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thinuja-hettiarachchi/details/projects/",
      },
    ],
  },
  {
    title: "Portfolio",
    description:
      "A modern portfolio built with NextJS, featuring animations, responsive UI, and an EmailJS contact form.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763960062/portfolio_xt4kqo.png",
    links: [],
  },
  {
    title: "Real-Time Chat with Emotion Analysis",
    description:
      "Live chat app using WebSockets + HuggingFace for emotion scoring. Dynamic charts and real-time feedback.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763807392/1755591200488_mz4spk.jpg",
    links: [
      { type: "github", url: "https://github.com/Thinuj01/chatty-fe" },
      { type: "github", url: "https://github.com/Thinuj01/Chatty-Bkd" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thinuja-hettiarachchi/details/projects/",
      },
    ],
  },
  {
    title: "Pinklet - Gift Customization Platform",
    description:
      "Full-stack platform with a 3D Cake Customizer and Gift Builder. Includes vendor marketplace and pricing engine.",
    technologies: ["React", ".NET", "PostgreSQL"],
    image:
      "https://res.cloudinary.com/diiaeojyn/image/upload/v1763807393/Cream_Modern_Interior_Design_Business_Presentation_ksby45.jpg",
    links: [
      { type: "github", url: "https://github.com/Thinuj01/pinklet-web-be" },
      { type: "github", url: "https://github.com/Thinuj01/pinklet-web-fe" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/thinuja-hettiarachchi/details/projects/",
      },
      { type: "youtube", url: "https://www.youtube.com/watch?v=34JQLvnK1P8" },
    ],
  },
];

export default function Projects() {
  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <FaGithub size={20} />;
      case "linkedin":
        return <FaLinkedin size={20} />;
      case "youtube":
        return <FaYoutube size={20} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-6 bg-linear-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Top Image */}
              <div className="w-full h-36 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-white dark:bg-red-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  {project.links?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-100 hover:text-red-700 dark:hover:text-red-700 transition-colors"
                    >
                      {getIcon(link.type)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
