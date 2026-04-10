import React from "react";
import Link from "next/link";

const UsersDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
          {/* Header */}
          <div className="h-40 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          <div className="relative px-8 pb-10">
            <div className="-mt-16 flex flex-col items-center md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-center md:flex-row md:items-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-zinc-200 text-5xl font-bold text-zinc-700 shadow-xl dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-300">
                  {user.name.charAt(0)}
                </div>

                <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
                  <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                    {user.name}
                  </h1>

                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    @{user.username}
                  </p>

                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {user.company?.name}
                  </p>
                </div>
              </div>

              <Link
                href={`mailto:${user.email}`}
                className="mt-6 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:mt-0"
              >
                Contact User
              </Link>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Email
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {user.email}
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Phone
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {user.phone}
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Website
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {user.website}
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  City
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {user.address?.city}
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800 md:col-span-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Address
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {user.address?.street}, {user.address?.suite},{" "}
                  {user.address?.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersDetailsPage;