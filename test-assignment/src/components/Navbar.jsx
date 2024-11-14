"use client";

import { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import downArrow from '../assets/downArrow.png';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="relative bg-[#181818] text-white w-full">
      <div className="flex items-center px-4 p-3 justify-between md:gap-10 md:px-5">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[60px] sm:w-[80px] md:w-[100px]" />
        </Link>

        {/* Search Bar */}
        <div className="relative">
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="rounded-full py-2 pl-6 w-full text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[12px] md:placeholder:text-[16px]"
            placeholder="Search Creator/Product"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white"
          >
            <HiOutlineMenuAlt1 size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:gap-8 text-white">
          <li className="text-[18px] lg:text-[20px]">Fav Creators</li>
          <li className="text-[18px] lg:text-[20px]">Merchandise</li>
          <li className="text-[18px] lg:text-[20px]">Brand</li>
          <li className="text-[18px] lg:text-[20px]">Digital</li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-white p-0.5 gap-8 px-5 rounded-2xl flex items-center justify-between"
            >
              <Image src={user} width={20} height={20} alt="User Icon" />
              <Image src={downArrow} width={13} height={13} alt="Arrow Down" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-[#181818] text-white rounded-lg shadow-lg w-40 py-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">My Store</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden relative top-[0px] left-0 w-full bg-[#181818] text-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        {menuOpen && (
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="text-[18px] sm:text-[21px]">Fav Creators</li>
            <li className="text-[18px] sm:text-[21px]">Merchandise</li>
            <li className="text-[18px] sm:text-[21px]">Brand</li>
            <li className="text-[18px] sm:text-[21px]">Digital</li>
            <li className="bg-white relative p-0.5 gap-8 px-6 rounded-2xl flex items-center">
              <button
                onClick={toggleDropdown}
                className="bg-white px-3 rounded-2xl flex items-center justify-between"
              >
                <Image src={user} width={20} height={20} alt="User Icon" />
                <Image src={downArrow} width={13} height={13} alt="Arrow Down" />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute top-16 bg-[#181818] text-white rounded-lg shadow-lg w-40 py-2">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">My Store</li>
                </ul>
              )}
            </li>
          </ul>
        )}

      </div>
    </nav>
  );
}