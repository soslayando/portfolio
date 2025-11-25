"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IoMail, IoLogoLinkedin } from "react-icons/io5";
import { LINKEDIN_URL, MAIL_URL } from "../constants";

export const Header = () => {
  const links = [{ href: "/about", label: "About" }];

  const pathname = usePathname();
  const [mobileNavVisible, setMobileNavVisible] = React.useState(false);

  const variants = {
    open: { opacity: 1, y: 0, height: "100%" },
    closed: { opacity: 0, height: "0" },
  };

  return (
    <header
      className={`header flex items-center justify-between px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] h-[var(--header-height)] bg-[var(--header-bg-color)] text-[var(--header-text-color)]`}
    >
      <Link href="/" className="flex items-center h-full pr-4 space-x-3">
        <span className="font-featured font-medium text-2xl transition-[font-size] duration-300 ease-in-out">
          Jose Andrés Granero
        </span>
      </Link>
      <label className="static z-40 inline-flex sm:hidden flex-col items-center space-y-2 cursor-pointer">
        <input
          onChange={() => setMobileNavVisible(!mobileNavVisible)}
          type="checkbox"
          className="peer sr-only"
          checked={mobileNavVisible}
        />
        <div
          className="w-6 h-[2px] bg-white transition-all duration-300
              peer-checked:translate-y-[7px] peer-checked:rotate-45"
        ></div>
        <div
          className="w-6 h-[2px] bg-white transition-all duration-200 opacity-100
              peer-checked:opacity-0"
        ></div>
        <div
          className="w-6 h-[2px] bg-white transition-all duration-300
              peer-checked:-translate-y-[13px] peer-checked:-rotate-45"
        ></div>
      </label>
      <nav className="hidden sm:block">
        <ul className="flex gap-6 text-md font-medium">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "font-bold text-[var(--header-text-color)] border-b-4 pb-1 transition transition-border duration-300 ease-in-out"
                    : "text-[var(--header-text-color)] border-transparent pb-1 transition transition-border duration-300 ease-in-out hover:border-b-4 hover:border-white/20"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ul className="flex gap-4">
              <li>
                <a
                  href={LINKEDIN_URL}
                  className="text-white text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to my Linkedin profile (new tab)"
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a
                  href={MAIL_URL}
                  className="text-white text-2xl"
                  title="Send me an email"
                >
                  <IoMail />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <AnimatePresence mode="wait">
        {mobileNavVisible && (
          <motion.nav
            className="fixed inset-0 w-full h-full z-30 bg-black/90 sm:bg-transparent sm:block sm:relative sm:w-auto sm:h-auto"
            variants={variants}
            initial="closed"
            animate={mobileNavVisible ? "open" : "closed"}
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <ul className="flex gap-8 sm:gap-6 w-full h-full text-md font-medium flex-col justify-center items-center sm:flex-row sm:justify-start">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileNavVisible(false)}
                    className={`${
                      pathname === link.href
                        ? "font-bold text-[var(--header-text-color)] border-b-4 pb-1 transition transition-border duration-300 ease-in-out"
                        : "text-[var(--header-text-color)] border-transparent pb-1 transition transition-border duration-300 ease-in-out hover:border-b-4 hover:border-gray-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={LINKEDIN_URL}
                  className="text-white"
                  onClick={() => setMobileNavVisible(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to my Linkedin profile (new tab)"
                >
                  My Linkedin profile
                </a>
              </li>
              <li>
                <a
                  href={MAIL_URL}
                  className="text-white"
                  onClick={() => setMobileNavVisible(false)}
                  title="Send me an email"
                >
                  Send me an email
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
