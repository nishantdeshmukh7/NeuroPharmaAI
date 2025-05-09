import { useState } from 'react';

function PrescriptionTracking() {
  const [prescriptions, setPrescriptions] = useState([
    { id: 'P001', patientName: 'Vikram Singh', drugName: 'NeuroZap', dateIssued: '2025-01-15' },
    { id: 'P002', patientName: 'Anita Sharma', drugName: 'SynthMed', dateIssued: '2025-03-10' },
  ]);

  const [newPrescription, setNewPrescription] = useState({
    patientName: '',
    drugName: '',
    dateIssued: '',
  });

  const handleAddPrescription = () => {
    const newId = `P${(prescriptions.length + 1).toString().padStart(3, '0')}`;
    const newEntry = { id: newId, ...newPrescription };
    setPrescriptions([...prescriptions, newEntry]);
    setNewPrescription({ patientName: '', drugName: '', dateIssued: '' });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Prescription Tracking</h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Add New Prescription</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={newPrescription.patientName}
            onChange={(e) => setNewPrescription({ ...newPrescription, patientName: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Drug Name"
            value={newPrescription.drugName}
            onChange={(e) => setNewPrescription({ ...newPrescription, drugName: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="date"
            value={newPrescription.dateIssued}
            onChange={(e) => setNewPrescription({ ...newPrescription, dateIssued: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAddPrescription}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">Prescriptions</h3>
        {prescriptions.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Prescription ID</th>
                <th className="p-2 text-left">Patient</th>
                <th className="p-2 text-left">Drug</th>
                <th className="p-2 text-left">Date Issued</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription) => (
                <tr key={prescription.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{prescription.id}</td>
                  <td className="p-2">{prescription.patientName}</td>
                  <td className="p-2">{prescription.drugName}</td>
                  <td className="p-2">{prescription.dateIssued}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No prescriptions found.</p>
        )}
      </div>
    </div>
  );
}

export default PrescriptionTracking;
