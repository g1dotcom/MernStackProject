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
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
