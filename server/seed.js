import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

function writeData(file, data) {
  fs.writeFileSync(path.join(dataDir, file), JSON.stringify(data, null, 2));
  console.log(`  ✓ Seeded ${file} (${Array.isArray(data) ? data.length + ' records' : 'object'})`);
}

console.log('\n  ╔════════════════════════════════════════╗');
console.log('  ║   EvidenceX – Data Seeding             ║');
console.log('  ╚════════════════════════════════════════╝\n');

// Suspects
writeData('suspects.json', [
  { id: 'S001', name: 'Rajesh Kumar', alias: 'RK', age: 34, risk: 'high', score: 85, phone: '+91-98765-43210', lastSeen: 'Sector 15, Noida' },
  { id: 'S002', name: 'Amit Sharma', alias: 'Amit', age: 29, risk: 'medium', score: 52, phone: '+91-87654-32109', lastSeen: 'Connaught Place, Delhi' },
  { id: 'S003', name: 'Priya Singh', alias: 'PS', age: 27, risk: 'low', score: 23, phone: '+91-76543-21098', lastSeen: 'MG Road, Gurgaon' },
  { id: 'S004', name: 'Vikram Patel', alias: 'VP', age: 41, risk: 'high', score: 78, phone: '+91-65432-10987', lastSeen: 'Lajpat Nagar, Delhi' },
  { id: 'S005', name: 'Deepak Verma', alias: 'DV', age: 36, risk: 'medium', score: 45, phone: '+91-54321-09876', lastSeen: 'Nehru Place, Delhi' },
  { id: 'S006', name: 'Sunita Devi', alias: 'SD', age: 31, risk: 'low', score: 18, phone: '+91-43210-98765', lastSeen: 'Dwarka, Delhi' },
  { id: 'S007', name: 'Mohammad Ali', alias: 'MA', age: 38, risk: 'high', score: 92, phone: '+91-32109-87654', lastSeen: 'Old Delhi' },
  { id: 'S008', name: 'Neha Gupta', alias: 'NG', age: 25, risk: 'low', score: 12, phone: '+91-21098-76543', lastSeen: 'Saket, Delhi' },
]);

// CDR Data
writeData('cdr.json', [
  { id: 1, caller: 'Rajesh Kumar', receiver: 'Vikram Patel', time: '2026-04-05 07:15', duration: '8:32', towerId: 'T-1042', lat: 28.5855, lng: 77.3100, type: 'outgoing' },
  { id: 2, caller: 'Rajesh Kumar', receiver: 'Mohammad Ali', time: '2026-04-05 09:10', duration: '2:14', towerId: 'T-1045', lat: 28.6315, lng: 77.2167, type: 'outgoing' },
  { id: 3, caller: 'Vikram Patel', receiver: 'Rajesh Kumar', time: '2026-04-05 10:30', duration: '5:45', towerId: 'T-1048', lat: 28.6562, lng: 77.2321, type: 'incoming' },
  { id: 4, caller: 'Mohammad Ali', receiver: 'Vikram Patel', time: '2026-04-05 10:35', duration: '3:20', towerId: 'T-1048', lat: 28.6562, lng: 77.2321, type: 'outgoing' },
  { id: 5, caller: 'Vikram Patel', receiver: 'Deepak Verma', time: '2026-04-05 12:00', duration: '5:18', towerId: 'T-1050', lat: 28.6229, lng: 77.2388, type: 'outgoing' },
  { id: 6, caller: 'Rajesh Kumar', receiver: 'Amit Sharma', time: '2026-04-05 14:30', duration: '4:05', towerId: 'T-1042', lat: 28.5855, lng: 77.3100, type: 'outgoing' },
  { id: 7, caller: 'Rajesh Kumar', receiver: 'Vikram Patel', time: '2026-04-05 16:00', duration: '6:12', towerId: 'T-1042', lat: 28.5855, lng: 77.3100, type: 'outgoing' },
  { id: 8, caller: 'Mohammad Ali', receiver: 'Rajesh Kumar', time: '2026-04-05 18:30', duration: '9:45', towerId: 'T-1055', lat: 28.6507, lng: 77.2334, type: 'incoming' },
  { id: 9, caller: 'Deepak Verma', receiver: 'Rajesh Kumar', time: '2026-04-06 08:00', duration: '3:30', towerId: 'T-1060', lat: 28.6353, lng: 77.2490, type: 'incoming' },
  { id: 10, caller: 'Rajesh Kumar', receiver: 'Mohammad Ali', time: '2026-04-06 09:45', duration: '7:15', towerId: 'T-1042', lat: 28.5855, lng: 77.3100, type: 'outgoing' },
  { id: 11, caller: 'Vikram Patel', receiver: 'Mohammad Ali', time: '2026-04-06 11:00', duration: '4:50', towerId: 'T-1065', lat: 28.6289, lng: 77.2195, type: 'outgoing' },
  { id: 12, caller: 'Rajesh Kumar', receiver: 'Vikram Patel', time: '2026-04-06 13:15', duration: '11:22', towerId: 'T-1042', lat: 28.5855, lng: 77.3100, type: 'outgoing' },
]);

// Pre-seeded Evidence
writeData('evidence.json', [
  { id: 'E001', name: 'CCTV_Sector15_Cam3.mp4', storedName: 'seed_cctv1.mp4', type: 'video', size: '245 MB', uploadTime: '2026-04-05T14:30:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E002', name: 'Intercepted_Call_Log.pdf', storedName: 'seed_call.pdf', type: 'pdf', size: '2.1 MB', uploadTime: '2026-04-05T15:12:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E003', name: 'WhatsApp_Chat_Export.txt', storedName: 'seed_chat.txt', type: 'text', size: '156 KB', uploadTime: '2026-04-05T16:45:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E004', name: 'Suspect_Photo_RK.jpg', storedName: 'seed_photo.jpg', type: 'image', size: '3.4 MB', uploadTime: '2026-04-06T09:10:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E005', name: 'CCTV_CP_Entrance.mp4', storedName: 'seed_cctv2.mp4', type: 'video', size: '512 MB', uploadTime: '2026-04-06T10:22:00Z', status: 'pending', caseId: 'C001' },
  { id: 'E006', name: 'Financial_Records.pdf', storedName: 'seed_finance.pdf', type: 'pdf', size: '8.7 MB', uploadTime: '2026-04-06T11:05:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E007', name: 'CDR_Data_March2026.csv', storedName: 'seed_cdr.csv', type: 'text', size: '1.2 MB', uploadTime: '2026-04-06T12:30:00Z', status: 'analyzed', caseId: 'C001' },
  { id: 'E008', name: 'Location_Screenshot.png', storedName: 'seed_location.png', type: 'image', size: '890 KB', uploadTime: '2026-04-06T13:15:00Z', status: 'pending', caseId: 'C001' },
]);

// Pre-seeded Analysis
writeData('analysis.json', [
  {
    evidenceId: 'E001', type: 'video', riskScore: 82, riskLevel: 'high',
    detections: [
      { object: 'Person', count: 3, confidence: 0.94, timestamps: ['00:02:14', '00:05:32', '00:12:45'] },
      { object: 'Car (Silver Sedan)', count: 1, confidence: 0.87, timestamps: ['00:03:01'] },
      { object: 'Bike (Black)', count: 2, confidence: 0.79, timestamps: ['00:07:22', '00:14:10'] },
    ],
    summary: 'Multiple persons detected near restricted area. Suspicious bag identified at 00:05:35.',
    analyzedAt: '2026-04-05T15:00:00Z',
  },
  {
    evidenceId: 'E002', type: 'pdf', riskScore: 75, riskLevel: 'high',
    entities: [
      { type: 'Person', values: ['Rajesh Kumar', 'Vikram Patel', 'Mohammad Ali'] },
      { type: 'Location', values: ['Sector 15 Noida', 'Connaught Place', 'Chandni Chowk'] },
      { type: 'Amount', values: ['₹5,00,000', '₹12,00,000'] },
    ],
    summary: 'Multiple high-value transactions linked to known suspects.',
    analyzedAt: '2026-04-05T15:30:00Z',
  },
]);

console.log('\n  ✅ Data seeding complete!\n');
