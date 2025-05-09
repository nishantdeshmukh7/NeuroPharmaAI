import { useState } from 'react';

function ReportsDashboard() {
  const [reports, setReports] = useState([
    { id: 'R001', trialId: 'T001', title: 'Trial Efficacy Report', generatedDate: '2025-04-20' },
    { id: 'R002', trialId: 'T002', title: 'Adverse Effects Summary', generatedDate: '2025-04-22' },
  ]);

  const [newReport, setNewReport] = useState({
    trialId: '',
    title: '',
    generatedDate: '',
  });

  const handleAddReport = () => {
    const newId = `R${(reports.length + 1).toString().padStart(3, '0')}`;
    const newEntry = { id: newId, ...newReport };
    setReports([...reports, newEntry]);
    setNewReport({ trialId: '', title: '', generatedDate: '' });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Reports Dashboard</h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Add New Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Trial ID"
            value={newReport.trialId}
            onChange={(e) => setNewReport({ ...newReport, trialId: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Report Title"
            value={newReport.title}
            onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="date"
            value={newReport.generatedDate}
            onChange={(e) => setNewReport({ ...newReport, generatedDate: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAddReport}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Report
          </button>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">Reports</h3>
        {reports.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Report ID</th>
                <th className="p-2 text-left">Trial ID</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Generated Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{report.id}</td>
                  <td className="p-2">{report.trialId}</td>
                  <td className="p-2">{report.title}</td>
                  <td className="p-2">{report.generatedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No reports found.</p>
        )}
      </div>
    </div>
  );
}

export default ReportsDashboard;
