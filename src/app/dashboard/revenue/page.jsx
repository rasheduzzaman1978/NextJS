import React from "react";

const RevenuePage = () => {
  const revenueStats = [
    {
      title: "Total Revenue",
      value: "$24,500",
      icon: "💰",
    },
    {
      title: "Monthly Growth",
      value: "+18%",
      icon: "📈",
    },
    {
      title: "Subscriptions",
      value: "1,240",
      icon: "🧾",
    },
    {
      title: "Pending Payments",
      value: "$3,200",
      icon: "⏳",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-green-100 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="rounded-full bg-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 dark:bg-zinc-800 dark:text-zinc-300">
            Revenue Overview
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Track Your Earnings 💸
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Monitor your business revenue, subscriptions, growth, and pending
            payments in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {revenueStats.map((stat, index) => (
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
              Recent Transactions
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Premium Subscription
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Paid by John Doe
                  </p>
                </div>
                <span className="font-bold text-green-600">+$120</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Annual Membership
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Paid by Sarah Smith
                  </p>
                </div>
                <span className="font-bold text-green-600">+$350</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Pending Invoice
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Awaiting payment from Michael Lee
                  </p>
                </div>
                <span className="font-bold text-red-500">Pending</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Revenue Goals
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Monthly Goal
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    75%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <div className="h-3 w-3/4 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Annual Goal
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    52%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <div className="h-3 w-1/2 rounded-full bg-blue-500"></div>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenuePage;