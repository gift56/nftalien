import { storyData } from "@/utils/constant";

const Story = () => {
  return (
    <section className="w-full py-12">
      <div className="contain">
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="w-full lg:flex-1 flex flex-col gap-8 items-center justify-center lg:items-start lg:justify-start relative">
            <h2 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal uppercase">
              tHE STORY
            </h2>
            <p className="text-base font-normal md:text-lg text-graycolor md:max-w-[635px] text-center lg:text-start">
              Our collection's priority is to reward NFT holders by developing
              utilities they can use in their current everyday life. Not in a
              hypothetical future.
            </p>
            <div className="flex items-start justify-start gap-8">
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-base font-normal text-graycolor font-bak capitalize">
                  Total Item
                </p>
                <h4 className="text-2xl md:text-4xl lg:text-5xl font-normal font-bak text-white drop-shadow-sm">
                  2240+
                </h4>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-base font-normal text-graycolor font-bak capitalize">
                  Profiles whitelisted
                </p>
                <h4 className="text-2xl md:text-4xl lg:text-5xl font-normal font-bak text-white drop-shadow-sm">
                  1000+
                </h4>
              </div>
            </div>
            <button
              type="button"
              className="w-fit px-3 py-3 md:px-6 flex items-center justify-center gap-3 border-2 border-primary rounded text-xs md:text-base font-bak font-normal uppercase text-white hover:opacity-80 transition-all duration-300"
            >
              READ MORE
            </button>
          </div>
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-5">
            {storyData.map((item, index) => (
              <div
                key={index}
                className="w-full py-7 px-2 flex flex-col items-center justify-center gap-4 h-[210px] relative overflow-hidden bg-dark before:hover:content-[''] before:hover:absolute before:hover:w-[20%] before:hover:h-[170%] before:hover:bg-cardLinear before:hover:rotate-[-52deg] before:transition-all before:duration-300 after:content-[''] after:absolute after:inset-[5px] after:bg-dark"
              >
                <div className="relative z-10 w-full flex flex-col items-center justify-center gap-4">
                  <h6 className="text-4xl md:text-6xl font-normal font-bak text-primary/50 absolute -top-8">
                    0{index + 1}
                  </h6>
                  <h3 className="text-xl font-normal font-bak text-white text-center relative">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal md:text-lg text-graycolor text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
