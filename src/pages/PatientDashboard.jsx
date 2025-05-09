import { useEffect, useState } from 'react';

function PatientDashboard({ user }) {
  const [stats, setStats] = useState({
    prescriptions: 9,
    conditions: 18,
    trials: 13,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/patient-stats/${user.id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching patient stats:', error);
      }
    };
    fetchStats();
  }, [user]);

  return (
    <div className="container">
      <h2>Patient Dashboard</h2>
      <p className="text-gray-400 mb-4">Welcome, Patient (ID: {user.id})</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Active Prescriptions</h3>
          <p className="text-2xl">{stats.prescriptions}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Health Conditions</h3>
          <p className="text-2xl">{stats.conditions}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Enrolled Trials</h3>
          <p className="text-2xl">{stats.trials}</p>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;