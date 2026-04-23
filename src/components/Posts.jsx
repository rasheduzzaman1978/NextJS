import { use } from 'react';

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-slate-800">
            Posts Dashboard
          </h2>
          <p className="mt-2 text-slate-500">
            Explore all posts in a clean and modern layout
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-purple-100 px-5 py-3">
            <span className="text-lg font-semibold text-purple-700">
              Total Posts
            </span>
            <span className="rounded-full bg-purple-600 px-4 py-1 text-white">
              {posts.length}
            </span>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 18).map((post) => (
            <div
              key={post.id}
              className="group rounded-3xl border border-white/50 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Row */}
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  #{post.id}
                </span>

                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                  User {post.userId}
                </span>
              </div>

              {/* Title */}
              <h3 className="line-clamp-2 text-xl font-bold leading-7 text-slate-800">
                {post.title}
              </h3>

              {/* Body */}
              <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-500">
                {post.body}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Post ID: {post.id}
                </span>

                <button className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;