import { useEffect, useState } from 'react';

function ClinicalTrials() {
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    // Sample data for 20 running trials
    const trialData = [
      { id: 'T001', drugName: 'NeuroZap', phase: 'Phase 1', status: 'Running' },
      { id: 'T002', drugName: 'SynthMed', phase: 'Phase 2', status: 'Running' },
      { id: 'T003', drugName: 'XenoVax', phase: 'Phase 3', status: 'Running' },
      { id: 'T004', drugName: 'ViraClear', phase: 'Phase 1', status: 'Running' },
      { id: 'T005', drugName: 'CardioFix', phase: 'Phase 2', status: 'Running' },
      { id: 'T006', drugName: 'ImmuGuard', phase: 'Phase 3', status: 'Running' },
      { id: 'T007', drugName: 'NeuroZap', phase: 'Phase 1', status: 'Running' },
      { id: 'T008', drugName: 'SynthMed', phase: 'Phase 2', status: 'Running' },
      { id: 'T009', drugName: 'XenoVax', phase: 'Phase 3', status: 'Running' },
      { id: 'T010', drugName: 'ViraClear', phase: 'Phase 1', status: 'Running' },
      { id: 'T011', drugName: 'CardioFix', phase: 'Phase 2', status: 'Running' },
      { id: 'T012', drugName: 'ImmuGuard', phase: 'Phase 3', status: 'Running' },
      { id: 'T013', drugName: 'NeuroZap', phase: 'Phase 1', status: 'Running' },
      { id: 'T014', drugName: 'SynthMed', phase: 'Phase 2', status: 'Running' },
      { id: 'T015', drugName: 'XenoVax', phase: 'Phase 3', status: 'Running' },
      { id: 'T016', drugName: 'ViraClear', phase: 'Phase 1', status: 'Running' },
      { id: 'T017', drugName: 'CardioFix', phase: 'Phase 2', status: 'Running' },
      { id: 'T018', drugName: 'ImmuGuard', phase: 'Phase 3', status: 'Running' },
      { id: 'T019', drugName: 'NeuroZap', phase: 'Phase 1', status: 'Running' },
      { id: 'T020', drugName: 'SynthMed', phase: 'Phase 2', status: 'Running' },
    ];

    setTrials(trialData);
  }, []);

  // Filter trials that are "Running"
  const runningTrials = trials.filter(trial => trial.status === 'Running');

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Clinical Trials</h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Trial List</h3>

        {/* Display the number of running trials */}
        <p className="text-white mb-4">
          {runningTrials.length} trial{runningTrials.length !== 1 ? 's' : ''} are currently running.
        </p>

        {trials.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Trial ID</th>
                <th className="p-2 text-left">Drug</th>
                <th className="p-2 text-left">Phase</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {runningTrials.map((trial) => (
                <tr key={trial.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{trial.id}</td>
                  <td className="p-2">{trial.drugName}</td>
                  <td className="p-2">{trial.phase}</td>
                  <td className="p-2">{trial.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No clinical trials found.</p>
        )}
      </div>
    </div>
  );
}

export default ClinicalTrials;
