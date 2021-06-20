const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./routes/index');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use('/api', api);

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.listen(PORT, () =>
  console.log(`
  노드 러닝 on port: ${PORT}
`)
);
