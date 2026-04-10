'use client';

// Next.js এর Link component page navigation এর জন্য
import Link from 'next/link';

// Current route/path পাওয়ার জন্য
import { usePathname } from 'next/navigation';

// React এবং useState import করা হয়েছে
import React, { useState } from 'react';

const Navbar = () => {
  // বর্তমানে কোন route এ আছি সেটা বের করার জন্য
  const pathName = usePathname();

  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu close করার function
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  // Active link এবং normal link এর class আলাদা করার function
  const navLinkClass = (path) =>
    pathName === path
      ? 'block w-full rounded-lg border border-blue-500 bg-blue-100 px-3 py-2 text-blue-500'
      : 'block w-full rounded-lg px-3 py-2 transition duration-200 hover:bg-blue-100 hover:text-blue-600';

  // Navbar এর সব links এক জায়গায় রাখা হয়েছে
  const links = (
    <>
      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/')}
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/about')}
          href="/about"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/about/developers')}
          href="/about/developers"
        >
          Developer
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/about/designer')}
          href="/about/designer"
        >
          Designer
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/services')}
          href="/services"
        >
          Services
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/contact')}
          href="/contact"
        >
          Contact
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/blogs')}
          href="/blogs"
        >
          Blogs
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/dashboard')}
          href="/dashboard"
        >
          Dashboard
        </Link>
      </li>

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/users')}
          href="/users"
        >
          Users
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 shadow-sm">
      <div className="navbar-start">
        {/* Mobile menu button এবং dropdown */}
        <div className="relative lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          <ul
            className={`absolute left-0 top-14 z-50 w-56 rounded-xl bg-base-100 p-3 space-y-1 shadow-xl transition-all duration-200 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            {links}
          </ul>
        </div>

        {/* Logo বা website name */}
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
      </div>

      {/* Right side button */}
      <div className="navbar-end">
        <button className="btn btn-primary rounded-xl">Login</button>
      </div>
    </div>
  );
};

export default Navbar;