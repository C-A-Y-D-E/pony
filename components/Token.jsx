import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "motion/react";

const Token = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <section className="w-full bg-[#ED478F] relative overflow-x-hidden">
        <motion.img
          initial={{ x: 200, opacity: 0, scale: 1.1 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full object-cover absolute max-lg:hidden bottom-0 right-0 max-w-[300px] lg:max-w-[600px] xl:max-w-[800px]"
          src="token.png"
        />
        <div className="w-full container mx-auto px-6 py-16 lg:max-w-[1300px]">
          <div className="w-full flex flex-col gap-5 items-start max-lg:items-center max-lg:text-center text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
            >
              Tokenomics
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-xl font-semibold md:text-2xl">
                Token address:
              </h1>
              <div className="flex items-center gap-3 pb-5 border-b border-b-white">
                <h2 className="font-light">
                  0xdD8f009C4f8699457B6c846AfDEC1C75BE678D0F
                </h2>
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
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-xl font-semibold md:text-2xl">Token name</h1>
              <h2 className="font-light text-xl md:text-2xl">My Little Pony</h2>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-xl font-semibold md:text-2xl">
                Token ticker
              </h1>
              <h2 className="font-light text-xl md:text-2xl">$PONY</h2>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-xl font-semibold md:text-2xl">Supply</h1>
              <h2 className="font-light text-xl md:text-2xl">
                420,690,000,000,000
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-6"
            >
              <motion.a
                href="/"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full object-cover max-w-[80px] cursor-pointer"
                  src="scr.png"
                />
              </motion.a>
              <motion.a
                href="https://www.dextools.io/app/en/bnb/pair-explorer/0x8355150e8c12f6809df4c4e4b86e906c1be95b27?t=1756537678664"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full object-cover max-w-[80px] cursor-pointer"
                  src="dextools.png"
                />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-5 lg:gap-16 p-4 bg-white rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <h1 className="text-xl lg:text-2xl xl:text-3xl text-[#FF2083]">
                Buy PONY
              </h1>
              <motion.img
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full object-cover max-w-[100px]"
                src="right_arrow.svg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full object-cover lg:hidden"
          src="token.png"
        />
      </section>
    </>
  );
};

export default Token;
