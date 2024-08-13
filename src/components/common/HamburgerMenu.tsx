"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiMenu, FiX } from "react-icons/fi";

// Dynamically import components
const SendMessage = dynamic(() => import("./SendMessage"));
const TransitionLink = dynamic(() => import("./TransitionLink"));

// Import static assets and data
import devLogo from "@/assets/logos/wahab-sharif-logo.svg";
import { navLinks, socialLinks } from "@/data/navData";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full h-20 bg-white z-40 animate-fadeInNav">
      <div className="w-full max-w-screen-xl mx-auto pt-3.5 flex justify-between items-center px-4">
        <Link
          href="/"
          id="logo"
          className="text-brandy text-2xl font-normal no-underline mt-2.5 md:text-3xl"
        >
          Film By Wasay
        </Link>
        <div className="flex items-center">
          <button
            className="text-3xl md:text-5xl z-40"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="menu"
          >
            {menuOpen ? (
              <FiX className="text-brandy transition-transform duration-300 ease-in-out" />
            ) : (
              <FiMenu className="text-brandy transition-transform duration-300 ease-in-out" />
            )}
          </button>
          <div
            id="menu"
            className={`fixed inset-0 bg-white bg-opacity-10 backdrop-blur-lg transition-opacity duration-500 ease-in-out flex ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="w-full h-full flex flex-col overflow-y-auto max-h-screen">
              <div className="flex flex-col md:flex-row flex-1">
                {/* Nav Links */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-4 md:ml-40">
                  {navLinks.map((link, index) => (
                    <TransitionLink
                      key={index}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block text-peachOrange text-3xl md:text-5xl font-bold no-underline mb-4 transform transition-all duration-500 ease-in-out ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: link.delay }}
                      label={""}
                    >
                      {link.label}
                    </TransitionLink>
                  ))}
                </div>

                {/* Intro */}
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  {menuOpen && (
                    <>
                      <p className="text-base md:text-lg text-hummingBird max-w-xs mb-4 text-center">
                        Welcome to Abdul Wasay&apos;s site! Explore our
                        services, check out our work, and get in touch.
                      </p>

                      <div className="flex items-center justify-center mb-4">
                        <SendMessage />
                      </div>

                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => {
                          const IconComponent = social.icon;
                          return (
                            <Link
                              key={index}
                              href={social.href}
                              className="text-2xl p-2 text-center bg-blueStonePrim rounded-full text-hummingBird hover:text-peachOrange transition-transform duration-300 ease-in-out hover:scale-110"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={handleLinkClick} // Close menu on social link click
                            >
                              <IconComponent />
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bot Text */}
              <div className="bg-white p-4 flex items-center justify-center w-full text-center">
                <p className="text-hummingBird text-sm font-normal flex items-center space-x-2 sm:text-xs">
                  Abdul Wasay. &copy; {currentYear}{" "}
                  <span className="mx-1">|</span> Designed and Developed By
                  <Link
                    href={"https://wahabsharif.me/"}
                    target="_blank"
                    className="flex items-center"
                  >
                    <Image
                      src={devLogo}
                      alt="developer-logo"
                      width={32}
                      height={32}
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
