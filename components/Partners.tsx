import { partnerData } from "@/utils/constant";
import Image from "next/image";
import { MotionContainer } from "./MotionContainer";

const Partners = () => {
  const stagger = 0.25;

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <MotionContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal uppercase">
              <span className="font-bak text-primary">BINABOX</span> pARTNER
            </h2>
          </MotionContainer>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-start justify-start gap-3">
            {partnerData.map((item, index) => (
              <MotionContainer
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * stagger,
                  ease: "easeInOut",
                  duration: 0.2,
                }}
                className="w-full h-[80px] hover:bg-dark flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={item.icon}
                  alt="partner Icon"
                  width={162}
                  height={60}
                  priority
                />
              </MotionContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
