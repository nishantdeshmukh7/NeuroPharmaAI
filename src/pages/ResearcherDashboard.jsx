import { useEffect, useState } from 'react';

function ResearcherDashboard({ user }) {
  const [stats, setStats] = useState({
    trials: 20,
    predictions: 5,
    adverseEffects: 21,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/researcher-stats', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching researcher stats:', error);
      }
    };
    fetchStats();
  }, [user]);

  return (
    <div className="container">
      <h2>Researcher Dashboard</h2>
      <p className="text-gray-400 mb-4">Welcome, Researcher (ID: {user.id})</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Active Clinical Trials</h3>
          <p className="text-2xl">{stats.trials}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Predictions Generated</h3>
          <p className="text-2xl">{stats.predictions}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Reported Adverse Effects</h3>
          <p className="text-2xl">{stats.adverseEffects}</p>
        </div>
      </div>
    </div>
  );
}

export default ResearcherDashboard;