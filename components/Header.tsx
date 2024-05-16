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
        <div className="w-full py-4"></div>
      </div>
    </header>
  );
};

export default Header;
