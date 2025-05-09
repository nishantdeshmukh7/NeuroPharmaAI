import { useState } from 'react';

function AIModelsOverview() {
  const [models] = useState([
    { id: 'M001', name: 'PredictNet', accuracy: 96, lastTrained: '2025-03-15' },
    { id: 'M002', name: 'EfficacyAI', accuracy: 91, lastTrained: '2025-04-01' },
    { id: 'M003', name: 'DiseaseXAI', accuracy: 89, lastTrained: '2025-03-10' },
    { id: 'M004', name: 'NeuroModel', accuracy: 92, lastTrained: '2025-02-20' },
    { id: 'M005', name: 'CardioPredict', accuracy: 94, lastTrained: '2025-01-30' },
    { id: 'M006', name: 'OncoAI', accuracy: 93, lastTrained: '2025-04-05' },
    { id: 'M007', name: 'MedGenAI', accuracy: 90, lastTrained: '2025-03-25' },
    { id: 'M008', name: 'ImmunoAI', accuracy: 85, lastTrained: '2025-02-10' },
    { id: 'M009', name: 'PharmaNet', accuracy: 95, lastTrained: '2025-01-15' },
    { id: 'M010', name: 'TheraModel', accuracy: 88, lastTrained: '2025-03-30' },
  ]);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-6">AI Models Overview</h2>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">AI Models</h3>
        {models.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-1 text-left">Model ID</th>
                <th className="p-1 text-left">Name</th>
                <th className="p-1 text-left">Accuracy</th>
                <th className="p-1 text-left">Last Trained</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.id} className="border-t border-gray-600">
                  <td className="p-1">{model.id}</td>
                  <td className="p-1">{model.name}</td>
                  <td className="p-1">{model.accuracy}%</td>
                  <td className="p-1">{model.lastTrained}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-2">No AI models found.</p>
        )}
      </div>
    </div>
  );
}

export default AIModelsOverview;
