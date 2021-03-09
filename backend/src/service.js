const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const firebase = require('firebase');

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

const firebaseConfig = {
  apiKey: 'AIzaSyDMrI9lqbxcUHtTqpw8MeRs-YZwkVPr5nE',
  authDomain: 'techpreparo-teste.firebaseapp.com',
  projectId: 'techpreparo-teste',
  storageBucket: 'techpreparo-teste.appspot.com',
  messagingSenderId: '888742880407',
  appId: '1:888742880407:web:027aa1e52229f98945b5d2',
};

firebase.initializeApp(firebaseConfig);

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

app.use('/api/user', UserRoute);
app.use('/api', AuthRoute);
