
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <main className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
        <div className="grid items-center gap-10 p-10 md:grid-cols-2 md:p-16">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              Welcome to My App
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-5xl">
              Build Modern Apps with Next.js
            </h1>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A simple and beautiful homepage built with Next.js and Tailwind CSS.
              Start editing your project and create something amazing.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                Get Started
              </button>

              <button className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                Learn More
              </button>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Edit this file to get started:
              </p>
              <code className="mt-2 block rounded-lg bg-white px-4 py-3 font-mono text-sm text-zinc-800 shadow-sm dark:bg-zinc-900 dark:text-zinc-200">
                src/app/page.js
              </code>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6 shadow-xl dark:from-pink-500/20 dark:via-purple-500/20 dark:to-blue-500/20">
              <Image
                src="/flower.jpg"
                alt="Flower"
                width={260}
                height={260}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
