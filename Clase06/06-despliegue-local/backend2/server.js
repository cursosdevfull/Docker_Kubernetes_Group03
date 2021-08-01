const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/health', (req, res) => res.send('I am alive'));
app.get('/api/message', (req, res) => {
  res.json({
    message: 'Message from Backend2',
  });
});

app.get('**', (req, res) => {
  res.send('Path not found');
});

const port = process.env.PORT || 19020;

app.listen(port, () => console.log('Backend2 is running on port: ' + port));
