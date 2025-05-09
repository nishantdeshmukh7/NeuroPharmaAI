import { useState } from 'react';

function PharmaceuticalCompanies() {
  const [companies] = useState([
    { id: 'C001', name: 'Sun Pharmaceuticals', location: 'Mumbai, Maharashtra', activeTrials: 15 },
    { id: 'C002', name: 'Dr. Reddy\'s Laboratories', location: 'Hyderabad, Telangana', activeTrials: 20 },
    { id: 'C003', name: 'Cipla', location: 'Mumbai, Maharashtra', activeTrials: 12 },
    { id: 'C004', name: 'Lupin Limited', location: 'Pune, Maharashtra', activeTrials: 10 },
    { id: 'C005', name: 'Biocon', location: 'Bangalore, Karnataka', activeTrials: 18 },
    { id: 'C006', name: 'Zydus Cadila', location: 'Ahmedabad, Gujarat', activeTrials: 14 },
    { id: 'C007', name: 'Glenmark Pharmaceuticals', location: 'Mumbai, Maharashtra', activeTrials: 9 },
    { id: 'C008', name: 'Aurobindo Pharma', location: 'Hyderabad, Telangana', activeTrials: 8 },
    { id: 'C009', name: 'Torrent Pharmaceuticals', location: 'Ahmedabad, Gujarat', activeTrials: 7 },
    { id: 'C010', name: 'Mylan Laboratories', location: 'Mumbai, Maharashtra', activeTrials: 10 },
    { id: 'C011', name: 'Alkem Laboratories', location: 'Mumbai, Maharashtra', activeTrials: 6 },
    { id: 'C012', name: 'Hetero Drugs', location: 'Hyderabad, Telangana', activeTrials: 13 },
    { id: 'C013', name: 'Intas Pharmaceuticals', location: 'Ahmedabad, Gujarat', activeTrials: 5 },
    { id: 'C014', name: 'Macleods Pharmaceuticals', location: 'Mumbai, Maharashtra', activeTrials: 11 },
    { id: 'C015', name: 'JB Chemicals and Pharmaceuticals', location: 'Mumbai, Maharashtra', activeTrials: 3 },
    { id: 'C016', name: 'Piramal Enterprises', location: 'Mumbai, Maharashtra', activeTrials: 17 },
    { id: 'C017', name: 'Abbott India', location: 'Mumbai, Maharashtra', activeTrials: 4 },
    { id: 'C018', name: 'Laurus Labs', location: 'Hyderabad, Telangana', activeTrials: 10 },
    { id: 'C019', name: 'Sodium Pharmaceuticals', location: 'Bangalore, Karnataka', activeTrials: 8 },
    { id: 'C020', name: 'Emcure Pharmaceuticals', location: 'Pune, Maharashtra', activeTrials: 9 },
    { id: 'C021', name: 'Wockhardt', location: 'Mumbai, Maharashtra', activeTrials: 12 },
    { id: 'C022', name: 'Cadila Healthcare', location: 'Ahmedabad, Gujarat', activeTrials: 10 },
    { id: 'C023', name: 'Strides Pharma', location: 'Bangalore, Karnataka', activeTrials: 15 },
    { id: 'C024', name: 'Hindustan Antibiotics', location: 'Pune, Maharashtra', activeTrials: 6 },
    { id: 'C025', name: 'FDC Limited', location: 'Mumbai, Maharashtra', activeTrials: 7 },
    { id: 'C026', name: 'Divi\'s Laboratories', location: 'Hyderabad, Telangana', activeTrials: 18 },
    { id: 'C027', name: 'Alembic Pharmaceuticals', location: 'Vadodara, Gujarat', activeTrials: 11 },
    { id: 'C028', name: 'Biocon Biologics', location: 'Bangalore, Karnataka', activeTrials: 9 },
    { id: 'C029', name: 'Cadila Pharmaceuticals', location: 'Ahmedabad, Gujarat', activeTrials: 10 },
    { id: 'C030', name: 'Sandoz India', location: 'Mumbai, Maharashtra', activeTrials: 5 },
    { id: 'C031', name: 'GSK India', location: 'Mumbai, Maharashtra', activeTrials: 14 },
    { id: 'C032', name: 'Merck India', location: 'Mumbai, Maharashtra', activeTrials: 6 },
    { id: 'C033', name: 'Novo Nordisk India', location: 'Bangalore, Karnataka', activeTrials: 8 },
    { id: 'C034', name: 'Sanofi India', location: 'Mumbai, Maharashtra', activeTrials: 9 },
    { id: 'C035', name: 'AbbVie India', location: 'Mumbai, Maharashtra', activeTrials: 7 },
    { id: 'C036', name: 'Johnson & Johnson India', location: 'Mumbai, Maharashtra', activeTrials: 11 },
    { id: 'C037', name: 'Roche India', location: 'Mumbai, Maharashtra', activeTrials: 15 },
    { id: 'C038', name: 'Macleods Pharmaceuticals', location: 'Mumbai, Maharashtra', activeTrials: 13 },
    { id: 'C039', name: 'Novartis India', location: 'Mumbai, Maharashtra', activeTrials: 12 },
    { id: 'C040', name: 'Dr. Reddy\'s Laboratories', location: 'Hyderabad, Telangana', activeTrials: 20 },
    // Add more companies as needed...
  ]);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-6">Pharmaceutical Companies</h2>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Companies</h3>
        {companies.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-1 text-left">Company ID</th>
                <th className="p-1 text-left">Name</th>
                <th className="p-1 text-left">Location</th>
                <th className="p-1 text-left">Active Trials</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id} className="border-t border-gray-600">
                  <td className="p-1">{company.id}</td>
                  <td className="p-1">{company.name}</td>
                  <td className="p-1">{company.location}</td>
                  <td className="p-1">{company.activeTrials}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-2">No companies found.</p>
        )}
      </div>
    </div>
  );
}

export default PharmaceuticalCompanies;
