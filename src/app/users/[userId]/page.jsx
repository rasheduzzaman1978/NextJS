import React from 'react';

const UsersDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border border-base-300">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-gray-500">@{user.username}</p>
              <p className="text-sm mt-1">{user.company?.name}</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-primary">Email</p>
              <p>{user.email}</p>
            </div>

            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-primary">Phone</p>
              <p>{user.phone}</p>
            </div>

            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-primary">Website</p>
              <p>{user.website}</p>
            </div>

            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-primary">City</p>
              <p>{user.address?.city}</p>
            </div>

            <div className="bg-base-200 rounded-xl p-4 md:col-span-2">
              <p className="font-semibold text-primary">Address</p>
              <p>
                {user.address?.street}, {user.address?.suite},{' '}
                {user.address?.city}
              </p>
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary rounded-full px-8">
              Contact User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetailsPage;