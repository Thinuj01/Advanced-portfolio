"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900 text-gray-300 py-6 flex flex-col items-center gap-3 mt-12 shadow-lg dark:shadow-red-900/40">
      
      <div className="flex gap-6">
        <a
          href="https://github.com/Thinuj01"
          target="_blank"
          className="text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-red-800 transition cursor-pointer"
        >
          <FaGithub size={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/thinuja-hettiarachchi/"
          target="_blank"
          className="text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-red-800 transition cursor-pointer"
        >
          <FaLinkedin size={40} />
        </a>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} Thinuja Hettiarachchi. All rights reserved.
      </p>
    </footer>
  );
}
