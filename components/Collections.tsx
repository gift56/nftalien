import { collectionData } from "@/utils/constant";
import Image from "next/image";
import { MotionContainer } from "./MotionContainer";
import Link from "next/link";

const Collections = () => {
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-5">
            {collectionData.slice(0, 8).map((item, index) => (
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
                className="w-full py-4 px-2 flex flex-col items-start justify-start gap-4 h-[350px] relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:top-[-42%] before:left-[48%] before:hover:w-[20%] before:hover:h-[200%] before:hover:bg-cardLinear before:hover:rotate-[-40deg] before:transition-all before:duration-300 after:hover:content-[''] after:hover:absolute after:hover:inset-[5px] after:hover:bg-dark"
              >
                <div className="relative z-10 w-full flex flex-col items-start justify-between gap-4">
                  <Image
                    src={item.image}
                    alt="collection icon"
                    width={292}
                    height={296}
                    priority
                    className="!w-full !h-fit"
                  />
                  <h4 className="text-lg font-normal text-white font-bak md:text-xl uppercase">
                    {item.name}
                  </h4>
                </div>
              </MotionContainer>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <Link href="/collections">
              <button className="w-fit py-2 px-6 flex items-center justify-center gap-3 bg-primary rounded hover:opacity-80 transition-all duration-300">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
