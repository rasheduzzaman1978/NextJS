
import React from "react";

// Main Contact Page Component
const ContactPage = () => {
  return (
    // Full page section with green gradient background
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-6xl">
        {/* Main two-column layout */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Side Content */}
          <div>
            {/* Section badge */}
            <span className="rounded-full bg-green-200 px-4 py-1 text-sm font-medium text-green-700 dark:bg-zinc-800 dark:text-zinc-300">
              Contact Us
            </span>

            {/* Main heading */}
            <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
              Get In Touch
            </h1>

            {/* Introductory text */}
            <p className="mt-4 text-lg leading-8 text-justify text-zinc-600 dark:text-zinc-400">
              Have any questions, suggestions, or feedback? We would love to
              hear from you. Fill out the form and our team will get back to
              you as soon as possible.
            </p>

            {/* Contact information cards */}
            <div className="mt-8 space-y-4">
              {/* Address Card */}
              <div className="rounded-2xl bg-white p-5 shadow-lg dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  📍 Address
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  123 Business Street, Dhaka, Bangladesh
                </p>
              </div>

              {/* Email Card */}
              <div className="rounded-2xl bg-white p-5 shadow-lg dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  📧 Email
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  support@myapp.com
                </p>
              </div>

              {/* Phone Card */}
              <div className="rounded-2xl bg-white p-5 shadow-lg dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  📞 Phone
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  +880 1234-567890
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-zinc-900">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Send a Message
            </h2>

            {/* Contact Form */}
            <form className="mt-6 space-y-5">
              {/* Full Name Input */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-green-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>

              {/* Email Address Input */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-green-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-green-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

