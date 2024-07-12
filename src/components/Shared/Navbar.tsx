"use client";

import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import {
  IoMdSearch,
  IoMdCreate,
  IoMdMail,
  IoMdNotifications,
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import assets from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links JSX
  const navLinks = (
    <>
      <Link href="/search">
        <IoMdSearch className="bg-baltic-sea h-10 w-10 p-2 rounded-full" />
      </Link>

      <Link href="/create">
        <IoMdCreate className="bg-baltic-sea h-10 w-10 p-2 rounded-full" />
      </Link>

      <Link href="/message">
        <IoMdMail className="bg-baltic-sea h-10 w-10 p-2 rounded-full" />
      </Link>

      <Link href="/notification">
        <IoMdNotifications className="bg-baltic-sea h-10 w-10 p-2 rounded-full" />
      </Link>

      <Link href="/options">
        <BsThreeDots className="bg-baltic-sea h-10 w-10 p-2 rounded-full" />
      </Link>
    </>
  );
  return (
    <div className="bg-dark-jungle-green text-seashell">
      <div className="min-h-20 max-w-6xl mx-auto px-9">
        {/* Navbar main container */}
        <div className="min-h-20 max-h-full flex items-center justify-between">
          {/* Logo with link to homepage */}
          <Link href="/">
            <Image
              src={assets.images.logo}
              alt="logo"
              height={28}
              width={155}
            />
          </Link>

          {/* Desktop navigation links */}
          <div className="flex">
            <div className="hidden md:flex justify-between gap-4">
              {navLinks}
            </div>

            {/* Profile picture and mobile menu toggle button */}
            <div className="flex gap-4">
              <Image
                className="md:ms-4"
                src={assets.images.profilePic}
                alt="profile picture"
                height={40}
                width={40}
              />

              {/* Mobile menu toggle button */}
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoMdClose className="bg-[#2B2B2B] h-10 w-10 p-2 rounded-full" />
                ) : (
                  <IoMdMenu className="bg-[#2B2B2B] h-10 w-10 p-2 rounded-full" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          {isOpen && (
            <div className="flex flex-col items-start gap-4 pb-4">
              {navLinks}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
