
import Image from "next/image";
import React from "react";

// Blog data list
const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "2026-04-01",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
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
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
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
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    description:
      "Step-by-step tutorial on creating a fully responsive navigation bar using React and Tailwind CSS.",
  },
];

// Main Blog Detail Page Component
const BlogDetailPage = async ({ params }) => {
  // Extract blogId from route params
  const { blogId } = await params;

  // Find the selected blog by matching the ID
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  return (
    // Main section with gradient background
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-4xl">
        {blog ? (
          // Blog detail card
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
            {/* Blog Cover Image */}
            <div className="relative h-[350px] w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content Section */}
            <div className="p-8 md:p-10">
              {/* Blog Category and Date */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue-100 px-4 py-1 font-medium text-blue-600">
                  {blog.category}
                </span>

                <span className="text-zinc-500 dark:text-zinc-400">
                  {blog.date}
                </span>
              </div>

              {/* Blog Title */}
              <h1 className="mt-5 text-4xl font-extrabold text-zinc-900 dark:text-white">
                {blog.title}
              </h1>

              {/* Blog Author */}
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
                By {blog.author}
              </p>

              {/* Blog Description Box */}
              <div className="mt-8 rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
                <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Fallback UI when blog is not found
          <div className="rounded-3xl bg-white p-10 text-center shadow-xl dark:bg-zinc-900">
            <h2 className="text-3xl font-bold text-red-500">
              Blog Not Found
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Sorry, the blog you are looking for does not exist.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailPage;

