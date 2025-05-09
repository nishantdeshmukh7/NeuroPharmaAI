import { useEffect, useState } from 'react';

function DrugManagement() {
  const [drugs, setDrugs] = useState([]);
  const [newDrug, setNewDrug] = useState({ name: '', dosage: '', status: '' });

  useEffect(() => {
    const mockDrugs = [
      { id: 'DM001', name: 'Covaxin', dosage: '0.5ml', status: 'Approved' },
      { id: 'DM002', name: 'Covishield', dosage: '0.5ml', status: 'Approved' },
      { id: 'DM003', name: 'Dolo 650', dosage: '650mg', status: 'In Use' },
      { id: 'DM004', name: 'Remdesivir', dosage: '100mg', status: 'Emergency Use' },
      { id: 'DM005', name: 'Fabiflu', dosage: '1800mg', status: 'Withdrawn' },
      ...Array.from({ length: 95 }, (_, i) => {
        const drugNames = ["Azithral", "Zifi", "Taxim-O", "Augmentin", "Combiflam", "Brufen", "Pantocid", "Pan-D", "Dexorange", "Liv 52", "Neurobion Forte", "Limcee", "Zincovit", "Corex", "Ascoril", "TusQ", "Levolin", "Asthalin", "Seroflo", "Montair LC", "Allegra", "Cetirizine", "Loratadine"];
        const statuses = ['Approved', 'In Use', 'Withdrawn', 'Under Review', 'Emergency Use'];
        const name = `${drugNames[Math.floor(Math.random() * drugNames.length)]}`;
        const dosage = `${Math.floor(Math.random() * 500 + 100)}mg`;
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        return {
          id: `DM${(i + 6).toString().padStart(3, '0')}`,
          name,
          dosage,
          status,
        };
      })
    ];
    setDrugs(mockDrugs);
  }, []);

  const handleAddDrug = () => {
    const newId = `DM${(drugs.length + 1).toString().padStart(3, '0')}`;
    const drugToAdd = { id: newId, ...newDrug };
    setDrugs([...drugs, drugToAdd]);
    setNewDrug({ name: '', dosage: '', status: '' });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Drug Management</h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Add New Drug</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Drug Name"
            value={newDrug.name}
            onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Dosage"
            value={newDrug.dosage}
            onChange={(e) => setNewDrug({ ...newDrug, dosage: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Status"
            value={newDrug.status}
            onChange={(e) => setNewDrug({ ...newDrug, status: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAddDrug}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Drug
          </button>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2 text-left">Drug ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Dosage</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr key={drug.id} className="border-t border-gray-700 hover:bg-gray-800">
                <td className="p-2">{drug.id}</td>
                <td className="p-2">{drug.name}</td>
                <td className="p-2">{drug.dosage}</td>
                <td className="p-2">{drug.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DrugManagement;