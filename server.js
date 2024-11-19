var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));