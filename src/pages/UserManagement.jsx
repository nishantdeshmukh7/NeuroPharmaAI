import { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 'U001', username: 'vikram.singh', role: 'Researcher', status: 'Active' },
    { id: 'U002', username: 'anita.sharma', role: 'Doctor', status: 'Inactive' },
    { id: 'U003', username: 'rohit.kumar', role: 'Researcher', status: 'Active' },
    { id: 'U004', username: 'preeti.mishra', role: 'Scientist', status: 'Active' },
    { id: 'U005', username: 'sushant.patel', role: 'Doctor', status: 'Active' },
    { id: 'U006', username: 'neha.yadav', role: 'Researcher', status: 'Inactive' },
    { id: 'U007', username: 'manish.singh', role: 'Scientist', status: 'Active' },
    { id: 'U008', username: 'sonal.rani', role: 'Researcher', status: 'Inactive' },
    { id: 'U009', username: 'rajesh.verma', role: 'Doctor', status: 'Active' },
    { id: 'U010', username: 'divya.sharma', role: 'Scientist', status: 'Active' },
    { id: 'U011', username: 'rahul.gupta', role: 'Researcher', status: 'Inactive' },
    { id: 'U012', username: 'komal.kumar', role: 'Doctor', status: 'Active' },
    { id: 'U013', username: 'priya.singh', role: 'Scientist', status: 'Inactive' },
    { id: 'U014', username: 'ajay.yadav', role: 'Researcher', status: 'Active' },
    { id: 'U015', username: 'ravi.patel', role: 'Doctor', status: 'Active' },
    { id: 'U016', username: 'sanjay.mishra', role: 'Scientist', status: 'Inactive' },
    { id: 'U017', username: 'sakshi.agarwal', role: 'Researcher', status: 'Active' },
    { id: 'U018', username: 'deepak.verma', role: 'Doctor', status: 'Active' },
    { id: 'U019', username: 'manju.sharma', role: 'Scientist', status: 'Inactive' },
    { id: 'U020', username: 'ajay.kumar', role: 'Researcher', status: 'Active' },
  ]);

  const [newUser, setNewUser] = useState({
    username: '',
    role: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new user with a unique ID
    const userId = `U${users.length + 1}`;
    const addedUser = { ...newUser, id: userId };

    // Add the new user to the state
    setUsers([...users, addedUser]);

    // Reset the form fields
    setNewUser({ username: '', role: '', status: '' });
  };

  return (
    <div className="container bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>

      {/* Add User Form */}
      <div className="card bg-gray-800 p-6 mb-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add User</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">Username</label>
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Role</label>
            <input
              type="text"
              name="role"
              value={newUser.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Status</label>
            <input
              type="text"
              name="status"
              value={newUser.status}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User List */}
      <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">User List</h3>

        {users.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-2 text-left">User ID</th>
                <th className="p-2 text-left">Username</th>
                <th className="p-2 text-left">Role</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
