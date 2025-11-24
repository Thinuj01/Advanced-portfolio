"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiFlutter,
  SiExpress,
  SiDotnet,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiFigma,
  SiHiveBlockchain,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";
import { Code, Smartphone, PenTool } from "lucide-react";

export default function About() {
  const allSkills = [
    <BiLogoJava key={1} size={60} />,
    <SiTypescript key={2} size={60} />,
    <SiJavascript key={3} size={60} />,
    <SiPhp key={4} size={60} />,
    <SiReact key={5} size={60} />,
    <TbBrandReactNative key={6} size={60} />,
    <SiFlutter key={7} size={60} />,
    <SiExpress key={8} size={60} />,
    <SiDotnet key={9} size={60} />,
    <SiTailwindcss key={10} size={60} />,
    <SiMysql key={11} size={60} />,
    <SiMongodb key={12} size={60} />,
    <SiPostgresql key={13} size={60} />,
    <SiNodedotjs key={14} size={60} />,
    <SiGithub key={15} size={60} />,
    <SiFigma key={16} size={60} />,
  ];

  const items = [
    {
      title: "Full-Stack Development",
      description:
        "Building complete applications with modern frontend & backend technologies.",
      icon: <Code size={40} />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating high-performance cross-platform apps with React Native & Flutter.",
      icon: <Smartphone size={40} />,
    },
    {
      title: "Blockchain Development",
      description:
        "Developing decentralized applications and smart contracts on blockchain platforms.",
      icon: <SiHiveBlockchain size={40} />,
    },
    {
      title: "UI/UX & Frontend Engineering",
      description:
        "Designing clean, responsive interfaces with modern UI principles.",
      icon: <PenTool size={40} />,
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 px-6 bg-gradient-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg leading-relaxed">
          I am Thinuja Hettiarachchi, an aspiring software engineer passionate
          about creating innovative applications and learning new technologies.
          I enjoy building dynamic web projects, exploring AI/ML, and
          contributing to open-source communities.
        </p>

        {/* Horizontal scrolling skill icons */}
        <div className="overflow-hidden relative w-full py-4">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {allSkills.concat(allSkills).map((icon, idx) => (
              <div key={idx} className="flex-shrink-0">
                {icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full mt-16">
        <div className="w-full mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-10">
            What I Do
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="
          p-4 
          rounded-xl 
          bg-white/10 
          dark:bg-black/20 
          border border-gray-300/40 dark:border-gray-700/40 
          backdrop-blur-md 
          shadow-sm 
          hover:shadow-md 
          transition-all
          cursor-pointer
        "
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="text-gray-800 dark:text-red-400">
                    {React.cloneElement(item.icon, { size: 32 })}{" "}
                    {/* Smaller Icon */}
                  </span>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
