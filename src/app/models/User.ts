import mongoose, { Schema } from 'mongoose';

// Define the User schema
const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  ads: [{
    type: Schema.Types.ObjectId,
    ref: 'Ad',
  }],
});

// Check if the model already exists to prevent overwriting during hot reloads
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User; 