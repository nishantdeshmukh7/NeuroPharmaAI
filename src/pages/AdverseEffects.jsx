import { useState } from 'react';

function AdverseEffects() {
  const [effects] = useState([
    { id: 'e1', drugName: 'NeuroZap', effect: 'Dizziness', severity: 'Mild' },
    { id: 'e2', drugName: 'SynthMed', effect: 'Nausea', severity: 'Moderate' },
    { id: 'e3', drugName: 'CardioMax', effect: 'Headache', severity: 'Severe' },
    { id: 'e4', drugName: 'MedEx', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e5', drugName: 'PainAway', effect: 'Rash', severity: 'Moderate' },
    { id: 'e6', drugName: 'VitaBoost', effect: 'Nausea', severity: 'Mild' },
    { id: 'e7', drugName: 'NeuroZap', effect: 'Blurred Vision', severity: 'Moderate' },
    { id: 'e8', drugName: 'SynthMed', effect: 'Dry Mouth', severity: 'Mild' },
    { id: 'e9', drugName: 'CardioMax', effect: 'Insomnia', severity: 'Moderate' },
    { id: 'e10', drugName: 'MedEx', effect: 'Tinnitus', severity: 'Severe' },
    { id: 'e11', drugName: 'PainAway', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e12', drugName: 'VitaBoost', effect: 'Abdominal Pain', severity: 'Mild' },
    { id: 'e13', drugName: 'NeuroZap', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e14', drugName: 'SynthMed', effect: 'Joint Pain', severity: 'Moderate' },
    { id: 'e15', drugName: 'CardioMax', effect: 'Nausea', severity: 'Severe' },
    { id: 'e16', drugName: 'MedEx', effect: 'Headache', severity: 'Moderate' },
    { id: 'e17', drugName: 'PainAway', effect: 'Rash', severity: 'Mild' },
    { id: 'e18', drugName: 'VitaBoost', effect: 'Blurred Vision', severity: 'Severe' },
    { id: 'e19', drugName: 'NeuroZap', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e20', drugName: 'SynthMed', effect: 'Fatigue', severity: 'Moderate' },
    { id: 'e21', drugName: 'CardioMax', effect: 'Chest Pain', severity: 'Severe' },
    { id: 'e22', drugName: 'MedEx', effect: 'Insomnia', severity: 'Mild' },
    { id: 'e23', drugName: 'PainAway', effect: 'Headache', severity: 'Moderate' },
    { id: 'e24', drugName: 'VitaBoost', effect: 'Joint Pain', severity: 'Mild' },
    { id: 'e25', drugName: 'NeuroZap', effect: 'Nausea', severity: 'Severe' },
    { id: 'e26', drugName: 'SynthMed', effect: 'Tinnitus', severity: 'Moderate' },
    { id: 'e27', drugName: 'CardioMax', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e28', drugName: 'MedEx', effect: 'Blurred Vision', severity: 'Moderate' },
    { id: 'e29', drugName: 'PainAway', effect: 'Rash', severity: 'Severe' },
    { id: 'e30', drugName: 'VitaBoost', effect: 'Dizziness', severity: 'Mild' },
    { id: 'e31', drugName: 'NeuroZap', effect: 'Insomnia', severity: 'Moderate' },
    { id: 'e32', drugName: 'SynthMed', effect: 'Joint Pain', severity: 'Mild' },
    { id: 'e33', drugName: 'CardioMax', effect: 'Abdominal Pain', severity: 'Moderate' },
    { id: 'e34', drugName: 'MedEx', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e35', drugName: 'PainAway', effect: 'Blurred Vision', severity: 'Moderate' },
    { id: 'e36', drugName: 'VitaBoost', effect: 'Headache', severity: 'Severe' },
    { id: 'e37', drugName: 'NeuroZap', effect: 'Rash', severity: 'Mild' },
    { id: 'e38', drugName: 'SynthMed', effect: 'Dry Mouth', severity: 'Mild' },
    { id: 'e39', drugName: 'CardioMax', effect: 'Nausea', severity: 'Moderate' },
    { id: 'e40', drugName: 'MedEx', effect: 'Fatigue', severity: 'Moderate' },
    { id: 'e41', drugName: 'PainAway', effect: 'Blurred Vision', severity: 'Mild' },
    { id: 'e42', drugName: 'VitaBoost', effect: 'Dizziness', severity: 'Severe' },
    { id: 'e43', drugName: 'NeuroZap', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e44', drugName: 'SynthMed', effect: 'Tinnitus', severity: 'Moderate' },
    { id: 'e45', drugName: 'CardioMax', effect: 'Abdominal Pain', severity: 'Severe' },
    { id: 'e46', drugName: 'MedEx', effect: 'Joint Pain', severity: 'Mild' },
    { id: 'e47', drugName: 'PainAway', effect: 'Insomnia', severity: 'Moderate' },
    { id: 'e48', drugName: 'VitaBoost', effect: 'Rash', severity: 'Moderate' },
    { id: 'e49', drugName: 'NeuroZap', effect: 'Blurred Vision', severity: 'Severe' },
    { id: 'e50', drugName: 'SynthMed', effect: 'Chest Pain', severity: 'Severe' },
    { id: 'e51', drugName: 'CardioMax', effect: 'Headache', severity: 'Mild' },
    { id: 'e52', drugName: 'MedEx', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e53', drugName: 'PainAway', effect: 'Tinnitus', severity: 'Severe' },
    { id: 'e54', drugName: 'VitaBoost', effect: 'Fatigue', severity: 'Moderate' },
    { id: 'e55', drugName: 'NeuroZap', effect: 'Insomnia', severity: 'Mild' },
    { id: 'e56', drugName: 'SynthMed', effect: 'Rash', severity: 'Mild' },
    { id: 'e57', drugName: 'CardioMax', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e58', drugName: 'MedEx', effect: 'Blurred Vision', severity: 'Severe' },
    { id: 'e59', drugName: 'PainAway', effect: 'Abdominal Pain', severity: 'Moderate' },
    { id: 'e60', drugName: 'VitaBoost', effect: 'Nausea', severity: 'Mild' },
    { id: 'e61', drugName: 'NeuroZap', effect: 'Fatigue', severity: 'Moderate' },
    { id: 'e62', drugName: 'SynthMed', effect: 'Headache', severity: 'Mild' },
    { id: 'e63', drugName: 'CardioMax', effect: 'Dry Mouth', severity: 'Moderate' },
    { id: 'e64', drugName: 'MedEx', effect: 'Nausea', severity: 'Severe' },
    { id: 'e65', drugName: 'PainAway', effect: 'Joint Pain', severity: 'Moderate' },
    { id: 'e66', drugName: 'VitaBoost', effect: 'Abdominal Pain', severity: 'Mild' },
    { id: 'e67', drugName: 'NeuroZap', effect: 'Headache', severity: 'Moderate' },
    { id: 'e68', drugName: 'SynthMed', effect: 'Chest Pain', severity: 'Mild' },
    { id: 'e69', drugName: 'CardioMax', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e70', drugName: 'MedEx', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e71', drugName: 'PainAway', effect: 'Dry Mouth', severity: 'Mild' },
    { id: 'e72', drugName: 'VitaBoost', effect: 'Insomnia', severity: 'Severe' },
    { id: 'e73', drugName: 'NeuroZap', effect: 'Joint Pain', severity: 'Moderate' },
    { id: 'e74', drugName: 'SynthMed', effect: 'Blurred Vision', severity: 'Severe' },
    { id: 'e75', drugName: 'CardioMax', effect: 'Fatigue', severity: 'Moderate' },
    { id: 'e76', drugName: 'MedEx', effect: 'Rash', severity: 'Mild' },
    { id: 'e77', drugName: 'PainAway', effect: 'Nausea', severity: 'Moderate' },
    { id: 'e78', drugName: 'VitaBoost', effect: 'Dry Mouth', severity: 'Moderate' },
    { id: 'e79', drugName: 'NeuroZap', effect: 'Abdominal Pain', severity: 'Moderate' },
    { id: 'e80', drugName: 'SynthMed', effect: 'Tinnitus', severity: 'Moderate' },
    { id: 'e81', drugName: 'CardioMax', effect: 'Nausea', severity: 'Mild' },
    { id: 'e82', drugName: 'MedEx', effect: 'Headache', severity: 'Moderate' },
    { id: 'e83', drugName: 'PainAway', effect: 'Chest Pain', severity: 'Severe' },
    { id: 'e84', drugName: 'VitaBoost', effect: 'Rash', severity: 'Mild' },
    { id: 'e85', drugName: 'NeuroZap', effect: 'Nausea', severity: 'Moderate' },
    { id: 'e86', drugName: 'SynthMed', effect: 'Blurred Vision', severity: 'Mild' },
    { id: 'e87', drugName: 'CardioMax', effect: 'Fatigue', severity: 'Severe' },
    { id: 'e88', drugName: 'MedEx', effect: 'Joint Pain', severity: 'Moderate' },
    { id: 'e89', drugName: 'PainAway', effect: 'Dizziness', severity: 'Moderate' },
    { id: 'e90', drugName: 'VitaBoost', effect: 'Fatigue', severity: 'Severe' },
    { id: 'e91', drugName: 'NeuroZap', effect: 'Headache', severity: 'Moderate' },
    { id: 'e92', drugName: 'SynthMed', effect: 'Joint Pain', severity: 'Moderate' },
    { id: 'e93', drugName: 'CardioMax', effect: 'Blurred Vision', severity: 'Severe' },
    { id: 'e94', drugName: 'MedEx', effect: 'Rash', severity: 'Moderate' },
    { id: 'e95', drugName: 'PainAway', effect: 'Fatigue', severity: 'Mild' },
    { id: 'e96', drugName: 'VitaBoost', effect: 'Nausea', severity: 'Moderate' },
    { id: 'e97', drugName: 'NeuroZap', effect: 'Joint Pain', severity: 'Mild' },
    { id: 'e98', drugName: 'SynthMed', effect: 'Tinnitus', severity: 'Severe' },
    { id: 'e99', drugName: 'CardioMax', effect: 'Rash', severity: 'Mild' },
    { id: 'e100', drugName: 'MedEx', effect: 'Nausea', severity: 'Moderate' }
  ]);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-6">Adverse Effects</h2>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Adverse Effects</h3>
        {effects.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-1 text-left">Drug</th>
                <th className="p-1 text-left">Adverse Effect</th>
                <th className="p-1 text-left">Severity</th>
              </tr>
            </thead>
            <tbody>
              {effects.map((effect) => (
                <tr key={effect.id} className="border-t border-gray-600">
                  <td className="p-1">{effect.drugName}</td>
                  <td className="p-1">{effect.effect}</td>
                  <td className="p-1">{effect.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-2">No adverse effects found.</p>
        )}
      </div>
    </div>
  );
}

export default AdverseEffects;
