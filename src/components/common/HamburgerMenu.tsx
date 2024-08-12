"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import devLogo from "@/assets/logos/wahab-sharif-logo.svg";
import { navLinks, socialLinks } from "@/data/navData";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full h-20 bg-white z-[888] animate-fadeInNav">
      <div className="w-[85%] mx-auto pt-3.5 flex justify-between items-center">
        <Link
          href="#"
          id="logo"
          className="text-brandy text-3xl font-normal no-underline mt-2.5"
        >
          {/* Abdul Wasay */}
        </Link>
        <div className="flex items-center">
          <div className="cursor-pointer text-5xl z-[999]" onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-brandy transition-transform duration-300 ease-in-out" />
            ) : (
              <FiMenu className="text-brandy transition-transform duration-300 ease-in-out" />
            )}
          </div>
          <div
            className={`fixed inset-0 bg-white bg-opacity-10 backdrop-blur-lg transition-opacity duration-500 ease-in-out flex ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex flex-1 items-center">
              <div className="ml-[135px] flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`block text-peachOrange text-5xl font-bold no-underline mb-4 transform transition-all duration-500 ease-in-out ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: link.delay }}
                  >
                    {link.label}
                  </Link>
                ))}
                <p
                  className={`text-hummingBird text-sm font-normal flex items-center gap-1 absolute bottom-5 transition-opacity duration-500 ease-in-out ${
                    menuOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Abdul Wasay. &copy; {currentYear} <span>|</span> Designed and
                  Developed By{" "}
                  <Link href={"https://wahabsharif.me/"} target="_blank">
                    <Image
                      src={devLogo}
                      alt="developer-logo"
                      width={32}
                      height={32}
                    />
                  </Link>
                </p>
              </div>

              {/* Intro and Social Links */}
              {menuOpen && (
                <div className="flex-1 flex flex-col items-end p-4 mr-[135px]">
                  <p className="text-lg text-hummingBird max-w-xs mb-4">
                    Welcome to Abdul Wasay&apos;s site! Explore our services,
                    check out our work, and get in touch.
                  </p>
                  <a
                    href="/contact" // Replace with your contact page link
                    className="mb-4 px-4 py-2 bg-blueStonePrim text-hummingBird rounded-full text-center hover:bg-peachOrange transition-colors duration-300 ease-in-out"
                  >
                    Contact
                  </a>
                  <div className="flex space-x-4 mr-[100px]">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Link
                          key={index}
                          href={social.href}
                          className="text-2xl p-2 text-center bg-blueStonePrim rounded-full text-hummingBird hover:text-peachOrange transition-transform duration-300 ease-in-out hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
