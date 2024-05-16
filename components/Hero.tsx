import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-start justify-end">
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
    </section>
  );
};

export default Hero;
