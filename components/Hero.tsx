import Image from "next/image";
import { MotionContainer } from "./MotionContainer";
import { ConnectWallet } from "@thirdweb-dev/react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-end pb-10">
      <div className="absolute -top-16 w-full h-full">
        <Image
          src="/images/heroImage.webp"
          alt="nftalien hero"
          width={1000}
          height={1000}
          priority
          className="!w-full !h-full !object-cover"
        />
      </div>
      <div className="contain relative z-10 flex flex-col gap-5 items-center justify-center">
        <MotionContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <h1 className="text-white text-center text-3xl md:text-5xl lg:text-[62px] lg:leading-[74.8px] font-normal font-bak uppercase">
            EXPLORE NFT COLLECTION
          </h1>
        </MotionContainer>
        <MotionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.1 }}
        >
          <p className="text-lg md:text-xl font-normal md:max-w-[752px] text-center">
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </p>
        </MotionContainer>
        <MotionContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
        >
          <div className="flex w-full items-center justify-center gap-5">
            <ConnectWallet
              btnTitle="Connect Wallet"
              className="!w-fit !px-3 !py-3 md:!px-6 !flex !items-center !justify-center !gap-3 !bg-primary !rounded !text-xs md:!text-base !font-bak !font-normal !uppercase !text-dark hover:!opacity-80 !transition-all !duration-300"
            />
            <button
              type="button"
              className="w-fit px-3 py-3 md:px-6 flex items-center justify-center gap-3 border-2 border-primary rounded text-xs md:text-base font-bak font-normal uppercase text-white hover:opacity-80 transition-all duration-300"
            >
              whitelist now
            </button>
          </div>
        </MotionContainer>
      </div>
    </section>
  );
};

export default Hero;
