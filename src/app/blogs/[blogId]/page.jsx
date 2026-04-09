import React from 'react';

  const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "2026-04-01",
    category: "React",
    image: "https://i.ibb.co/example/react-hooks.jpg",
    description:
      "Learn the basics of React Hooks like useState, useEffect, and how they simplify functional components."
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    author: "Sarah Smith",
    date: "2026-03-28",
    category: "CSS",
    image: "https://i.ibb.co/example/tailwind.jpg",
    description:
      "A beginner-friendly guide to using Tailwind CSS for building modern and responsive user interfaces."
  },
  {
    id: 3,
    title: "JavaScript ES6 Features You Should Know",
    author: "Michael Lee",
    date: "2026-03-20",
    category: "JavaScript",
    image: "https://i.ibb.co/example/es6.jpg",
    description:
      "Explore important ES6 features such as arrow functions, destructuring, template literals, and modules."
  },
  {
    id: 4,
    title: "How to Build a Responsive Navbar",
    author: "Emily Johnson",
    date: "2026-03-15",
    category: "Frontend",
    image: "https://i.ibb.co/example/navbar.jpg",
    description:
      "Step-by-step tutorial on creating a fully responsive navigation bar using React and Tailwind CSS."
  }
];

const BlogDetailPage = async({params}) => {
    const {blogId} = await params;

    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    console.log('show me params:', blog);

    return (
        <div>
            <h4 className='text-3xl'>Blog Detail Page</h4>
            {
                blog ? (
                    <div className="blog-detail">
                        <h2 className='text-2xl font-bold text-red-500'>{blog.title}</h2>
                        <p className='text-gray-600'>{blog.description}</p>
                        <p className='text-sm text-gray-500'>Author: {blog.author}</p>
                        <p className='text-sm text-gray-500'>Date: {blog.date}</p>
                        <p className='text-sm text-gray-500'>Category: {blog.category}</p>  
                        <img src={blog.image} alt={blog.title} width={100} height={100} />
                    </div>
                ) : (
                    <p>Blog not found.</p>
                )

            }

        </div>
    );
};

export default BlogDetailPage;