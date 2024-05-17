import { howData } from "@/utils/constant";
import Image from "next/image";

const How = () => {
  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal">
            HOW TO <span className="font-bak text-primary">NFTALIEN</span> WORK
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-5">
            {howData.map((item, index) => (
              <div
                key={index}
                className="w-full py-5 px-2 flex flex-col items-center justify-center gap-4 h-[210px] relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:w-[20%] before:hover:h-[170%] before:hover:bg-cardLinear before:hover:rotate-[-52deg] before:transition-all before:duration-300 after:content-[''] after:absolute after:inset-[5px] after:bg-dark"
              >
                <div className="relative z-10 w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={item.icon}
                    alt="how icon"
                    width={82}
                    height={72}
                    priority
                    className="!w-fit !h-fit"
                  />
                  <div className="w-full flex flex-col items-center justify-center gap-1">
                    <h3 className="text-lg uppercase font-bak font-normal text-primary">
                      STEP {index + 1}
                    </h3>
                    <h2 className="text-lg text-center uppercase font-bak font-normal text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
