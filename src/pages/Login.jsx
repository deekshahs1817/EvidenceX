import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import {
  Shield, AlertCircle, Fingerprint, Code, UserPlus,
  ChevronRight, Eye, EyeOff, Lock, Network, Video, MapPin, Activity,
  Sun, Moon
} from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const { login, register } = useAuth();
  const { theme, toggleTheme } = useData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let result;
      if (isRegister) {
        if (!name.trim()) throw new Error('Name is required for registration');
        result = await register(name, email, password);
      } else {
        result = await login(email, password);
      }

      if (result.success) {
        navigate('/');
      } else {
        setError(result.error);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="login-page">
      <div className="login-bg" />
      <div className="login-grid" />

      {/* Theme Toggle Button */}
      <button className="theme-toggle-login" onClick={toggleTheme} title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="login-split-layout">

        {/* Left Side: Enhancing Content */}
        <div className="login-content-side animate-fade-in-up">
          <div className="brand-badge">
            <Activity size={14} /> LIVE THREAT INTELLIGENCE
          </div>
          <h1 className="hero-title">
            Evidence<span className="accent-x">X</span>
          </h1>
          <h2 className="hero-subtitle">Advanced AI Crime Investigation Platform</h2>
          <p className="hero-description">
            Join the next generation of law enforcement and cybersecurity professionals utilizing advanced YOLOv8 algorithms, neural networking, and automated CCTV evidence processing.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon"><Video size={18} /></div>
              <div>
                <h3>Real-Time CCTV Analysis</h3>
                <p>Automated object detection, weapon identification, and facial recognition from any camera feed.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Network size={18} /></div>
              <div>
                <h3>Suspect Triangulation</h3>
                <p>Build associative networks mapping suspicious individuals directly via AI data nodes.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><MapPin size={18} /></div>
              <div>
                <h3>Geolocational Tracking</h3>
                <p>Pinpoint activity hotspots and trace suspect escape routes.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Activity size={18} /></div>
              <div>
                <h3>Cross-Evidence Correlation</h3>
                <p>Let AI find hidden links across hundreds of disparate case files.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="login-form-side">
          <div className={`login-container animate-scale-in ${isRegister ? 'registering-mode' : ''}`}>
            <div className={`login-header ${isRegister ? 'registering' : ''}`}>
              <div className="login-logo">
                {isRegister ? <Fingerprint size={36} strokeWidth={2.5} /> : <Shield size={36} strokeWidth={2.5} />}
              </div>
              <h3>{document.title} Access</h3>
              <div className="login-badge">{isRegister ? 'NEW OFFICER ENROLLMENT' : 'RESTRICTED ACCESS'}</div>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <div className="login-error animate-fade-in">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              {isRegister && (
                <div className="input-group animate-fade-in">
                  <label htmlFor="name">Full Name / Rank</label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="e.g. Inspector Raj"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required={isRegister}
                  />
                </div>
              )}

              <div className="input-group">
                <label htmlFor="email">Officer Email</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Access Code</label>
                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPass ? 'text' : 'password'}
                    className="input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className={`btn btn-lg login-submit ${isRegister ? 'btn-danger' : 'btn-primary'}`} disabled={loading}>
                {loading ? (
                  <>
                    <div className="loading-spinner" style={{ width: 20, height: 20, margin: 0, borderWidth: 2 }} />
                    <span>{isRegister ? 'Registering...' : 'Authenticating...'}</span>
                  </>
                ) : (
                  <>
                    {isRegister ? <UserPlus size={18} className="mr-2" /> : null}
                    <span>{isRegister ? 'Enroll to System' : 'Access Platform'}</span>
                    {!isRegister && <ChevronRight size={18} className="ml-2" />}
                  </>
                )}
              </button>

              <div className="toggle-auth-mode">
                <button type="button" className="text-btn toggle-mode-btn" onClick={toggleMode}>
                  {isRegister
                    ? "Already have an access code? Sign In"
                    : "New officer? Request Clearance"}
                </button>
              </div>

              {!isRegister && (
                <div className="login-hint">
                  <p>Demo Credentials:</p>
                  <code>admin@evidencex.com / admin123</code>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: transparent; 
        }
        
        .login-bg {
          display: none;
        }

        .login-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 1;
        }

        .theme-toggle-login {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-primary);
          color: var(--text-primary);
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          transition: all 0.2s ease;
        }

        .theme-toggle-login:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .login-split-layout {
          display: flex;
          width: 100%;
          max-width: 1240px;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 20px 40px;
          z-index: 10;
        }

        .login-content-side {
          flex: 1;
          color: var(--text-primary);
          max-width: 600px;
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-full);
          color: var(--accent-primary);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #ffffff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title .accent-x {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .hero-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .feature-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-md);
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-item h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .feature-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        .login-form-side {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 440px;
        }

        .login-container {
          width: 100%;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl);
          padding: 30px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }
        
        .login-container.registering-mode {
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239, 68, 68, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .login-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 12px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: pulseGlow 3s ease-in-out infinite;
          transition: background 0.5s ease;
        }

        .login-header.registering .login-logo {
          background: linear-gradient(135deg, var(--accent-danger, #ef4444), #b91c1c);
          animation: pulseRed 3s ease-in-out infinite;
        }

        @keyframes pulseRed {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }

        .login-header h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .login-badge {
          display: inline-block;
          margin-top: 6px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .login-header.registering .login-badge {
          background: rgba(239, 68, 68, 0.2);
          color: var(--accent-danger, #ef4444);
        }

        .input-group {
          margin-bottom: 16px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .password-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .login-submit {
          width: 100%;
          margin-top: 24px;
          height: 48px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .login-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
        }

        .toggle-auth-mode {
          text-align: center;
          margin-top: 24px;
        }

        .toggle-mode-btn {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          padding: 5px;
        }

        .toggle-mode-btn:hover {
          color: var(--accent-primary);
        }

        .login-hint {
          margin-top: 30px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .login-hint code {
          display: inline-block;
          margin-top: 4px;
          padding: 4px 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          font-family: monospace;
          color: var(--accent-primary);
        }

        .login-form .input {
          width: 100%;
        }

        .mr-2 { margin-right: 8px; }
        .ml-2 { margin-left: 8px; }

        /* --- Global Light Theme Overrides for Login Page --- */
        [data-theme="light"] .hero-title {
          background: linear-gradient(135deg, #0f172a, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="light"] .login-container {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(59, 130, 246, 0.05);
        }
        
        [data-theme="light"] .theme-toggle-login {
          background: rgba(255, 255, 255, 0.8);
          border-color: var(--border-secondary);
        }
      `}</style>
    </div>
  );
}
