import { useState } from 'react';

function PatientProfile({ user }) {
  const [profile] = useState({
    name: 'Vikram Singh',
    prescriptions: [
      { id: 'p1', drugName: 'NeuroZap', dosage: '10mg', dateIssued: '2025-01-15' },
      { id: 'p2', drugName: 'SynthMed', dosage: '20mg', dateIssued: '2025-03-10' },
      { id: 'p3', drugName: 'MediPlus', dosage: '5mg', dateIssued: '2025-04-01' },
      { id: 'p4', drugName: 'CardioAid', dosage: '15mg', dateIssued: '2025-01-20' },
      { id: 'p5', drugName: 'PainRelief', dosage: '50mg', dateIssued: '2025-02-15' },
      { id: 'p6', drugName: 'AsthmaMed', dosage: '25mg', dateIssued: '2025-02-25' },
      { id: 'p7', drugName: 'SleepWell', dosage: '10mg', dateIssued: '2025-03-05' },
      { id: 'p8', drugName: 'FluGuard', dosage: '15mg', dateIssued: '2025-03-12' },
      { id: 'p9', drugName: 'EnergyBoost', dosage: '30mg', dateIssued: '2025-04-10' },
      { id: 'p10', drugName: 'AntiDepress', dosage: '20mg', dateIssued: '2025-04-11' },
      { id: 'p11', drugName: 'HeartGuard', dosage: '5mg', dateIssued: '2025-04-12' },
      { id: 'p12', drugName: 'SugarBalance', dosage: '10mg', dateIssued: '2025-04-13' },
      { id: 'p13', drugName: 'LiverCleanse', dosage: '15mg', dateIssued: '2025-04-14' },
      { id: 'p14', drugName: 'MemoryBoost', dosage: '25mg', dateIssued: '2025-04-15' },
      { id: 'p15', drugName: 'JointCare', dosage: '10mg', dateIssued: '2025-04-16' },
      { id: 'p16', drugName: 'ViralGuard', dosage: '50mg', dateIssued: '2025-04-17' },
      { id: 'p17', drugName: 'BloodPressureRx', dosage: '5mg', dateIssued: '2025-04-18' },
      { id: 'p18', drugName: 'PainAway', dosage: '30mg', dateIssued: '2025-04-19' },
    ],
    trials: [
      { id: 't1', trialId: 'T001', drugName: 'Trial Drug A', enrollmentDate: '2025-02-01' },
      { id: 't2', trialId: 'T002', drugName: 'Trial Drug B', enrollmentDate: '2025-04-05' },
      { id: 't3', trialId: 'T003', drugName: 'Trial Drug C', enrollmentDate: '2025-04-15' },
      { id: 't4', trialId: 'T004', drugName: 'Trial Drug D', enrollmentDate: '2025-01-30' },
      { id: 't5', trialId: 'T005', drugName: 'Trial Drug E', enrollmentDate: '2025-02-10' },
      { id: 't6', trialId: 'T006', drugName: 'Trial Drug F', enrollmentDate: '2025-02-20' },
      { id: 't7', trialId: 'T007', drugName: 'Trial Drug G', enrollmentDate: '2025-03-01' },
      { id: 't8', trialId: 'T008', drugName: 'Trial Drug H', enrollmentDate: '2025-03-20' },
      { id: 't9', trialId: 'T009', drugName: 'Trial Drug I', enrollmentDate: '2025-04-01' },
      { id: 't10', trialId: 'T010', drugName: 'Trial Drug J', enrollmentDate: '2025-04-05' },
      { id: 't11', trialId: 'T011', drugName: 'Trial Drug K', enrollmentDate: '2025-04-10' },
      { id: 't12', trialId: 'T012', drugName: 'Trial Drug L', enrollmentDate: '2025-04-12' },
      { id: 't13', trialId: 'T013', drugName: 'Trial Drug M', enrollmentDate: '2025-04-14' },
    ],
    healthConditions: [
      { id: 'h1', condition: 'Hypertension', diagnosedDate: '2025-01-15' },
      { id: 'h2', condition: 'Asthma', diagnosedDate: '2025-03-05' },
      { id: 'h3', condition: 'Diabetes Type 2', diagnosedDate: '2025-04-01' },
      { id: 'h4', condition: 'Heart Disease', diagnosedDate: '2025-02-10' },
      { id: 'h5', condition: 'Obesity', diagnosedDate: '2025-01-25' },
      { id: 'h6', condition: 'Arthritis', diagnosedDate: '2025-02-20' },
      { id: 'h7', condition: 'Chronic Pain', diagnosedDate: '2025-03-01' },
      { id: 'h8', condition: 'Sleep Apnea', diagnosedDate: '2025-03-10' },
      { id: 'h9', condition: 'Anxiety', diagnosedDate: '2025-04-05' },
      { id: 'h10', condition: 'High Cholesterol', diagnosedDate: '2025-03-15' },
      { id: 'h11', condition: 'Stroke History', diagnosedDate: '2025-02-25' },
      { id: 'h12', condition: 'Liver Disease', diagnosedDate: '2025-04-10' },
      { id: 'h13', condition: 'Thyroid Disorder', diagnosedDate: '2025-04-15' },
    ],
  });

  return (
    <div className="container bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">Patient Profile</h2>
      <p className="text-[var(--text-secondary)] mb-4">Welcome, {profile.name} (ID: {user.id})</p>
      <div className="space-y-6">
        {/* Active Prescriptions */}
        <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Active Prescriptions</h3>
          {profile.prescriptions.length > 0 ? (
            <table className="w-full table-auto border-collapse text-gray-200">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 text-left">Drug</th>
                  <th className="p-2 text-left">Dosage</th>
                  <th className="p-2 text-left">Date Issued</th>
                </tr>
              </thead>
              <tbody>
                {profile.prescriptions.map((prescription) => (
                  <tr key={prescription.id} className="border-t border-gray-700 hover:bg-gray-700">
                    <td className="p-2">{prescription.drugName}</td>
                    <td className="p-2">{prescription.dosage}</td>
                    <td className="p-2">{prescription.dateIssued}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-2">No active prescriptions.</p>
          )}
        </div>

        {/* Enrolled Trials */}
        <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Enrolled Trials</h3>
          {profile.trials.length > 0 ? (
            <table className="w-full table-auto border-collapse text-gray-200">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 text-left">Trial ID</th>
                  <th className="p-2 text-left">Drug</th>
                  <th className="p-2 text-left">Enrollment Date</th>
                </tr>
              </thead>
              <tbody>
                {profile.trials.map((trial) => (
                  <tr key={trial.id} className="border-t border-gray-700 hover:bg-gray-700">
                    <td className="p-2">{trial.trialId}</td>
                    <td className="p-2">{trial.drugName}</td>
                    <td className="p-2">{trial.enrollmentDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-2">No enrolled trials.</p>
          )}
        </div>

        {/* Health Conditions */}
        <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Health Conditions</h3>
          {profile.healthConditions.length > 0 ? (
            <table className="w-full table-auto border-collapse text-gray-200">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 text-left">Condition</th>
                  <th className="p-2 text-left">Diagnosed Date</th>
                </tr>
              </thead>
              <tbody>
                {profile.healthConditions.map((condition) => (
                  <tr key={condition.id} className="border-t border-gray-700 hover:bg-gray-700">
                    <td className="p-2">{condition.condition}</td>
                    <td className="p-2">{condition.diagnosedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-2">No health conditions recorded.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
