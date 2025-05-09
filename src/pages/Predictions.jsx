import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Predictions() {
  const [predictions] = useState([
    { id: 'p1', drugName: 'NeuroZap', successRate: 95, confidenceScore: '0.92' },
    { id: 'p2', drugName: 'SynthMed', successRate: 82, confidenceScore: '0.88' },
    { id: 'p3', drugName: 'CardioHeal', successRate: 89, confidenceScore: '0.90' },
    { id: 'p4', drugName: 'Livozyme', successRate: 76, confidenceScore: '0.85' },
    { id: 'p5', drugName: 'Ayurprol', successRate: 92, confidenceScore: '0.93' },
  ]);

  // Data for the line chart
  const chartData = {
    labels: predictions.map(prediction => prediction.drugName),
    datasets: [
      {
        label: 'Predicted Success Rate',
        data: predictions.map(prediction => prediction.successRate),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Confidence Score',
        data: predictions.map(prediction => parseFloat(prediction.confidenceScore) * 100), // Convert confidence score to percentage
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Drug Effectiveness Predictions</h2>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-8">
        <table className="w-full table-auto border-collapse text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 text-left">Drug</th>
              <th className="p-3 text-left">Predicted Success Rate</th>
              <th className="p-3 text-left">Confidence Score</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction) => (
              <tr key={prediction.id} className="border-t border-gray-700 hover:bg-gray-800">
                <td className="p-3">{prediction.drugName}</td>
                <td className="p-3">{prediction.successRate}%</td>
                <td className="p-3">{prediction.confidenceScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl text-white mb-4">Drug Effectiveness and Confidence Score Graph</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Predictions;
