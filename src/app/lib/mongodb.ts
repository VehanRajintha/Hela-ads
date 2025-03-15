import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://pmagentdsl52:LJoyx0PRhmpRqhjc@anypay.a2odj.mongodb.net/?retryWrites=true&w=majority&appName=anypay';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Global variable to maintain connection across hot reloads
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
    
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectToDatabase; 