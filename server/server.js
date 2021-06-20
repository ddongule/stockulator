const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./routes/index');

app.use(cors());
app.use('/api', api);

app.listen(4000, () => console.log('노드 러닝!'));
