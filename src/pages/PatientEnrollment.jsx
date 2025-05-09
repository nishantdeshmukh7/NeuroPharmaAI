import { useState } from 'react';

function PatientEnrollment() {
  const [enrollments, setEnrollments] = useState([
    { id: 'e1', patientId: '123', trialId: 'T001', enrollmentDate: '2025-02-01', status: 'Active' },
    { id: 'e2', patientId: '124', trialId: 'T002', enrollmentDate: '2025-04-05', status: 'Completed' },
  ]);

  const [newEnrollment, setNewEnrollment] = useState({
    patientId: '',
    trialId: '',
    enrollmentDate: '',
    status: '',
  });

  const handleAddEnrollment = () => {
    const newId = `e${enrollments.length + 1}`;
    const newEntry = { id: newId, ...newEnrollment };
    setEnrollments([...enrollments, newEntry]);
    setNewEnrollment({ patientId: '', trialId: '', enrollmentDate: '', status: '' });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Patient Enrollment</h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Add New Enrollment</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Patient ID"
            value={newEnrollment.patientId}
            onChange={(e) => setNewEnrollment({ ...newEnrollment, patientId: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Trial ID"
            value={newEnrollment.trialId}
            onChange={(e) => setNewEnrollment({ ...newEnrollment, trialId: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="date"
            value={newEnrollment.enrollmentDate}
            onChange={(e) => setNewEnrollment({ ...newEnrollment, enrollmentDate: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Status"
            value={newEnrollment.status}
            onChange={(e) => setNewEnrollment({ ...newEnrollment, status: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAddEnrollment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">Enrollments</h3>
        {enrollments.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Patient ID</th>
                <th className="p-2 text-left">Trial ID</th>
                <th className="p-2 text-left">Enrollment Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{enrollment.patientId}</td>
                  <td className="p-2">{enrollment.trialId}</td>
                  <td className="p-2">{enrollment.enrollmentDate}</td>
                  <td className="p-2">{enrollment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No enrollments found.</p>
        )}
      </div>
    </div>
  );
}

export default PatientEnrollment;
