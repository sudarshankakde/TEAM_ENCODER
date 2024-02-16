const mongoose = require('mongoose');
const pass="L4fjN5w8YlF5U9lc";
const connectDB = async () => {
  try {
    // MongoDB connection string
    const connectionString = 'mongodb+srv://sudarshankakde1111:L4fjN5w8YlF5U9lc@hackthon.2mfuycq.mongodb.net/?retryWrites=true&w=majority';

    // Connect to MongoDB
    await mongoose.connect(connectionString);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
