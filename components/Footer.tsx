import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bodydark py-10">
      <div className="contain">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="w-full md:w-fit flex flex-col md:flex-row items-start justify-start gap-3 md:gap-6">
            <p className="text-base font-normal text-white font-satoshi">
              © NFTALIEN 2024. All rights reserved.
            </p>
          </div>
          <p className="text-base font-normal text-white font-satoshi flex items-center gap-1">
            <span>Powered by</span>
            <Image
              src="/images/logo.png"
              alt="nftables logo"
              width={101}
              height={18}
              priority
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
