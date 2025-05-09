import { useState } from 'react';

function ResearcherProfiles() {
  const [researchers] = useState([
    { id: 'R001', name: 'Dr. Amit Sharma', field: 'Neurology', trials: 5 },
    { id: 'R002', name: 'Dr. Priya Desai', field: 'Oncology', trials: 3 },
    { id: 'R003', name: 'Dr. Rajesh Kumar', field: 'Cardiology', trials: 8 },
    { id: 'R004', name: 'Dr. Neha Gupta', field: 'Gastroenterology', trials: 2 },
    { id: 'R005', name: 'Dr. Suresh Reddy', field: 'Endocrinology', trials: 10 },
    { id: 'R006', name: 'Dr. Anjali Singh', field: 'Orthopedics', trials: 6 },
    { id: 'R007', name: 'Dr. Arvind Patel', field: 'Pediatrics', trials: 7 },
    { id: 'R008', name: 'Dr. Pooja Verma', field: 'Psychiatry', trials: 4 },
    { id: 'R009', name: 'Dr. Karan Yadav', field: 'Dermatology', trials: 3 },
    { id: 'R010', name: 'Dr. Sneha Joshi', field: 'Urology', trials: 5 },
    { id: 'R011', name: 'Dr. Raghav Malhotra', field: 'Pulmonology', trials: 9 },
    { id: 'R012', name: 'Dr. Meera Iyer', field: 'Nephrology', trials: 1 },
    { id: 'R013', name: 'Dr. Vikram Agarwal', field: 'Radiology', trials: 6 },
    { id: 'R014', name: 'Dr. Kavita Menon', field: 'Pathology', trials: 3 },
    { id: 'R015', name: 'Dr. Ravi Kumar', field: 'Ophthalmology', trials: 5 },
    { id: 'R016', name: 'Dr. Anita Nair', field: 'Hematology', trials: 8 },
    { id: 'R017', name: 'Dr. Sandeep Thakur', field: 'Rheumatology', trials: 4 },
    { id: 'R018', name: 'Dr. Asha Patil', field: 'Infectious Diseases', trials: 7 },
    { id: 'R019', name: 'Dr. Deepak Chauhan', field: 'Surgery', trials: 10 },
    { id: 'R020', name: 'Dr. Neelam Sharma', field: 'Family Medicine', trials: 2 },
    { id: 'R021', name: 'Dr. Rahul Joshi', field: 'Neurology', trials: 6 },
    { id: 'R022', name: 'Dr. Swati Patel', field: 'Geriatrics', trials: 5 },
    { id: 'R023', name: 'Dr. Sunil Yadav', field: 'Pediatrics', trials: 4 },
    { id: 'R024', name: 'Dr. Maya Sharma', field: 'Anesthesiology', trials: 9 },
    { id: 'R025', name: 'Dr. Manoj Gupta', field: 'Psychiatry', trials: 7 },
    { id: 'R026', name: 'Dr. Deepa Nair', field: 'Nephrology', trials: 2 },
    { id: 'R027', name: 'Dr. Jatin Mehta', field: 'Orthopedics', trials: 3 },
    { id: 'R028', name: 'Dr. Aarti Verma', field: 'Surgery', trials: 10 },
    { id: 'R029', name: 'Dr. Anurag Tiwari', field: 'Dermatology', trials: 4 },
    { id: 'R030', name: 'Dr. Suman Gupta', field: 'Pediatrics', trials: 1 },
    { id: 'R031', name: 'Dr. Rohit Saini', field: 'Radiology', trials: 7 },
    { id: 'R032', name: 'Dr. Neha Chawla', field: 'Endocrinology', trials: 5 },
    { id: 'R033', name: 'Dr. Sanjay Mishra', field: 'Gastroenterology', trials: 3 },
    { id: 'R034', name: 'Dr. Shalini Rao', field: 'Psychiatry', trials: 4 },
    { id: 'R035', name: 'Dr. Rajeev Mehra', field: 'Pathology', trials: 6 },
    { id: 'R036', name: 'Dr. Rani Nair', field: 'Orthopedics', trials: 8 },
    { id: 'R037', name: 'Dr. Kunal Desai', field: 'Rheumatology', trials: 2 },
    { id: 'R038', name: 'Dr. Richa Patel', field: 'Infectious Diseases', trials: 6 },
    { id: 'R039', name: 'Dr. Vikrant Chauhan', field: 'Surgery', trials: 9 },
    { id: 'R040', name: 'Dr. Rekha Reddy', field: 'Family Medicine', trials: 3 },
    { id: 'R041', name: 'Dr. Kartik Raj', field: 'Neurology', trials: 7 },
    { id: 'R042', name: 'Dr. Bhavya Mehta', field: 'Geriatrics', trials: 5 },
    { id: 'R043', name: 'Dr. Simran Kaur', field: 'Pediatrics', trials: 4 },
    { id: 'R044', name: 'Dr. Aditya Yadav', field: 'Anesthesiology', trials: 9 },
    { id: 'R045', name: 'Dr. Karishma Singh', field: 'Psychiatry', trials: 7 },
    { id: 'R046', name: 'Dr. Rajendra Sharma', field: 'Nephrology', trials: 2 },
    { id: 'R047', name: 'Dr. Manish Kapoor', field: 'Orthopedics', trials: 3 },
    { id: 'R048', name: 'Dr. Shikha Mishra', field: 'Surgery', trials: 10 },
    { id: 'R049', name: 'Dr. Vineeta Rani', field: 'Dermatology', trials: 4 },
    { id: 'R050', name: 'Dr. Mohit Agarwal', field: 'Pediatrics', trials: 1 },
    { id: 'R051', name: 'Dr. Ankur Jha', field: 'Radiology', trials: 7 },
    { id: 'R052', name: 'Dr. Kiran Pandey', field: 'Endocrinology', trials: 5 },
    { id: 'R053', name: 'Dr. Pankaj Joshi', field: 'Gastroenterology', trials: 3 },
    { id: 'R054', name: 'Dr. Shruti Agarwal', field: 'Psychiatry', trials: 4 },
    { id: 'R055', name: 'Dr. Amitabh Reddy', field: 'Pathology', trials: 6 },
    { id: 'R056', name: 'Dr. Mitali Patil', field: 'Orthopedics', trials: 8 },
    { id: 'R057', name: 'Dr. Krishan Kumar', field: 'Rheumatology', trials: 2 },
    { id: 'R058', name: 'Dr. Navdeep Kaur', field: 'Infectious Diseases', trials: 7 },
    { id: 'R059', name: 'Dr. Tanvi Kapoor', field: 'Surgery', trials: 10 },
    { id: 'R060', name: 'Dr. Subhendu Roy', field: 'Family Medicine', trials: 3 },
    { id: 'R061', name: 'Dr. Neelam Gupta', field: 'Neurology', trials: 6 },
    { id: 'R062', name: 'Dr. Sushil Kumar', field: 'Geriatrics', trials: 5 },
    { id: 'R063', name: 'Dr. Vandana Sharma', field: 'Pediatrics', trials: 4 },
    { id: 'R064', name: 'Dr. Piyush Kumar', field: 'Anesthesiology', trials: 9 },
    { id: 'R065', name: 'Dr. Harshita Singh', field: 'Psychiatry', trials: 7 },
    { id: 'R066', name: 'Dr. Vikas Mishra', field: 'Nephrology', trials: 2 },
    { id: 'R067', name: 'Dr. Tanisha Tiwari', field: 'Orthopedics', trials: 3 },
    { id: 'R068', name: 'Dr. Gaurav Joshi', field: 'Surgery', trials: 10 },
    { id: 'R069', name: 'Dr. Arpita Sharma', field: 'Dermatology', trials: 4 },
    { id: 'R070', name: 'Dr. Ritesh Yadav', field: 'Pediatrics', trials: 1 },
    // Additional researcher profiles up to R100 can be added here as needed
  ]);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-6">Researcher Profiles</h2>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Researchers</h3>
        {researchers.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-1 text-left">Researcher ID</th>
                <th className="p-1 text-left">Name</th>
                <th className="p-1 text-left">Research Field</th>
                <th className="p-1 text-left">Trials Conducted</th>
              </tr>
            </thead>
            <tbody>
              {researchers.map((researcher) => (
                <tr key={researcher.id} className="border-t border-gray-600">
                  <td className="p-1">{researcher.id}</td>
                  <td className="p-1">{researcher.name}</td>
                  <td className="p-1">{researcher.field}</td>
                  <td className="p-1">{researcher.trials}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-2">No researchers found.</p>
        )}
      </div>
    </div>
  );
}

export default ResearcherProfiles;
