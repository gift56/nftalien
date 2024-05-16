import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-end pb-10">
      <div className="absolute -top-16 w-full h-full">
        <Image
          src="/images/heroImage.png"
          alt="nftalien hero"
          width={1000}
          height={1000}
          priority
          className="!w-full !h-full !object-cover"
        />
      </div>
      <div className="contain relative z-10 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-white text-center text-3xl md:text-5xl lg:text-[62px] lg:leading-[74.8px] font-normal font-bak uppercase">
          EXPLORE NFT COLLECTION
        </h1>
        <p className="text-lg md:text-xl font-normal md:max-w-[752px] text-center">
          A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
          Unique, metaverse-ready, and designed to benefit their holders.
        </p>
        <div className="flex w-full items-center justify-center gap-5">
          <button
            type="button"
            className="w-fit px-3 py-3 md:px-6 flex items-center justify-center gap-3 bg-primary rounded text-xs md:text-base font-bak font-normal uppercase text-dark hover:opacity-80 transition-all duration-300"
          >
            connect wallet
          </button>
          <button
            type="button"
            className="w-fit px-3 py-3 md:px-6 flex items-center justify-center gap-3 border-2 border-primary rounded text-xs md:text-base font-bak font-normal uppercase text-white hover:opacity-80 transition-all duration-300"
          >
            whitelist now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
