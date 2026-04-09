import Link from 'next/link';
import React from 'react';

export const metadata  = {
  title: 'All Users',
  description: 'all the users information are here  in this page',
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h2>Users are coming here!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="card bg-primary text-primary-content shadow-xl mx-2"
          >
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>

              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`} className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;