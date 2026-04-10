import React from "react";

const SupportPage = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Talk directly with our support team for quick help.",
      icon: "💬",
    },
    {
      title: "Email Support",
      description: "Send us your questions and get a response by email.",
      icon: "📧",
    },
    {
      title: "Help Center",
      description: "Browse guides, FAQs, and tutorials for assistance.",
      icon: "📚",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-blue-200 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-zinc-800 dark:text-zinc-300">
            Support Center
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            How Can We Help You?
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our support team is always ready to help you with any issues,
            questions, or guidance you need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
            >
              <div className="text-6xl">{option.icon}</div>

              <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
                {option.title}
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {option.description}
              </p>

              <button className="mt-6 rounded-xl bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                Get Support
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportPage;