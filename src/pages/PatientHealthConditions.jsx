import { useState } from 'react';

function PatientHealthConditions() {
  const [conditions, setConditions] = useState([
    { id: 'c1', patientId: '123', condition: 'Epilepsy', diagnosisDate: '2024-11-10', severity: 'Moderate' },
    { id: 'c2', patientId: '124', condition: 'Depression', diagnosisDate: '2024-12-01', severity: 'Severe' },
  ]);

  const [newCondition, setNewCondition] = useState({
    patientId: '',
    condition: '',
    diagnosisDate: '',
    severity: '',
  });

  const handleAddCondition = () => {
    const newId = `c${conditions.length + 1}`;
    const newEntry = { id: newId, ...newCondition };
    setConditions([...conditions, newEntry]);
    setNewCondition({ patientId: '', condition: '', diagnosisDate: '', severity: '' });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Patient Health Conditions</h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Add New Condition</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Patient ID"
            value={newCondition.patientId}
            onChange={(e) => setNewCondition({ ...newCondition, patientId: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Condition"
            value={newCondition.condition}
            onChange={(e) => setNewCondition({ ...newCondition, condition: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="date"
            value={newCondition.diagnosisDate}
            onChange={(e) => setNewCondition({ ...newCondition, diagnosisDate: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Severity"
            value={newCondition.severity}
            onChange={(e) => setNewCondition({ ...newCondition, severity: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAddCondition}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">Health Conditions</h3>
        {conditions.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Patient ID</th>
                <th className="p-2 text-left">Condition</th>
                <th className="p-2 text-left">Diagnosis Date</th>
                <th className="p-2 text-left">Severity</th>
              </tr>
            </thead>
            <tbody>
              {conditions.map((condition) => (
                <tr key={condition.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{condition.patientId}</td>
                  <td className="p-2">{condition.condition}</td>
                  <td className="p-2">{condition.diagnosisDate}</td>
                  <td className="p-2">{condition.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No health conditions found.</p>
        )}
      </div>
    </div>
  );
}

export default PatientHealthConditions;
