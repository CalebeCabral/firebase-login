const admin = require('firebase-admin');
const serviceAccount = require('./techpreparo-teste-firebase-adminsdk-rd1mw-10b300d3d4.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin };
