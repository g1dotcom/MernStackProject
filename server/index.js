import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//import routes
import authRoute from "./routes/auth.js";
import lessonRoute from "./routes/lesson.js";
import teacherRoute from "./routes/teacher.js";
import studentRoute from "./routes/student.js";
//connect to db

//middlewares

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

//middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/lessons", lessonRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/student", studentRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
