import { createContext, useContext, useState, useEffect } from 'react';
// deploy-sync: fixed ui to both files.
// deploy-sync: fixed email login UI
// deploy-sync: fixed API_URL and endpoints

const AuthContext = createContext(null);
const API_URL = 'https://evidencex.onrender.com/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('evidencex_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok && data.token) {
        setUser(data.user);
        localStorage.setItem('evidencex_user', JSON.stringify(data.user));
        localStorage.setItem('evidencex_token', data.token);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Invalid credentials' };
      }
    } catch (err) {
      return { success: false, error: 'Failed to connect to server' };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      
      if (res.ok && data.token) {
        setUser(data.user);
        localStorage.setItem('evidencex_user', JSON.stringify(data.user));
        localStorage.setItem('evidencex_token', data.token);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Registration failed' };
      }
    } catch (err) {
      return { success: false, error: 'Failed to connect to server' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('evidencex_user');
    localStorage.removeItem('evidencex_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
