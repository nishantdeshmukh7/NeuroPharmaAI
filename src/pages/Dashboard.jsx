import { useEffect, useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    totalTrials: 0,
    activeDrugs: 0,
    predictions: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Clinical Trials</h3>
          <p className="text-2xl">{stats.totalTrials}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Active Drugs</h3>
          <p className="text-2xl">{stats.activeDrugs}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Predictions Made</h3>
          <p className="text-2xl">{stats.predictions}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;