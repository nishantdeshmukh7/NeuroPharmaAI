import { useState } from 'react';

function TrialPhases() {
  const [phases] = useState([
    { id: 'ph1', trialId: 'T001', drugName: 'NeuroZap', phase: 'Phase 1', startDate: '2025-01-01' },
    { id: 'ph2', trialId: 'T002', drugName: 'SynthMed', phase: 'Phase 2', startDate: '2025-03-01' },
    { id: 'ph3', trialId: 'T003', drugName: 'XenoVax', phase: 'Phase 1', startDate: '2025-02-15' },
    { id: 'ph4', trialId: 'T004', drugName: 'ViraClear', phase: 'Phase 2', startDate: '2025-04-01' },
    { id: 'ph5', trialId: 'T005', drugName: 'CardioFix', phase: 'Phase 3', startDate: '2025-05-20' },
    { id: 'ph6', trialId: 'T006', drugName: 'ImmuGuard', phase: 'Phase 1', startDate: '2025-06-10' },
    { id: 'ph7', trialId: 'T007', drugName: 'NeuroZap', phase: 'Phase 2', startDate: '2025-07-05' },
    { id: 'ph8', trialId: 'T008', drugName: 'SynthMed', phase: 'Phase 3', startDate: '2025-08-22' },
    { id: 'ph9', trialId: 'T009', drugName: 'XenoVax', phase: 'Phase 1', startDate: '2025-09-18' },
    { id: 'ph10', trialId: 'T010', drugName: 'ViraClear', phase: 'Phase 3', startDate: '2025-10-15' },
    { id: 'ph11', trialId: 'T011', drugName: 'CardioFix', phase: 'Phase 2', startDate: '2025-11-01' },
    { id: 'ph12', trialId: 'T012', drugName: 'ImmuGuard', phase: 'Phase 2', startDate: '2025-12-12' },
    { id: 'ph13', trialId: 'T013', drugName: 'NeuroZap', phase: 'Phase 3', startDate: '2026-01-15' },
    { id: 'ph14', trialId: 'T014', drugName: 'SynthMed', phase: 'Phase 1', startDate: '2026-02-20' },
    { id: 'ph15', trialId: 'T015', drugName: 'XenoVax', phase: 'Phase 3', startDate: '2026-03-10' },
    { id: 'ph16', trialId: 'T016', drugName: 'ViraClear', phase: 'Phase 1', startDate: '2026-04-01' },
    { id: 'ph17', trialId: 'T017', drugName: 'CardioFix', phase: 'Phase 3', startDate: '2026-05-25' },
    { id: 'ph18', trialId: 'T018', drugName: 'ImmuGuard', phase: 'Phase 2', startDate: '2026-06-10' },
    { id: 'ph19', trialId: 'T019', drugName: 'NeuroZap', phase: 'Phase 2', startDate: '2026-07-01' },
    { id: 'ph20', trialId: 'T020', drugName: 'SynthMed', phase: 'Phase 3', startDate: '2026-08-15' },
  ]);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Trial Phases</h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Trial Phases</h3>

        {/* Display the number of trial phases */}
        <p className="text-white mb-4">
          {phases.length} trial phase{phases.length !== 1 ? 's' : ''} available.
        </p>

        {phases.length > 0 ? (
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Trial ID</th>
                <th className="p-2 text-left">Drug</th>
                <th className="p-2 text-left">Phase</th>
                <th className="p-2 text-left">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {phases.map((phase) => (
                <tr key={phase.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="p-2">{phase.trialId}</td>
                  <td className="p-2">{phase.drugName}</td>
                  <td className="p-2">{phase.phase}</td>
                  <td className="p-2">{phase.startDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No trial phases found.</p>
        )}
      </div>
    </div>
  );
}

export default TrialPhases;
