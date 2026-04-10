
'use client';

// Next.js Link component import
import Link from 'next/link';

// Current pathname পাওয়ার জন্য hook
import { usePathname } from 'next/navigation';

// React এবং useState import
import React, { useState } from 'react';

const Navbar = () => {
  // Current route detect করার জন্য
  const pathName = usePathname();

  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu close function
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  // Active link এর style এবং normal link এর style
  const navLinkClass = (path) =>
    pathName === path
      ? 'block w-full rounded-lg border border-blue-500 bg-blue-100 px-3 py-2 text-blue-500'
      : 'block w-full rounded-lg px-3 py-2 transition duration-200 hover:bg-blue-100 hover:text-blue-600';

  // Navbar links list
  const links = (
    <>
      <li>
        <Link onClick={handleMenuClose} className={navLinkClass('/')} href="/">
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

      <li>
        <Link
          onClick={handleMenuClose}
          className={navLinkClass('/others')}
          href="/others"
        >
          Others
        </Link>
      </li>
    </>
  );

  return (
    // Full width wrapper with bottom border
    <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
      {/* Center aligned container */}
      <div className="mx-auto w-full max-w-6xl">
        {/* Main navbar */}
        <div className="navbar bg-base-100 px-4 dark:bg-zinc-900">
          <div className="navbar-start">
            {/* Mobile menu button */}
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

            {/* Logo section */}
            <Link href="/" className="btn btn-ghost text-xl">
              daisyUI
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
          </div>

          {/* Right side login button */}
          <div className="navbar-end">
            <button className="btn btn-primary rounded-xl">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

