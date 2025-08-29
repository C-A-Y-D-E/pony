import React from "react";
import { motion } from "motion/react";

const Buy = () => {
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="w-full container mx-auto px-6 py-16 lg:max-w-[1300px]">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl md:text-6xl lg:text-8xl text-center xl:text-9xl font-bold mb-16 text-[#FF2083]"
          >
            How To Buy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full space-y-6"
          >
            <Text
              h1={`1`}
              p={`Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.`}
              delay={0.3}
            />
            <Text
              h1={`2`}
              p={`Have BNB in your wallet to switch to PONY. If you don't have any BNB, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.`}
              delay={0.4}
            />
            <Text
              h1={`3`}
              p={`Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the PONY token address into Uniswap, select PONY COIN, and confirm. When Metamask prompts you for a wallet signature, sign.`}
              delay={0.5}
            />
            <Text
              h1={`4`}
              p={`Switch BNB for PONY. We have 3/3 Taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.`}
              delay={0.6}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Buy;

const Text = ({ h1, p, delay = 0 }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.9 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="p-5 lg:p-10 bg-[#EC468E] rounded-2xl flex w-full items-center gap-5 lg:gap-10 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
    >
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        viewport={{ once: true }}
        className="text-[#FF2083] st text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        {h1}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {p}
      </motion.p>
    </motion.div>
  );
};
