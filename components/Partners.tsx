import { partnerData } from "@/utils/constant";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal uppercase">
            <span className="font-bak text-primary">BINABOX</span> pARTNER
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-start justify-start gap-3">
            {partnerData.map((item, index) => (
              <div
                key={index}
                className="w-full h-[100px] hover:bg-dark flex items-center justify-center transition-all"
              >
                <Image
                  src={item.icon}
                  alt="partner Icon"
                  width={162}
                  height={60}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
