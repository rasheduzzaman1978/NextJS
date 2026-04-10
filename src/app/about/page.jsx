import Image from "next/image";
import React from "react";
import staberryImg from "../../assets/image/staberry.jpg";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-6 py-12 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            About Page
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white md:text-5xl">
            Explore Beautiful Images
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            This page demonstrates how to use online images, public folder
            images, and imported local images in Next.js.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Online Image */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?q=80&w=387&auto=format&fit=crop"
              alt="Online image"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Online Image
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                This image is loaded directly from an external website URL.
              </p>
            </div>
          </div>

          {/* Public Folder Image */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900">
            <Image
              src="/flower.jpg"
              alt="Flower image"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Public Folder Image
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                This image comes from the public folder of the project.
              </p>
            </div>
          </div>

          {/* Imported Image */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900">
            <Image
              src={staberryImg}
              alt="Strawberry image"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Imported Image
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                This image is imported from the local assets folder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;