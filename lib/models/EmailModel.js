import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

// Correction ici : mongoose.models.email (avec un "s") pour éviter les erreurs en hot reload
const EmailModel = mongoose.models.email || mongoose.model('email', Schema);

export default EmailModel;
