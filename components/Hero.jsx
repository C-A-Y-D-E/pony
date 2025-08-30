import { motion } from "motion/react";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <section className="relative w-full z-40 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full object-cover max-lg:min-h-[600px]"
          src="main_hero.png"
        />
        <motion.img
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "-15%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-[200px] md:max-w-[320px] lg:max-w-[420px] max-md:-translate-x-[45%] object-cover absolute bottom-[20%] left-1/2 xl:max-w-[600px]"
          src="hero_img.png"
        />
        <div className="w-full max-lg:hidden container absolute left-1/2 -translate-x-1/2 top-3 mx-auto px-8 py-5 max-w-[1300px] z-20">
          <div className="flex items-center w-full justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-5 p-4 bg-[#FF2083] rounded-2xl text-white"
            >
              <h2 className="font-light">0xdD8f009...C75BE678D0F</h2>
              <CopyToClipboard
                text="0xdD8f009C4f8699457B6c846AfDEC1C75BE678D0F"
                onCopy={handleCopy}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {copied ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-[8px] md:text-xs font-bold"
                    >
                      Copied!
                    </motion.span>
                  ) : (
                    <img
                      className="w-full max-w-[30px] object-cover cursor-pointer"
                      src="copy.png"
                    />
                  )}
                </motion.button>
              </CopyToClipboard>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://x.com/Pony_BSC"
                      target="_blank"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[45px] object-cover cursor-pointer"
                  src="x.png"
                />
              </motion.a>
              <motion.a
                href="https://t.me/Pony_BSC"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[45px] object-cover cursor-pointer"
                  src="tele.png"
                />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 lg:mt-24 space-y-2 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-thin text-[#FF2083]"
            >
              #Friendship is Magic
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="font-bold text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-[#FF2083]"
            >
              My Little Pony
            </motion.h1>
          </motion.div>
        </div>
        <div className="w-full lg:hidden container absolute left-1/2 -translate-x-1/2 top-3 mx-auto px-6 py-5 max-w-[1300px] z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 lg:mt-24 space-y-1 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-2xl md:text-3xl font-thin text-[#FF2083]"
            >
              #Friendship is Magic
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="font-bold text-5xl md:text-6xl text-[#FF2083]"
            >
              My Little Pony
            </motion.h1>
          </motion.div>
          <div className="flex mt-5 flex-col gap-6 items-center w-full justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-5 py-1 px-3 bg-[#FF2083] rounded-xl text-white"
            >
              <h2 className="font-light">0xdD8f009...C75BE678D0F</h2>
              <CopyToClipboard
                text="0xdD8f009C4f8699457B6c846AfDEC1C75BE678D0F"
                onCopy={handleCopy}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {copied ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-[8px] md:text-xs font-bold"
                    >
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="w-full object-cover max-w-[20px] cursor-pointer"
                      src="copy.png"
                    />
                  )}
                </motion.button>
              </CopyToClipboard>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="/"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[35px] object-cover cursor-pointer"
                  src="x.png"
                />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[35px] object-cover cursor-pointer"
                  src="tele.png"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
