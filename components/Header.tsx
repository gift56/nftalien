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
  return (
    <header className="W-full bg-bodydark sticky">
      <div className="contain">
        <div className="w-full py-4"></div>
      </div>
    </header>
  );
};

export default Header;
