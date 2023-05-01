import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photos: {
      type: String,
    },
    role: {
      type: String,
      enum: ["teacher", "student"],
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    lessons: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
