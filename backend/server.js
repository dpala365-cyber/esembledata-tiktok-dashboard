const express = require('express');
const cors = require('cors');
const scheduler = require('./scheduler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Backend running with TikTok Scheduler'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  scheduler.start(); // safe scheduler
});
