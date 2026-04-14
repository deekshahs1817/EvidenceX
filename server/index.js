import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'evidencex_secret_key_2026';

app.use(cors({
  origin: [
    'https://evidence-jw0vggndb-kushal639s-projects.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:4173',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:4173',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const uploadsDir = path.join(__dirname, '../uploads');
const dataDir = path.join(__dirname, 'data');

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const readData = (file) => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const writeData = (file, data) => {
  fs.writeFileSync(path.join(dataDir, file), JSON.stringify(data, null, 2));
};

if (!fs.existsSync(path.join(dataDir, 'users.json'))) {
  const salt = bcrypt.genSaltSync(10);
  writeData('users.json', [
    { id: 'U001', email: 'admin@evidencex.com', password: bcrypt.hashSync('admin123', salt), name: 'Inspector Arjun Mehta', role: 'Senior Inspector', badge: 'IPS-4521' },
    { id: 'U002', email: 'officer@evidencex.com', password: bcrypt.hashSync('officer123', salt), name: 'Sub-Inspector Priya Rao', role: 'Sub-Inspector', badge: 'SI-7834' },
    { id: 'U003', email: 'demo@evidencex.com', password: bcrypt.hashSync('demo', salt), name: 'Demo User', role: 'Analyst', badge: 'AN-0001' }
  ]);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage, limits: { fileSize: 500 * 1024 * 1024 } });

app.get('/', (req, res) => {
  res.send('🚀 EvidenceX Backend is Running');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readData('users.json');
  const user = users.find(u => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role, badge: user.badge }
  });
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const users = readData('users.json');
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  
  const salt = bcrypt.genSaltSync(10);
  const newUser = {
    id: `U${Date.now()}`,
    email,
    password: bcrypt.hashSync(password, salt),
    name,
    role: 'Officer',
    badge: `NEW-${Math.floor(Math.random() * 9000) + 1000}`
  };
  
  users.push(newUser);
  writeData('users.json', users);
  
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, role: newUser.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role, badge: newUser.badge }
  });
});

app.post('/api/evidence/upload', upload.array('files', 10), (req, res) => {
  const evidence = readData('evidence.json');

  const newFiles = req.files.map(f => ({
    id: uuidv4(),
    name: f.originalname,
    storedName: f.filename,
    type: getFileType(f.originalname),
    size: formatSize(f.size),
    uploadTime: new Date().toISOString(),
    status: 'pending',
    caseId: req.body.caseId || 'C001'
  }));

  evidence.push(...newFiles);
  writeData('evidence.json', evidence);

  res.json({ files: newFiles });
});

app.get('/api/evidence', (req, res) => {
  res.json(readData('evidence.json'));
});

app.delete('/api/evidence/:id', (req, res) => {
  let evidence = readData('evidence.json');
  evidence = evidence.filter(e => e.id !== req.params.id);
  writeData('evidence.json', evidence);
  res.json({ success: true });
});

app.post('/api/analysis/:id', (req, res) => {
  const evidence = readData('evidence.json');
  const file = evidence.find(e => e.id === req.params.id);

  if (!file) return res.status(404).json({ error: 'Evidence not found' });

  const result = simulateAnalysis(file);

  const idx = evidence.findIndex(e => e.id === file.id);
  evidence[idx].status = 'analyzed';
  writeData('evidence.json', evidence);

  const results = readData('analysis.json');
  results.push(result);
  writeData('analysis.json', results);

  res.json(result);
});

app.get('/api/analysis', (req, res) => {
  res.json(readData('analysis.json'));
});

app.get('/api/suspects', (req, res) => {
  res.json(readData('suspects.json'));
});

app.get('/api/cdr', (req, res) => {
  res.json(readData('cdr.json'));
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'EvidenceX API',
    timestamp: new Date().toISOString()
  });
});

function getFileType(name) {
  const ext = name.split('.').pop().toLowerCase();
  if (['mp4', 'avi', 'mov', 'mkv'].includes(ext)) return 'video';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
  if (['pdf'].includes(ext)) return 'pdf';
  return 'text';
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function simulateAnalysis(file) {
  return {
    evidenceId: file.id,
    type: file.type,
    riskScore: Math.floor(Math.random() * 60) + 30,
    riskLevel: 'medium',
    analyzedAt: new Date().toISOString()
  };
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
