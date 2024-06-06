import { collectionData } from "@/utils/constant";
import Image from "next/image";
import { MotionContainer } from "@/components/MotionContainer";
import {
  MediaRenderer,
  shortenIfAddress,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "@/walletAddress";

const Collections = () => {
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nfts } = useNFTs(contract);

  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
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
            {nfts?.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center p-5">
                <img
                  src="/no-data-illustration.png"
                  alt="No Data"
                  className="w-40 h-40 mb-5"
                />
                <h3 className="text-xl font-bold text-white">No NFTs Found</h3>
                <p className="text-md text-gray-400">
                  Looks like you don't have any NFTs yet.
                </p>
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-5">
                {nfts?.map((nft, index) => (
                  <MotionContainer
                    key={nft.metadata.name}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      delay: index * stagger,
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="w-full py-4 px-2 flex flex-col items-start justify-start gap-4 h-[350px] relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:top-[-42%] before:left-[48%] before:hover:w-[20%] before:hover:h-[200%] before:hover:bg-cardLinear before:hover:rotate-[-40deg] before:transition-all before:duration-300 after:hover:content-[''] after:hover:absolute after:hover:inset-[5px] after:hover:bg-dark"
                  >
                    <div className="relative z-10 w-full flex flex-col items-start justify-between gap-4">
                      <MediaRenderer src={nft.metadata.image} />
                      {/* <Image
                       src={item.image}
                       alt="collection icon"
                      
                       priority
                       className="!w-full !h-fit"
                     /> */}
                      <h4 className="text-lg font-normal text-white font-bak md:text-xl uppercase">
                        {nft.metadata.name}
                      </h4>
                      <p className="text-gray-600 text-start text-sm">
                        Owned: {shortenIfAddress(nft.owner)}
                      </p>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collections;
