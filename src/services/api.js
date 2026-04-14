const API_BASE = "https://evidencex-backend.onrender.com/api"; // PRODUCTION
console.log("API CONNECTED TO PRODUCTION");

// ✅ safer token parsing
const getToken = () => {
  try {
    const user = JSON.parse(localStorage.getItem("evidencex_user"));
    return user?.token || null;
  } catch {
    return null;
  }
};

// ✅ headers (IMPORTANT FIX: no auth for login)
const getHeaders = (withAuth = true) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (withAuth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

// ✅ LOGIN (NO AUTH HEADER)
export const apiLogin = async (email, password) => {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: getHeaders(false), // ❗ FIXED
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Login failed");
  }

  return res.json();
};

// ----------------------------
// OTHER APIs
// ----------------------------

export const apiUploadEvidence = async (files, caseId = "C001") => {
  const formData = new FormData();
  files.forEach((f) => formData.append("files", f));
  formData.append("caseId", caseId);

  const res = await fetch(`${API_BASE}/evidence/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");
  return res.json();
};

export const apiGetEvidence = async () => {
  const res = await fetch(`${API_BASE}/evidence`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch evidence");
  return res.json();
};

export const apiDeleteEvidence = async (id) => {
  const res = await fetch(`${API_BASE}/evidence/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Delete failed");
  return res.json();
};

export const apiAnalyzeEvidence = async (id) => {
  const res = await fetch(`${API_BASE}/analysis/${id}`, {
    method: "POST",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Analysis failed");
  return res.json();
};

export const apiGetAnalysis = async () => {
  const res = await fetch(`${API_BASE}/analysis`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

export const apiGetSuspects = async () => {
  const res = await fetch(`${API_BASE}/suspects`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

export const apiGetCdr = async () => {
  const res = await fetch(`${API_BASE}/cdr`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

export const apiHealthCheck = async () => {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return res.ok;
  } catch {
    return false;
  }
};