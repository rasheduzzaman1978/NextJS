import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "This is the dashboard page of our Next.js application",
};

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      icon: "👥",
    },
    {
      title: "Total Blogs",
      value: "320",
      icon: "📝",
    },
    {
      title: "Active Projects",
      value: "18",
      icon: "🚀",
    },
    {
      title: "Revenue",
      value: "$12,500",
      icon: "💰",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Dashboard Overview
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Welcome Back 👋
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Here is a quick overview of your application statistics,
            performance, and activity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
                    {stat.value}
                  </h2>
                </div>

                <div className="text-5xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900 lg:col-span-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <p className="font-medium text-zinc-900 dark:text-white">
                  New blog post published
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  “Understanding React Hooks” was published 2 hours ago.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <p className="font-medium text-zinc-900 dark:text-white">
                  New user registered
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Sarah joined your application today.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <p className="font-medium text-zinc-900 dark:text-white">
                  Project updated
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Dashboard UI improvements were completed successfully.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Quick Actions
            </h2>

            <div className="mt-6 space-y-4">
              <button className="w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                Create New Blog
              </button>

              <button className="w-full rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                Manage Users
              </button>

              <button className="w-full rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;