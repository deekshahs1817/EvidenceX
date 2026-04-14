// ============================================
// EvidenceX – Mock Data & Demo Dataset
// ============================================

export const suspects = [
  { id: 'S001', name: 'Rajesh Kumar', alias: 'RK', age: 34, risk: 'high', score: 85, phone: '+91-98765-43210', lastSeen: 'Sector 15, Noida', image: null },
  { id: 'S002', name: 'Amit Sharma', alias: 'Amit', age: 29, risk: 'medium', score: 52, phone: '+91-87654-32109', lastSeen: 'Connaught Place, Delhi', image: null },
  { id: 'S003', name: 'Priya Singh', alias: 'PS', age: 27, risk: 'low', score: 23, phone: '+91-76543-21098', lastSeen: 'MG Road, Gurgaon', image: null },
  { id: 'S004', name: 'Vikram Patel', alias: 'VP', age: 41, risk: 'high', score: 78, phone: '+91-65432-10987', lastSeen: 'Lajpat Nagar, Delhi', image: null },
  { id: 'S005', name: 'Deepak Verma', alias: 'DV', age: 36, risk: 'medium', score: 45, phone: '+91-54321-09876', lastSeen: 'Nehru Place, Delhi', image: null },
  { id: 'S006', name: 'Sunita Devi', alias: 'SD', age: 31, risk: 'low', score: 18, phone: '+91-43210-98765', lastSeen: 'Dwarka, Delhi', image: null },
  { id: 'S007', name: 'Mohammad Ali', alias: 'MA', age: 38, risk: 'high', score: 92, phone: '+91-32109-87654', lastSeen: 'Old Delhi', image: null },
  { id: 'S008', name: 'Neha Gupta', alias: 'NG', age: 25, risk: 'low', score: 12, phone: '+91-21098-76543', lastSeen: 'Saket, Delhi', image: null },
];

export const evidenceFiles = [
  { id: 'E001', name: 'CCTV_Sector15_Cam3.mp4', type: 'video', size: '245 MB', uploadTime: '2026-04-05 14:30', status: 'analyzed', caseId: 'C001' },
  { id: 'E002', name: 'Intercepted_Call_Log.pdf', type: 'pdf', size: '2.1 MB', uploadTime: '2026-04-05 15:12', status: 'analyzed', caseId: 'C001' },
  { id: 'E003', name: 'WhatsApp_Chat_Export.txt', type: 'text', size: '156 KB', uploadTime: '2026-04-05 16:45', status: 'analyzed', caseId: 'C001' },
  { id: 'E004', name: 'Suspect_Photo_RK.jpg', type: 'image', size: '3.4 MB', uploadTime: '2026-04-06 09:10', status: 'analyzed', caseId: 'C001' },
  { id: 'E005', name: 'CCTV_CP_Entrance.mp4', type: 'video', size: '512 MB', uploadTime: '2026-04-06 10:22', status: 'pending', caseId: 'C001' },
  { id: 'E006', name: 'Financial_Records.pdf', type: 'pdf', size: '8.7 MB', uploadTime: '2026-04-06 11:05', status: 'analyzed', caseId: 'C001' },
  { id: 'E007', name: 'CDR_Data_March2026.csv', type: 'text', size: '1.2 MB', uploadTime: '2026-04-06 12:30', status: 'analyzed', caseId: 'C001' },
  { id: 'E008', name: 'Location_Screenshot.png', type: 'image', size: '890 KB', uploadTime: '2026-04-06 13:15', status: 'pending', caseId: 'C001' },
];

export const analysisResults = [
  {
    evidenceId: 'E001',
    type: 'video',
    detections: [
      { object: 'Person', count: 3, confidence: 0.94, timestamps: ['00:02:14', '00:05:32', '00:12:45'] },
      { object: 'Car (Silver Sedan)', count: 1, confidence: 0.87, timestamps: ['00:03:01'] },
      { object: 'Bike (Black)', count: 2, confidence: 0.79, timestamps: ['00:07:22', '00:14:10'] },
      { object: 'Bag (Suspicious)', count: 1, confidence: 0.68, timestamps: ['00:05:35'] },
    ],
    riskLevel: 'high',
    riskScore: 82,
    summary: 'Multiple persons detected near restricted area. Suspicious bag identified at 00:05:35.'
  },
  {
    evidenceId: 'E002',
    type: 'pdf',
    entities: [
      { type: 'Person', values: ['Rajesh Kumar', 'Vikram Patel', 'Mohammad Ali'] },
      { type: 'Location', values: ['Sector 15 Noida', 'Connaught Place', 'Chandni Chowk'] },
      { type: 'Date', values: ['March 15, 2026', 'March 22, 2026', 'April 1, 2026'] },
      { type: 'Phone', values: ['+91-98765-43210', '+91-65432-10987'] },
      { type: 'Amount', values: ['₹5,00,000', '₹12,00,000'] },
    ],
    riskLevel: 'high',
    riskScore: 75,
    summary: 'Multiple high-value transactions linked to known suspects. Financial trail connects 3 individuals.'
  },
  {
    evidenceId: 'E003',
    type: 'text',
    entities: [
      { type: 'Person', values: ['RK', 'Amit', 'VP'] },
      { type: 'Location', values: ['the usual place', 'near metro station', 'warehouse'] },
      { type: 'Date', values: ['tomorrow', 'next Friday', '10th April'] },
      { type: 'Code Words', values: ['package', 'delivery', 'meeting'] },
    ],
    riskLevel: 'medium',
    riskScore: 58,
    summary: 'Coded communication detected. References to meetings and deliveries at undisclosed locations.'
  },
  {
    evidenceId: 'E004',
    type: 'image',
    detections: [
      { object: 'Person (Male)', count: 1, confidence: 0.96 },
      { object: 'Face Match: Rajesh Kumar', count: 1, confidence: 0.89 },
      { object: 'Vehicle (Background)', count: 1, confidence: 0.72 },
    ],
    riskLevel: 'high',
    riskScore: 88,
    summary: 'Positive face match with suspect Rajesh Kumar (89% confidence). Location matches known hangout.'
  },
  {
    evidenceId: 'E006',
    type: 'pdf',
    entities: [
      { type: 'Person', values: ['Rajesh Kumar', 'Deepak Verma'] },
      { type: 'Account', values: ['HDFC-XXXX4521', 'SBI-XXXX7832'] },
      { type: 'Amount', values: ['₹2,50,000', '₹8,00,000', '₹15,00,000'] },
      { type: 'Date', values: ['Feb 10, 2026', 'March 5, 2026'] },
    ],
    riskLevel: 'high',
    riskScore: 71,
    summary: 'Large cash deposits found in accounts linked to suspects. Pattern consistent with money laundering.'
  },
];

export const networkData = {
  nodes: [
    { id: 'Rajesh Kumar', type: 'person', risk: 'high', group: 1 },
    { id: 'Vikram Patel', type: 'person', risk: 'high', group: 1 },
    { id: 'Amit Sharma', type: 'person', risk: 'medium', group: 2 },
    { id: 'Mohammad Ali', type: 'person', risk: 'high', group: 1 },
    { id: 'Deepak Verma', type: 'person', risk: 'medium', group: 2 },
    { id: 'Priya Singh', type: 'person', risk: 'low', group: 3 },
    { id: 'Sunita Devi', type: 'person', risk: 'low', group: 3 },
    { id: 'Neha Gupta', type: 'person', risk: 'low', group: 3 },
    { id: 'Sector 15, Noida', type: 'location', risk: 'high', group: 4 },
    { id: 'Connaught Place', type: 'location', risk: 'medium', group: 4 },
    { id: 'Old Delhi', type: 'location', risk: 'high', group: 4 },
    { id: 'Chandni Chowk', type: 'location', risk: 'medium', group: 4 },
    { id: 'Nehru Place', type: 'location', risk: 'low', group: 4 },
    { id: 'Lajpat Nagar', type: 'location', risk: 'medium', group: 4 },
  ],
  links: [
    { source: 'Rajesh Kumar', target: 'Vikram Patel', strength: 'strong', calls: 45, label: 'Frequent Calls' },
    { source: 'Rajesh Kumar', target: 'Mohammad Ali', strength: 'strong', calls: 38, label: 'Business Partner' },
    { source: 'Rajesh Kumar', target: 'Amit Sharma', strength: 'medium', calls: 15, label: 'Associate' },
    { source: 'Rajesh Kumar', target: 'Deepak Verma', strength: 'medium', calls: 12, label: 'Financial Link' },
    { source: 'Vikram Patel', target: 'Mohammad Ali', strength: 'strong', calls: 28, label: 'Co-conspirator' },
    { source: 'Vikram Patel', target: 'Deepak Verma', strength: 'weak', calls: 5, label: 'Occasional Contact' },
    { source: 'Amit Sharma', target: 'Priya Singh', strength: 'weak', calls: 3, label: 'Known Associate' },
    { source: 'Mohammad Ali', target: 'Sunita Devi', strength: 'weak', calls: 2, label: 'Peripheral' },
    { source: 'Deepak Verma', target: 'Neha Gupta', strength: 'weak', calls: 4, label: 'Family' },
    { source: 'Rajesh Kumar', target: 'Sector 15, Noida', strength: 'strong', calls: null, label: 'Primary Location' },
    { source: 'Rajesh Kumar', target: 'Connaught Place', strength: 'medium', calls: null, label: 'Frequent Visit' },
    { source: 'Vikram Patel', target: 'Lajpat Nagar', strength: 'strong', calls: null, label: 'Residence' },
    { source: 'Mohammad Ali', target: 'Old Delhi', strength: 'strong', calls: null, label: 'Base of Operations' },
    { source: 'Mohammad Ali', target: 'Chandni Chowk', strength: 'medium', calls: null, label: 'Regular Visit' },
    { source: 'Deepak Verma', target: 'Nehru Place', strength: 'strong', calls: null, label: 'Workplace' },
    { source: 'Amit Sharma', target: 'Connaught Place', strength: 'medium', calls: null, label: 'Meeting Point' },
  ]
};

export const timelineEvents = [
  { id: 'T001', time: '2026-04-05 06:30', type: 'cctv', title: 'Person A detected at Sector 15 Gate', description: 'CCTV Cam 3 detected person matching Rajesh Kumar entering Sector 15 complex.', suspect: 'Rajesh Kumar', location: 'Sector 15, Noida', severity: 'high' },
  { id: 'T002', time: '2026-04-05 07:15', type: 'call', title: 'Call between RK and VP', description: 'Intercepted call (duration: 8 min 32 sec). Keywords: "delivery", "tomorrow", "warehouse".', suspect: 'Rajesh Kumar', location: null, severity: 'high' },
  { id: 'T003', time: '2026-04-05 08:00', type: 'location', title: 'CDR ping at Tower T-1045', description: 'Rajesh Kumar phone pinged tower near Connaught Place. Movement from Noida detected.', suspect: 'Rajesh Kumar', location: 'Connaught Place', severity: 'medium' },
  { id: 'T004', time: '2026-04-05 08:45', type: 'cctv', title: 'Silver sedan spotted at CP', description: 'Vehicle matching suspect profile detected at Connaught Place parking.', suspect: null, location: 'Connaught Place', severity: 'medium' },
  { id: 'T005', time: '2026-04-05 09:10', type: 'call', title: 'Call between MA and RK', description: 'Short call (2 min 14 sec). Coded language used. Reference to "the package".', suspect: 'Mohammad Ali', location: null, severity: 'high' },
  { id: 'T006', time: '2026-04-05 10:00', type: 'document', title: 'Financial transaction detected', description: '₹5,00,000 transferred from HDFC-XXXX4521 to unknown account. Flagged by AI.', suspect: 'Rajesh Kumar', location: null, severity: 'high' },
  { id: 'T007', time: '2026-04-05 10:30', type: 'location', title: 'Three phones converge', description: 'CDR data shows RK, VP, and MA phones all within 500m radius at Chandni Chowk.', suspect: 'Multiple', location: 'Chandni Chowk', severity: 'high' },
  { id: 'T008', time: '2026-04-05 11:15', type: 'cctv', title: 'Meeting captured on CCTV', description: 'Three individuals matching suspect descriptions seen meeting near Chandni Chowk market.', suspect: 'Multiple', location: 'Chandni Chowk', severity: 'high' },
  { id: 'T009', time: '2026-04-05 12:00', type: 'call', title: 'Call from VP to DV', description: 'Post-meeting call. Duration: 5 min 18 sec. Mentions "accounts" and "papers".', suspect: 'Vikram Patel', location: null, severity: 'medium' },
  { id: 'T010', time: '2026-04-05 13:30', type: 'location', title: 'Suspects disperse', description: 'CDR shows rapid movement away from meeting point in different directions.', suspect: 'Multiple', location: 'Various', severity: 'medium' },
  { id: 'T011', time: '2026-04-05 15:00', type: 'document', title: 'Chat log analyzed', description: 'WhatsApp export reveals coded messages about "package delivery" schedule.', suspect: 'Amit Sharma', location: null, severity: 'medium' },
  { id: 'T012', time: '2026-04-05 18:00', type: 'cctv', title: 'Evening activity at warehouse', description: 'Movement detected at Sector 15 warehouse. Vehicle loading activity observed.', suspect: 'Rajesh Kumar', location: 'Sector 15, Noida', severity: 'high' },
];

export const cdrData = [
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
];

export const towerLocations = {
  'T-1042': { lat: 28.5855, lng: 77.3100, name: 'Sector 15, Noida', area: 'Noida' },
  'T-1045': { lat: 28.6315, lng: 77.2167, name: 'Connaught Place', area: 'Central Delhi' },
  'T-1048': { lat: 28.6562, lng: 77.2321, name: 'Chandni Chowk', area: 'Old Delhi' },
  'T-1050': { lat: 28.6229, lng: 77.2388, name: 'Nehru Place', area: 'South Delhi' },
  'T-1055': { lat: 28.6507, lng: 77.2334, name: 'Old Delhi Station', area: 'Old Delhi' },
  'T-1060': { lat: 28.6353, lng: 77.2490, name: 'ITO', area: 'Central Delhi' },
  'T-1065': { lat: 28.6289, lng: 77.2195, name: 'Lajpat Nagar', area: 'South Delhi' },
};

export const crossEvidenceLinks = [
  { id: 'CL001', type: 'person-cctv-call', description: 'Rajesh Kumar detected in CCTV at Sector 15 and found in call records with Vikram Patel', evidence: ['E001', 'E002'], suspects: ['Rajesh Kumar', 'Vikram Patel'], confidence: 92, severity: 'high' },
  { id: 'CL002', type: 'person-financial-call', description: 'Financial transfer linked to Rajesh Kumar matches timing of intercepted call', evidence: ['E006', 'E002'], suspects: ['Rajesh Kumar', 'Deepak Verma'], confidence: 85, severity: 'high' },
  { id: 'CL003', type: 'location-cctv-cdr', description: 'Chandni Chowk CCTV footage and CDR data confirm meeting of 3 suspects', evidence: ['E001', 'E007'], suspects: ['Rajesh Kumar', 'Vikram Patel', 'Mohammad Ali'], confidence: 88, severity: 'high' },
  { id: 'CL004', type: 'chat-call-match', description: 'WhatsApp chat mentions "delivery tomorrow" matching intercepted call content', evidence: ['E003', 'E002'], suspects: ['Amit Sharma', 'Rajesh Kumar'], confidence: 74, severity: 'medium' },
  { id: 'CL005', type: 'person-photo-cctv', description: 'Photo of Rajesh Kumar matches CCTV detection with 89% face recognition confidence', evidence: ['E004', 'E001'], suspects: ['Rajesh Kumar'], confidence: 89, severity: 'high' },
  { id: 'CL006', type: 'movement-financial', description: 'CDR movement pattern correlates with financial transaction timing', evidence: ['E007', 'E006'], suspects: ['Deepak Verma'], confidence: 67, severity: 'medium' },
];

export const aiInsights = [
  { id: 'I001', type: 'connection', icon: 'link', title: 'Strong Connection Detected', description: 'Rajesh Kumar and Vikram Patel show 45 calls in 30 days with average duration of 6 minutes. This frequency is 8x above normal contact patterns.', confidence: 95, severity: 'high', suspects: ['Rajesh Kumar', 'Vikram Patel'] },
  { id: 'I002', type: 'movement', icon: 'map', title: 'Coordinated Movement Pattern', description: 'Three suspects converged at Chandni Chowk within 30 minutes on April 5th. CDR data shows they arrived from different directions, suggesting a planned meeting.', confidence: 88, severity: 'high', suspects: ['Rajesh Kumar', 'Vikram Patel', 'Mohammad Ali'] },
  { id: 'I003', type: 'financial', icon: 'dollar', title: 'Suspicious Financial Activity', description: 'Large cash deposits (₹25,50,000 total) across 3 accounts in 2 weeks. Pattern consistent with layering phase of money laundering.', confidence: 82, severity: 'high', suspects: ['Rajesh Kumar', 'Deepak Verma'] },
  { id: 'I004', type: 'communication', icon: 'message', title: 'Coded Language Detected', description: 'Analysis of WhatsApp chats and call transcripts reveals consistent use of coded terms: "package" (8 occurrences), "delivery" (5), "meeting" (12).', confidence: 76, severity: 'medium', suspects: ['Rajesh Kumar', 'Amit Sharma'] },
  { id: 'I005', type: 'location', icon: 'location', title: 'Possible Meeting Point Identified', description: 'Sector 15, Noida warehouse visited by Rajesh Kumar 12 times in past month. Evening visits (6-10 PM) correlate with outgoing calls to Vikram Patel.', confidence: 90, severity: 'high', suspects: ['Rajesh Kumar'] },
  { id: 'I006', type: 'pattern', icon: 'pattern', title: 'Operational Pattern Detected', description: 'A recurring pattern emerges: Call → Meeting → Financial transaction. This cycle has repeated 4 times in the past 3 weeks.', confidence: 85, severity: 'high', suspects: ['Rajesh Kumar', 'Vikram Patel', 'Deepak Verma'] },
  { id: 'I007', type: 'anomaly', icon: 'alert', title: 'Sudden Behavior Change', description: 'Mohammad Ali switched from using single SIM to dual-SIM on March 20th. Second number shows encrypted messaging app usage.', confidence: 71, severity: 'medium', suspects: ['Mohammad Ali'] },
  { id: 'I008', type: 'network', icon: 'network', title: 'Network Expansion Alert', description: 'Two new contacts added to the suspect network in the past week. Priya Singh and Neha Gupta show peripheral connections that may indicate network growth.', confidence: 63, severity: 'low', suspects: ['Priya Singh', 'Neha Gupta'] },
];

export const movementPatterns = [
  { suspect: 'Rajesh Kumar', pattern: 'repeated_visit', location: 'Sector 15, Noida', visits: 12, timeframe: '30 days', times: ['06:30', '07:00', '18:00', '19:30'], severity: 'high', description: 'Regular morning and evening visits to warehouse area' },
  { suspect: 'Rajesh Kumar', pattern: 'route_change', location: 'Various', visits: null, timeframe: 'Last 7 days', times: null, severity: 'medium', description: 'Switched from usual Noida-Delhi route to a longer circuitous path via Ghaziabad' },
  { suspect: 'Vikram Patel', pattern: 'repeated_visit', location: 'Chandni Chowk', visits: 8, timeframe: '14 days', times: ['10:00', '11:00', '14:00'], severity: 'medium', description: 'Frequent midday visits to Chandni Chowk market area' },
  { suspect: 'Mohammad Ali', pattern: 'sudden_movement', location: 'Old Delhi → Noida', visits: null, timeframe: 'April 5', times: ['05:30'], severity: 'high', description: 'Unusual early morning movement from Old Delhi to Noida (outside normal pattern)' },
  { suspect: 'Deepak Verma', pattern: 'repeated_visit', location: 'Nehru Place', visits: 15, timeframe: '30 days', times: ['09:00', '17:00'], severity: 'low', description: 'Regular workday pattern — likely workplace' },
  { suspect: 'Rajesh Kumar', pattern: 'convergence', location: 'Chandni Chowk', visits: 3, timeframe: '7 days', times: ['10:30'], severity: 'high', description: 'Meeting point where multiple suspects converge simultaneously' },
];

export const recentActivity = [
  { time: '2 min ago', action: 'New evidence uploaded', detail: 'Location_Screenshot.png added to Case C001', type: 'upload' },
  { time: '15 min ago', action: 'AI analysis complete', detail: 'CDR_Data_March2026.csv processed – 12 records analyzed', type: 'analysis' },
  { time: '1 hour ago', action: 'High-risk alert triggered', detail: 'Suspect convergence detected at Chandni Chowk', type: 'alert' },
  { time: '2 hours ago', action: 'New suspect flagged', detail: 'Mohammad Ali risk score elevated to 92', type: 'alert' },
  { time: '3 hours ago', action: 'Cross-evidence link found', detail: 'CCTV footage matches call record timing', type: 'link' },
  { time: '5 hours ago', action: 'Financial anomaly detected', detail: '₹5,00,000 transfer flagged by AI engine', type: 'financial' },
];
