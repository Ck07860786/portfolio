"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col mt-[50rem] items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Get in Touch
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I’m open to discussing freelance projects or full-time opportunities. Let’s connect!
        </p>

       
        <div className="flex gap-6 justify-center mt-10">
          
          <a
            href="https://github.com/ck07860786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300"
          >
            <img
              src="https://cdn.icon-icons.com/icons2/3685/PNG/512/github_logo_icon_229278.png"
              alt="GitHub"
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>

         
          <a
            href="mailto:yourname@example.com"
            className="text-neutral-500 hover:text-white transition duration-300"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png"
              alt="Email"
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>

          
          <a
            href="https://www.linkedin.com/in/chotukumar786/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
              alt="LinkedIn"
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>

         
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-512.png"
              alt="Instagram"
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
