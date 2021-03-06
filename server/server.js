const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const api = require('./routes/index');

const PORT = process.env.PORT || 4000;
app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`λΈλ λ¬λ on port: ${PORT}`));
