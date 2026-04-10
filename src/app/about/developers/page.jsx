import React from "react";

const DevelopersPage = () => {
  const developers = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: "👨‍💻",
    },
    {
      name: "Sarah Smith",
      role: "Backend Developer",
      image: "👩‍💻",
    },
    {
      name: "Michael Lee",
      role: "Full Stack Developer",
      image: "🧑‍💻",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Our Team
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Meet Our Developers
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our talented developers work together to build modern, fast, and
            user-friendly applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="text-6xl">{developer.image}</div>

              <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
                {developer.name}
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {developer.role}
              </p>

              <button className="mt-6 rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersPage;