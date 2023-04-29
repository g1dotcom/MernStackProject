import Lesson from "../models/lesson.js";
//CREATE LESSON
export const createLesson = async (req, res, next) => {
  const newLesson = new Lesson(req.body);
  try {
    const savedLesson = await newLesson.save();
    res.status(200).json(savedLesson);
  } catch (err) {
    next(err);
  }
};
//UPDATE LESSON

export const updateLesson = async (req, res, next) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLesson);
  } catch (err) {
    next(err);
  }
};
//DELETE LESSON

export const deleteLesson = async (req, res, next) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.status(200).json("Lesson has been deleted");
  } catch (err) {
    next(err);
  }
};

//GET LESSON

export const getLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).json(lesson);
  } catch (err) {
    next(err);
  }
};

//GETAll LESSON

export const getAllLesson = async (req, res, next) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    next(err);
  }
};
