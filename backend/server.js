const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;

app.get('/', (req, res) => res.json({ message: "EsembleData Backend is live!" }));
app.get('/api/data', (req, res) => res.json({ tikTokMetrics: { followers: 1000, likes: 500 } }));

app.listen(PORT, () => console.log(`Backend running on http://localhost:5000`));
