import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4">
      
      <h1 className="text-7xl font-extrabold mb-4 animate-bounce">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found 😢
      </h2>

      <p className="text-center max-w-md mb-6 text-gray-200">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
          🔙 Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;