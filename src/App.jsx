import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Sidebar from './components/Sidebar';
import AnimatedBackground from './components/AnimatedBackground';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DatasetImport from './pages/DatasetImport';
import EvidenceUpload from './pages/EvidenceUpload';
import AnalysisResults from './pages/AnalysisResults';
import SuspectNetwork from './pages/SuspectNetwork';
import Timeline from './pages/Timeline';
import GeoLocation from './pages/GeoLocation';
import SuspicionScore from './pages/SuspicionScore';
import CrossEvidence from './pages/CrossEvidence';
import AIInsights from './pages/AIInsights';
import MovementPatterns from './pages/MovementPatterns';
import CaseReport from './pages/CaseReport';
import CCTVAnalysis from './pages/CCTVAnalysis';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading-page"><div className="loading-spinner" /><p>Initializing system...</p></div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="app-global-container">
        <AnimatedBackground />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="app-global-container">
      <AnimatedBackground />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/import" element={<ProtectedRoute><DatasetImport /></ProtectedRoute>} />
            <Route path="/evidence" element={<ProtectedRoute><EvidenceUpload /></ProtectedRoute>} />
            <Route path="/cctv" element={<ProtectedRoute><CCTVAnalysis /></ProtectedRoute>} />
            <Route path="/analysis" element={<ProtectedRoute><AnalysisResults /></ProtectedRoute>} />
            <Route path="/network" element={<ProtectedRoute><SuspectNetwork /></ProtectedRoute>} />
            <Route path="/timeline" element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
            <Route path="/geolocation" element={<ProtectedRoute><GeoLocation /></ProtectedRoute>} />
            <Route path="/scores" element={<ProtectedRoute><SuspicionScore /></ProtectedRoute>} />
            <Route path="/cross-evidence" element={<ProtectedRoute><CrossEvidence /></ProtectedRoute>} />
            <Route path="/insights" element={<ProtectedRoute><AIInsights /></ProtectedRoute>} />
            <Route path="/movement" element={<ProtectedRoute><MovementPatterns /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><CaseReport /></ProtectedRoute>} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
