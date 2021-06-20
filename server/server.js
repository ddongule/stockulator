const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./routes/index');

const PORT = process.env.PORT || 4000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(cors());
app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`
  노드 러닝 on port: ${PORT}
`)
);
