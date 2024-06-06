// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://clarkhe:123456ax@cluster0.p95xmem.mongodb.net/GelosGrocery'
  );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
