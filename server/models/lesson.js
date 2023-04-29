import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    teacher: {
      type: [String],
    },
    student: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lesson", LessonSchema);
