import React from 'react';

const TodosPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-slate-800">
            Todo Dashboard
          </h1>
          <p className="mt-2 text-slate-500">
            Manage and track all todos in one place
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-indigo-100 px-5 py-3">
            <span className="text-lg font-semibold text-indigo-700">
              Total Todos
            </span>
            <span className="rounded-full bg-indigo-600 px-4 py-1 text-white">
              {todos.length}
            </span>
          </div>
        </div>

        {/* Todo Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {todos.slice(0, 24).map((todo) => (
            <div
              key={todo.id}
              className="group rounded-3xl border border-white/50 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  #{todo.id}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    todo.completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </div>

              <h2 className="line-clamp-3 text-lg font-semibold leading-7 text-slate-800">
                {todo.title}
              </h2>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  User ID: {todo.userId}
                </p>

                <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodosPage;