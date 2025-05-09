import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    overview: false,
    trials: false,
    drugs: false,
    patients: false,
    reports: false,
  });

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isSidebarOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'
            }
          />
        </svg>
      </button>

      {/* Sticky Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col min-h-[100vh] ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:fixed md:w-64 md:flex md:flex-col`}
      >
        <div className="p-6 border-b border-[#003366]">
          <Link
            to="/"
            className="text-2xl font-bold text-[#003366] tracking-wide hover:text-[#66b2ff] transition"
          >
            Neuro Pharma AI
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Researcher Sections */}
          {user.role === 'Researcher' && (
            <>
              <Section
                title="Overview"
                isOpen={openSections.overview}
                onToggle={() => toggleSection('overview')}
                links={[
                  { to: '/researcher', label: 'Dashboard' },
                  { to: '/researcher-profiles', label: 'Researcher Profiles' },
                ]}
                onLinkClick={() => setIsSidebarOpen(false)}
              />
              <Section
                title="Trials"
                isOpen={openSections.trials}
                onToggle={() => toggleSection('trials')}
                links={[
                  { to: '/clinical-trials', label: 'Clinical Trials' },
                  { to: '/trial-phases', label: 'Trial Phases' },
                ]}
                onLinkClick={() => setIsSidebarOpen(false)}
              />
              <Section
                title="Drugs"
                isOpen={openSections.drugs}
                onToggle={() => toggleSection('drugs')}
                links={[
                  { to: '/drug-management', label: 'Drug Management' },
                  { to: '/high-performing-drugs', label: 'High Performing Drugs' },
                  { to: '/predictions', label: 'Predictions' },
                  { to: '/adverse-effects', label: 'Adverse Effects' },
                  { to: '/pharmaceutical-companies', label: 'Pharma Companies' },
                ]}
                onLinkClick={() => setIsSidebarOpen(false)}
              />
              <Section
                title="Patients"
                isOpen={openSections.patients}
                onToggle={() => toggleSection('patients')}
                links={[
                  { to: '/patient-enrollment', label: 'Patient Enrollment' },
                  { to: '/patient-health-conditions', label: 'Health Conditions' },
                  { to: '/prescription-tracking', label: 'Prescription Tracking' },
                ]}
                onLinkClick={() => setIsSidebarOpen(false)}
              />
              <Section
                title="Reports"
                isOpen={openSections.reports}
                onToggle={() => toggleSection('reports')}
                links={[
                  { to: '/reports', label: 'Reports' },
                  { to: '/ai-models', label: 'AI Models' },
                ]}
                onLinkClick={() => setIsSidebarOpen(false)}
              />
            </>
          )}

          {/* Admin Sections */}
          {user.role === 'Admin' && (
            <Section
              title="Admin"
              isOpen={openSections.overview}
              onToggle={() => toggleSection('overview')}
              links={[
                { to: '/admin', label: 'Dashboard' },
                { to: '/user-management', label: 'User Management' },
              ]}
              onLinkClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Patient Sections */}
          {user.role === 'Patient' && (
            <Section
              title="Patient"
              isOpen={openSections.overview}
              onToggle={() => toggleSection('overview')}
              links={[
                { to: '/patient', label: 'Dashboard' },
                { to: '/patient-profile', label: 'Profile' },
              ]}
              onLinkClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#003366]">
          <button
            onClick={handleLogout}
            className="w-full bg-[#003366] hover:bg-[#001f3f] text-white py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

// Reusable Section Component
function Section({ title, isOpen, onToggle, links, onLinkClick }) {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-[#003366] hover:text-[#66b2ff] transition py-2"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-[#003366] hover:text-[#66b2ff] transition"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
