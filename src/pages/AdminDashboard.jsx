import { useEffect, useState } from 'react';

function AdminDashboard({ user }) {
  const [stats, setStats] = useState({
    users: 20,
    researchers: 11,
    companies: 9,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin-stats', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      }
    };
    fetchStats();
  }, [user]);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <p className="text-gray-400 mb-4">Welcome, Admin (ID: {user.id})</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.users}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Researchers</h3>
          <p className="text-2xl">{stats.researchers}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Pharmaceutical Companies</h3>
          <p className="text-2xl">{stats.companies}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;