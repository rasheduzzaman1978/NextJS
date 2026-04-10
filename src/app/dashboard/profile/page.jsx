import React from "react";

const ProfilePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
          {/* Cover Section */}
          <div className="h-52 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>

          {/* Profile Content */}
          <div className="relative px-8 pb-10">
            <div className="-mt-16 flex flex-col items-center md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-center md:flex-row md:items-end">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-zinc-200 text-5xl shadow-xl dark:border-zinc-900 dark:bg-zinc-800">
                  👨‍💻
                </div>

                <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
                  <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                    John Doe
                  </h1>

                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Frontend Developer
                  </p>

                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <button className="mt-6 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:mt-0">
                Edit Profile
              </button>
            </div>

            {/* Bio */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                About Me
              </h2>

              <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
                Passionate frontend developer with experience in React,
                Next.js, Tailwind CSS, and modern web technologies. I love
                building fast, responsive, and visually appealing user
                interfaces.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-zinc-100 p-6 text-center dark:bg-zinc-800">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  120+
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 text-center dark:bg-zinc-800">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  8K
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Followers
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 text-center dark:bg-zinc-800">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  5 Years
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;