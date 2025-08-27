"use client";
import {  CalendarDaysIcon, Landmark } from "lucide-react";
import {
 
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle:string,
  content: React.ReactNode;
  timeline:string,
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 95%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  font-sans md:px-10 mb-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        
        <h2 className="text-lg font-semibold md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-4 max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-400 text-sm md:text-base">
          Hello! My name is {" "}
          <span className="font-bold">Chotu Kumar</span>, and I am a
          passionate Full Stack Developer with a strong foundation in
          computer science and a knack for building dynamic, user-friendly
          web applications. Currently pursuing my B.Tech in Computer
          Science Engineering at Baba Farid College of Engineering &
          Technology, Bathinda, I am driven by curiosity and a desire to
          create innovative solutions that make a difference.
        </p>
        <br />

        <p className="text-neutral-700 dark:text-neutral-400 md:text-base">
          Beyond coding, I enjoy exploring new technologies, contributing
          to open-source projects, and continuously enhancing my skills.
          Whether it&apos;s solving complex problems or collaborating on
          impactful projects, I am always up for a challenge. Let’s take
          a journey through my academic and professional growth below.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full ">
                <div className=" flex items-center gap-2">
                    <div className=" mb-4">

                    <CalendarDaysIcon className=" text-gray-400"/>
                    </div>
              <div className="mb-4 inline-block  border-[0.1px] border-blue-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-md">
                {item.timeline}
              </div>
             
              </div>
              <div className=" flex items-center gap-2">
              <div className=" mb-4">

<Landmark className=" text-gray-400"/>
</div>
              <div className="mb-4 inline-block text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-md">
                {item.subtitle}
              </div>
                
              </div>

              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};