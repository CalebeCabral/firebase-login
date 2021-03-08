const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const UserRoute = require('./routes/user');
const AuthRoute = require('./routes/auth');

mongoose.connect('mongodb://127.0.0.1:27017/preparo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('err');
});

db.once('open', () => {
  console.log('Database connection established');
});

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', UserRoute);
app.use('/api', AuthRoute);
