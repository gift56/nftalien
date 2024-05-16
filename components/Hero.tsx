import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen  relative flex flex-col items-start justify-end">
      <Image
        src="/images/heroImage.png"
        alt="nftalien hero"
        width={1000}
        height={1000}
        priority
        className="!w-full !h-full !object-cover"
      />
    </section>
  );
};

export default Hero;
