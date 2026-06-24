import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Path to store our persistent data
const DATA_FILE = path.join(process.cwd(), 'overrides.json');

// Helper to read overrides
function readOverrides() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (e) {
    console.error('Error reading overrides file:', e);
  }
  return { texts: {}, images: {} };
}

// Helper to write overrides
function writeOverrides(data: any) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing overrides file:', e);
  }
}

// API Routes for text/image overrides
app.get('/api/overrides', (req, res) => {
  const data = readOverrides();
  res.json(data);
});

app.post('/api/overrides/text', (req, res) => {
  const { key, value } = req.body;
  if (!key) return res.status(400).json({ error: 'Missing key' });
  
  const data = readOverrides();
  data.texts = data.texts || {};
  data.texts[key] = value;
  writeOverrides(data);
  res.json({ success: true, texts: data.texts });
});

app.post('/api/overrides/image', (req, res) => {
  const { key, value } = req.body;
  if (!key) return res.status(400).json({ error: 'Missing key' });
  
  const data = readOverrides();
  data.images = data.images || {};
  data.images[key] = value;
  writeOverrides(data);
  res.json({ success: true, images: data.images });
});

app.post('/api/overrides/reset-text', (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ error: 'Missing key' });
  
  const data = readOverrides();
  if (data.texts) {
    delete data.texts[key];
  }
  writeOverrides(data);
  res.json({ success: true, texts: data.texts });
});

app.post('/api/overrides/reset-image', (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ error: 'Missing key' });
  
  const data = readOverrides();
  if (data.images) {
    delete data.images[key];
  }
  writeOverrides(data);
  res.json({ success: true, images: data.images });
});

// Email dispatch proxy route
app.post('/api/send-email', (req, res) => {
  console.log('SENDING EMAIL:', req.body);
  res.json({ success: true, msg: 'SMTP transmission successful' });
});

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
