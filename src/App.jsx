import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ResearcherDashboard from './pages/ResearcherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PatientDashboard from './pages/PatientDashboard';
import ClinicalTrials from './pages/ClinicalTrials';
import Predictions from './pages/Predictions';
import AdverseEffects from './pages/AdverseEffects';
import DrugManagement from './pages/DrugManagement';
import PatientEnrollment from './pages/PatientEnrollment';
import HighPerformingDrugs from './pages/HighPerformingDrugs';
import ResearcherProfiles from './pages/ResearcherProfiles';
import PharmaceuticalCompanies from './pages/PharmaceuticalCompanies';
import TrialPhases from './pages/TrialPhases';
import PrescriptionTracking from './pages/PrescriptionTracking';
import PatientHealthConditions from './pages/PatientHealthConditions';
import ReportsDashboard from './pages/ReportsDashboard';
import AIModelsOverview from './pages/AIModelsOverview';
import UserManagement from './pages/UserManagement';
import PatientProfile from './pages/PatientProfile';

function App() {
  const [user, setUser] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light-theme');
  };

  const ProtectedRoute = ({ children, allowedRole }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (allowedRole && user.role !== allowedRole) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex">
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <div className="flex-1 md:ml-64">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title="Toggle Theme"
          >
            {isDarkTheme ? (
              <svg viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <div className="p-4">
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/researcher"
                element={<ProtectedRoute allowedRole="Researcher"><ResearcherDashboard user={user} /></ProtectedRoute>}
              />
              <Route
                path="/admin"
                element={<ProtectedRoute allowedRole="Admin"><AdminDashboard user={user} /></ProtectedRoute>}
              />
              <Route
                path="/patient"
                element={<ProtectedRoute allowedRole="Patient"><PatientDashboard user={user} /></ProtectedRoute>}
              />
              <Route
                path="/clinical-trials"
                element={<ProtectedRoute allowedRole="Researcher"><ClinicalTrials /></ProtectedRoute>}
              />
              <Route
                path="/predictions"
                element={<ProtectedRoute allowedRole="Researcher"><Predictions /></ProtectedRoute>}
              />
              <Route
                path="/adverse-effects"
                element={<ProtectedRoute allowedRole="Researcher"><AdverseEffects /></ProtectedRoute>}
              />
              <Route
                path="/drug-management"
                element={<ProtectedRoute allowedRole="Researcher"><DrugManagement /></ProtectedRoute>}
              />
              <Route
                path="/patient-enrollment"
                element={<ProtectedRoute allowedRole="Researcher"><PatientEnrollment /></ProtectedRoute>}
              />
              <Route
                path="/high-performing-drugs"
                element={<ProtectedRoute allowedRole="Researcher"><HighPerformingDrugs /></ProtectedRoute>}
              />
              <Route
                path="/researcher-profiles"
                element={<ProtectedRoute allowedRole="Researcher"><ResearcherProfiles /></ProtectedRoute>}
              />
              <Route
                path="/pharmaceutical-companies"
                element={<ProtectedRoute allowedRole="Researcher"><PharmaceuticalCompanies /></ProtectedRoute>}
              />
              <Route
                path="/trial-phases"
                element={<ProtectedRoute allowedRole="Researcher"><TrialPhases /></ProtectedRoute>}
              />
              <Route
                path="/prescription-tracking"
                element={<ProtectedRoute allowedRole="Researcher"><PrescriptionTracking /></ProtectedRoute>}
              />
              <Route
                path="/patient-health-conditions"
                element={<ProtectedRoute allowedRole="Researcher"><PatientHealthConditions /></ProtectedRoute>}
              />
              <Route
                path="/reports"
                element={<ProtectedRoute allowedRole="Researcher"><ReportsDashboard /></ProtectedRoute>}
              />
              <Route
                path="/ai-models"
                element={<ProtectedRoute allowedRole="Researcher"><AIModelsOverview /></ProtectedRoute>}
              />
              <Route
                path="/user-management"
                element={<ProtectedRoute allowedRole="Admin"><UserManagement /></ProtectedRoute>}
              />
              <Route
                path="/patient-profile"
                element={<ProtectedRoute allowedRole="Patient"><PatientProfile user={user} /></ProtectedRoute>}
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;