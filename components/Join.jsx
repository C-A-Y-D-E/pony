import React from "react";
import { motion } from "motion/react";

const Join = () => {
  return (
    <>
      <section className="relative pt-20">
        <motion.img
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-[50px] md:max-w-[200px] md:top-[0%] object-cover absolute left-[10%] top-2"
          src="balloon.png"
        />
        <motion.img
          animate={{
            y: [0, -15, 0],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-full max-w-[50px] md:max-w-[200px] md:top-[0%] object-cover absolute right-[10%] top-2"
          src="balloon.png"
        />
        <motion.img
         animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
          className="w-full max-w-[200px] md:max-w-[400px] absolute bottom-0 left-1/2 -translate-x-1/2"
          src="join.png"
        />
        <div className="w-full bg-[#CA2C89] h-[30px] md:h-[80px]" />
        <div className="w-full bg-[#EF5B9F] h-[30px] md:h-[80px]" />
        <div className="w-full bg-[#CA2C89] h-[30px] md:h-[80px]" />

        <div className="w-full container mx-auto px-6 py-8 max-w-[1300px]">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#FF2083]">
              Copyright 2025
            </h1>
            <div className="flex items-center gap-4">
              <a href="https://x.com/Pony_BSC"
                      target="_blank">
                <img
                  className="w-full max-w-[35px] lg:max-w-[40px] object-cover"
                  src="x.png"
                />
              </a>
              <a  href="https://t.me/Pony_BSC"
                target="_blank">
                <img
                  className="w-full max-w-[35px] lg:max-w-[40px] object-cover"
                  src="tele.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
