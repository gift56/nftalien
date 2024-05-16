"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdWbSunny } from "react-icons/md";
import { FaBars, FaDiscord } from "react-icons/fa";

const navLinks = [
  {
    text: "Home",
    href: "/",
  },

  {
    text: "About",
    href: "/",
  },

  {
    text: "roadmap",
    href: "/",
  },

  {
    text: "COLLECTION",
    href: "/",
  },

  {
    text: "FAQS",
    href: "/",
  },
];

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="W-full bg-bodydark sticky">
      <div className="contain">
        <nav
          aria-label="navigation"
          className="w-full flex items-center justify-between py-4"
        >
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="creon logo"
              width={140}
              height={39}
              priority
              className="!w-[140px] md:!w-[160px]"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-base uppercase font-normal text-white font-bak flex items-center justify-start gap-2 cursor-pointer hover:text-primary transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-dark">
              <MdWbSunny size={18} className="text-primary" />
            </span>
            <Link
              href="https:discord.com"
              className="w-fit py-2 px-6 flex items-center justify-center gap-3 bg-dark rounded"
            >
              <FaDiscord size={18} />
              <span className="text-base font-bak font-normal">Discord</span>
            </Link>
          </div>
          <span
            onClick={() => setMobileNav((prev) => !prev)}
            className="flex lg:hidden text-white rounded-lg"
          >
            {mobileNav === false && <FaBars size={25} />}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
