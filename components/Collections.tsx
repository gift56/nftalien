import { collectionData } from "@/utils/constant";
import Image from "next/image";

const Collections = () => {
  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col gap-8 items-start justify-start">
          <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal">
            HOT COLLECTION
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-5">
            {collectionData.map((item, index) => (
              <div
                key={index}
                className="w-full py-5 px-2 flex flex-col items-center justify-center gap-4 h-[378px] relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:w-[20%] before:hover:h-[170%] before:hover:bg-cardLinear before:hover:rotate-[-52deg] before:transition-all before:duration-300 after:content-[''] after:absolute after:inset-[5px] after:bg-dark"
              >
                <div className="relative z-10 w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={item.image}
                    alt="collection icon"
                    width={292}
                    height={296}
                    priority
                    className="!w-full !h-fit"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
