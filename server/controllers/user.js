import User from "../models/user.js";
import Lesson from "../models/lesson.js";

//UPDATE User

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
//DELETE User

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

//GET User

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//GETAll User

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

//favorites
export const addFavorite = async (req, res, next) => {
  const userId = await User.findById(req.params.id);

  if (!userId.lessons.includes(req.body.lessonId)) {
    userId.lessons.push(req.body.lessonId);
    await userId.save();
    res.status(200).json("lesson has been added to favorites");
  }

  try {
  } catch (err) {
    next(err);
  }
};
