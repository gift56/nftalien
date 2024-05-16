"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

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
              className="!w-[120px]"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
