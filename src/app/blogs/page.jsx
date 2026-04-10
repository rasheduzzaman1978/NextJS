
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Importing Google Font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Main Blogs Page Component
const BlogsPage = () => {
  // Blog data list
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "2026-04-01",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      description:
        "Learn the basics of React Hooks like useState, useEffect, and how they simplify functional components.",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      author: "Sarah Smith",
      date: "2026-03-28",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      description:
        "A beginner-friendly guide to using Tailwind CSS for building modern and responsive user interfaces.",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      author: "Michael Lee",
      date: "2026-03-20",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
      description:
        "Explore important ES6 features such as arrow functions, destructuring, template literals, and modules.",
    },
    {
      id: 4,
      title: "How to Build a Responsive Navbar",
      author: "Emily Johnson",
      date: "2026-03-15",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      description:
        "Step-by-step tutorial on creating a fully responsive navigation bar using React and Tailwind CSS.",
    },
  ];

  return (
    // Main section with background gradient and custom font
    <section
      className={`min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900 ${poppins.className}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Page Header Section */}
        <div className="text-center">
          <span className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Latest Articles
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Blogs & Tutorials
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Explore our latest blogs, tutorials, and guides on React,
            JavaScript, Tailwind CSS, and modern web development.
          </p>
        </div>

        {/* Blog Cards Grid Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              {/* Blog Image Section */}
              <div className="relative h-52 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content Section */}
              <div className="p-6">
                {/* Blog Category and Date */}
                <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>

                {/* Blog Title */}
                <h2 className="mt-3 text-xl font-bold text-zinc-900 dark:text-white">
                  {blog.title}
                </h2>

                {/* Blog Author */}
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  By {blog.author}
                </p>

                {/* Blog Description */}
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-6 inline-block rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;

