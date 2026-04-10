
import React from "react";

const Advertisement = () => {
  const ads = [
    {
      id: 1,
      title: "Google Ads Campaign",
      status: "Active",
      budget: "$1,200",
      clicks: "3.4K",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      title: "Facebook Promotion",
      status: "Pending",
      budget: "$850",
      clicks: "1.8K",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      title: "Instagram Sponsored Post",
      status: "Completed",
      budget: "$2,000",
      clicks: "5.2K",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300">
              Marketing Dashboard
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
              Advertisement Overview
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Track your advertising campaigns, budgets, clicks, and performance
              all in one place.
            </p>
          </div>

          <button className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700">
            + Create Campaign
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Campaigns
            </p>
            <h2 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-white">
              24
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Budget
            </p>
            <h2 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-white">
              $12.5K
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Clicks
            </p>
            <h2 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-white">
              15.2K
            </h2>
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {ad.title}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${ad.color}`}
                >
                  {ad.status}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-zinc-500 dark:text-zinc-400">Budget</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">
                    {ad.budget}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-zinc-500 dark:text-zinc-400">Clicks</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">
                    {ad.clicks}
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisement;

