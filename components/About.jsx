import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <section className="lg:mt-[-10%] relative z-[999] pt-16">
        <div className="w-full relative container mx-auto max-w-[1300px] px-6 pb-16 overflow-x-hidden">
          <div className="w-full flex flex-col max-lg:items-center text-center items-end lg:text-right gap-7 text-[#FF2083]">
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold"
            >
              About
            </motion.h1>
            <motion.p
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-light text-lg lg:text-2xl xl:text-3xl max-xl:max-w-[600px] max-w-[800px]"
            >
              Other tokens are serious. We're seriously fun. Powered by BNB
              Chain, fueled by laughter, and sprinkled with confetti — PONY
              Token isn't just a coin, it's a party you hold in your wallet.
            </motion.p>
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-5 lg:gap-16 p-4 bg-white rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.img
                animate={{ x: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full object-cover max-w-[100px]"
                src="left_arrow.svg"
                alt=""
              />
              <h1 className="text-2xl lg:text-3xl xl:text-4xl">Buy PONY</h1>
            </motion.div>
          </div>
        </div>
        {/* Balloon positioned outside the container to avoid clipping */}
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
          className="w-full absolute top-8 left-2 max-w-[80px] lg:max-w-[300px] xl:max-w-[350px] z-[999]"
          src="balloon.png"
        />
      </section>
    </>
  );
};

export default About;
