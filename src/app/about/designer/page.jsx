import React from "react";

const DesignerPage = () => {
  const designers = [
    {
      name: "Emma Watson",
      role: "UI Designer",
      icon: "🎨",
    },
    {
      name: "James Miller",
      role: "UX Designer",
      icon: "🖌️",
    },
    {
      name: "Sophia Brown",
      role: "Graphic Designer",
      icon: "✨",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-pink-200 px-4 py-1 text-sm font-medium text-pink-700 dark:bg-zinc-800 dark:text-zinc-300">
            Creative Team
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Meet Our Designers
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our designers create beautiful, modern, and user-friendly designs
            that make every project visually attractive.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {designers.map((designer, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="text-6xl">{designer.icon}</div>

              <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
                {designer.name}
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {designer.role}
              </p>

              <button className="mt-6 rounded-xl bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-600 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                View Portfolio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerPage;