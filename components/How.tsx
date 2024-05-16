import { howData } from "@/utils/constant";
import Card from "./CardComponent/Card";
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
              <Card key={index}>
                <div className="w-full py-5 px-4 flex flex-col items-center justify-center gap-4 h-[210px]">
                  <Image
                    src={item.icon}
                    alt="how icon"
                    width={82}
                    height={72}
                    priority
                    className="!w-fit !h-fit"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
