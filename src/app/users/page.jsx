import Link from "next/link";
import React from "react";

export const metadata = {
  title: "All Users",
  description: "All the users information are here in this page",
};

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Team Members
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            All Users
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Browse all registered users, their contact details, and view more
            information about each member.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 text-2xl font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {user.name}
                  </h2>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    @{user.username}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-zinc-600 dark:text-zinc-400">
                <p>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Email:
                  </span>{" "}
                  {user.email}
                </p>

                <p>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Phone:
                  </span>{" "}
                  {user.phone}
                </p>

                <p>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Company:
                  </span>{" "}
                  {user.company.name}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={`/users/${user.id}`}
                  className="inline-block rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersPage;