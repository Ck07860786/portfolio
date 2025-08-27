"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import hackCBS from '@/pictures/hackCBS.jpg'
import cbs from '../pictures/cbs.jpg'
import hackBFCET from '@/pictures/hackBFCET.jpg'
import hackbfgi from '@/pictures/hackbfgi.jpg'
import hackcb from '@/pictures/hackcb.jpg'
import cbspannel from '@/pictures/cbspannel.jpg'

export default function Achievement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  

  return (
    <div className="mt-20 md:mt-20 lg:mt-60">
      {isMobile ? (
        <MobileAchievementView products={products} />
      ) : (
        <HeroParallax products= {products} />
      )}
    </div>
  );
}

// Mobile-friendly grid view
const MobileAchievementView = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string | StaticImageData;
  }[];
}) => {
  return (
    <div className="px-4 ">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-0">
        {products.map((product, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-white">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const products = [
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail: hackCBS,
  },
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail: hackBFCET,
  },
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail: cbs,
  },
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail: hackbfgi,
  },
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail: hackCBS,
  },
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail: hackBFCET,
  },
  {
    title: "Top 10 Ranker At hackCBS",
    link: "/",
    thumbnail: hackcb,
  },
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail: hackbfgi,
  },
  {
    title: "HACK CBS",
    link: "/",
    thumbnail: cbspannel,
  },
];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string | StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
    springConfig
  );
  
  return (
    <div
      ref={ref}
      className="h-[180vh] md:h-[270vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((product, key) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 space-x-4 md:space-x-20">
          {secondRow.map((product, key) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20">
          {thirdRow.map((product, key) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={key}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-96 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
        My Achievements <br /> and Impact
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-4 md:mt-8 dark:text-neutral-200">
        Explore the highlights of my journey as a developer and innovator. These accomplishments reflect my ability to turn ideas into reality and solve challenges with creativity and precision.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string | StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 w-48 md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm md:text-base font-medium">
        {product.title}
      </h2>
    </motion.div>
  );
};