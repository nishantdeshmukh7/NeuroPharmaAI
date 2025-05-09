import { useState, useEffect } from 'react';

function HighPerformingDrugs() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    // Static data for demonstration purposes
    const data = [
      { id: 'D001', name: 'Limcee 9mg', performanceScore: 75.91, successRate: 96.05 },
      { id: 'D002', name: 'Levolin 2mg', performanceScore: 70.84, successRate: 81.74 },
      { id: 'D003', name: 'CiplaVir 4mg', performanceScore: 92.03, successRate: 95.86 },
      { id: 'D004', name: 'Corex 1mg', performanceScore: 78.42, successRate: 79.73 },
      { id: 'D005', name: 'Loratadine 10mg', performanceScore: 91.54, successRate: 94.45 },
      // 95 more entries
      ...Array.from({ length: 95 }, (_, i) => {
        const drugNames = ["Covaxin", "Covishield", "Remdesivir", "Favipiravir", "Molnupiravir", "Itolizumab", "Fabiflu", "ZyCoV-D", "Corbevax", "Sputnik V", "Paxlovid", "HCQ", "Dolo 650", "Paracip", "Crocin", "Calpol", "Azithral", "Azax", "CiplaVir", "Zifi", "Taxim-O", "Augmentin", "Combiflam", "Brufen", "Nimulid", "Rantac", "Pantocid", "Pan-D", "Dexorange", "Liv 52", "Astymin", "Neurobion Forte", "Becosules", "Limcee", "Zincovit", "Benadryl", "Corex", "Ascoril", "TusQ", "Levolin", "Salbutamol", "Duolin", "Asthalin", "Seroflo", "Foracort", "Budecort", "Montair LC", "Allegra", "Cetirizine", "Loratadine"];
        const name = `${drugNames[Math.floor(Math.random() * drugNames.length)]} ${Math.floor(Math.random() * 10) + 1}mg`;
        return {
          id: `D${(i + 6).toString().padStart(3, '0')}`,
          name,
          performanceScore: (Math.random() * 29 + 70).toFixed(2),
          successRate: (Math.random() * 23 + 75).toFixed(2),
        };
      })
    ];
    setDrugs(data);
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">High Performing Drugs</h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 text-left">Drug ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Performance Score</th>
              <th className="p-3 text-left">Trial Success Rate</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr key={drug.id} className="border-t border-gray-700 hover:bg-gray-800">
                <td className="p-3">{drug.id}</td>
                <td className="p-3">{drug.name}</td>
                <td className="p-3">{drug.performanceScore}</td>
                <td className="p-3">{drug.successRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HighPerformingDrugs;