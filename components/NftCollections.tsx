"use client";
import { MotionContainer } from "@/components/MotionContainer";
import {
  MediaRenderer,
  shortenIfAddress,
  useAddress,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "@/walletAddress";
import Image from "next/image";
import Link from "next/link";
import { collectionData } from "@/utils/constant";

const NftCollections = () => {
  const address = useAddress();
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nfts } = useNFTs(contract);

  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col gap-8 items-start justify-start">
          <MotionContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal">
              HOT COLLECTION
            </h2>
          </MotionContainer>
          {collectionData?.length === undefined ? (
            <div className="w-full flex flex-col items-center justify-center p-5">
              <img src="/images/noDataIllustration.png" alt="No Data" />
              <h3 className="text-xl font-bold text-white">No NFTs Found</h3>
              <p className="text-md text-gray-400 text-center">
                Looks like you don't have any NFTs yet.
              </p>
              <Link
                href="/minter"
                className="w-fit px-6 flex h-12 items-center justify-center gap-3 bg-primary rounded hover:opacity-80 disabled:cursor-not-allowed disabled:bg-primary/60 transition-all duration-300 text-dark mt-5"
              >
                Mint NFT
              </Link>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-5">
              {collectionData?.map((nft, index) => (
                <MotionContainer
                  key={nft.name}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * stagger,
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                  className="w-full py-4 px-2 flex flex-col items-start justify-start gap-4 relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:top-[-42%] before:left-[49%] before:hover:w-[20%] before:hover:h-[200%] before:hover:bg-cardLinear before:hover:rotate-[-40deg] before:transition-all before:duration-300 after:hover:content-[''] after:hover:absolute after:hover:inset-[5px] after:hover:bg-dark"
                >
                  <div className="relative z-10 w-full flex flex-col items-start justify-between gap-4">
                    {/* <MediaRenderer src={nft.image} /> */}
                    <Image
                      src={nft.image}
                      alt="collection icon"
                      width={292}
                      height={296}
                      priority
                      className="!w-full !h-fit"
                    />
                    <h4 className="text-lg font-normal text-white font-bak md:text-xl uppercase">
                      {nft.name}
                    </h4>
                    <p className="text-gray-400 text-start text-sm">
                      Owned: {shortenIfAddress(address)}
                    </p>
                  </div>
                </MotionContainer>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NftCollections;
