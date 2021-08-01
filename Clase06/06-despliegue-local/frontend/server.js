const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/api/health', (req, res) => res.send('I am alive'));
app.get('/api/config', (req, res) => {
  res.json({
    backend1: process.env.SERVICE_API1_ENDPOINT || 'http://localhost:19010/api',
  });
});

app.get('**', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 19000;

app.listen(port, () => console.log('Frontend is running on port: ' + port));
