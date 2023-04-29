import express from "express";
import Lesson from "../models/lesson.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newLesson = new Lesson(req.body);
  try {
    const savedLesson = await newLesson.save();
    res.status(200).json(savedLesson);
  } catch (error) {
    res.status(500).json(error);
  }
});
//put
router.put("/:id", async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedLesson);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.status(200).json("Lesson has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
//get
router.get("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json(error);
  }
});
//getAll
router.get("/", async (req, res, next) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    next(err);
  }
});

export default router;
