const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api/health', (req, res) => res.send('I am alive'));
app.get('/api/message', (req, res) => {
  const pathBackend2 =
    process.env.SERVICE_API2_ENDPOINT || 'http://localhost:19020/api';

  axios.get(pathBackend2 + '/message').then((response) => {
    const msgBackend2 = response.data.message;
    res.json({
      msgBackend1: 'Message from Backend1',
      msgBackend2: msgBackend2,
    });
  });
});

app.get('**', (req, res) => {
  res.send('Path not found');
});

const port = process.env.PORT || 19010;

app.listen(port, () => console.log('Backend1 is running on port: ' + port));
