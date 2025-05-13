"use client";

import Image from "next/image";
import Link from "next/link";
import Navlink from "../components/navbar/Navlink";
import NavButton from "../components/navbar/NavButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300
        ${scrolled ? "shadow-md py-2" : "shadow py-3"}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
        <Link href={"/"} className="relative z-10">
          <Image
            src={"/logo.svg"}
            width={scrolled ? 220 : 250}
            height={scrolled ? 70 : 80}
            alt={"Bondhumohol logo"}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-lg gap-8 ml-12">
          <Navlink href="/" text="হোম" isActive={pathname === "/"} />
          <Navlink
            href="/members"
            text="সদস্যসমূহ"
            isActive={pathname === "/members"}
          />
          <Navlink
            href="/constitution"
            text="সংবিধান"
            isActive={pathname === "/constitution"}
          />
          <Navlink
            href="/contact"
            text="যোগাযোগ"
            isActive={pathname === "/contact"}
          />
        </div>

        {/* Desktop Buttons */}
        <div className="flex-1 z-10 hidden sm:flex items-center gap-4 justify-end">
          <NavButton href="/donation" text="অনুদান" />
          <NavButton href="/admission" text="আবেদন ফর্ম" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-[#284a4e] transition-all duration-300 ease-in-out 
              ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#284a4e] transition-all duration-300 ease-in-out 
              ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#284a4e] transition-all duration-300 ease-in-out 
              ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-[5] pt-24 px-6 flex flex-col transition-transform duration-300 ease-in-out lg:hidden
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col space-y-6 text-xl">
            <Navlink href="/" text="হোম" isActive={pathname === "/"} />
            <Navlink
              href="/members"
              text="সদস্যসমূহ"
              isActive={pathname === "/members"}
            />
            <Navlink
              href="/constitution"
              text="সংবিধান"
              isActive={pathname === "/constitution"}
            />
            <Navlink
              href="/contact"
              text="যোগাযোগ"
              isActive={pathname === "/contact"}
            />
          </nav>

          <div className="sm:hidden mt-4 flex flex-col space-y-4">
            <NavButton href="/donation" text="অনুদান" />
            <NavButton href="/admission" text="আবেদন ফর্ম" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
