"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="w-full relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900 overflow-hidden">

      {/* Profile Photo */}
      <motion.div
        className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 dark:border-red-800 border-gray-700 flex-shrink-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/photo.jpg"
          alt="Aspiring Software Engineer"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Details */}
      <motion.div
        className="flex flex-col items-center text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-32 h-1 mb-6 rounded-full dark:bg-red-800 bg-gray-700"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Thinuja Hettiarachchi
        </h1>

        <TypeAnimation
          sequence={[
            "Aspiring Software Engineer",
            2000,
            "Full Stack Developer",
            2000,
            "Mobile Developer",
            2000,
            "Tech Enthusiast",
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-4"
        />

        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg">
          Passionate about coding, building innovative projects, and learning new technologies.
        </p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open("/T. J. Hettiarachchi.pdf", "_blank")}
          >
            Download Resume
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
        </motion.div>
      </motion.div>

    </section>
  );
}
