const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// const uri = process.env.MONGODB_URI;
const uri = process.env.BASE_URL;

// mongodb connect...
function connectToDatabase() {
  mongoose.connect(uri, {
    // useNewUrlParser and useUnifiedTopology have been deprecated and can be removed
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB successfully!');
  });
}

module.exports = connectToDatabase;
