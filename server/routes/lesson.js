import express from "express";
import { createError } from "../utils/error.js";
import {
  createLesson,
  deleteLesson,
  getAllLesson,
  getLesson,
  updateLesson,
} from "../controllers/lesson.js";

const router = express.Router();

//create
router.post("/", createLesson);
//put
router.put("/:id", updateLesson);
//delete
router.delete("/:id", deleteLesson);
//get
router.get("/:id", getLesson);
//getAll
router.get("/", getAllLesson);

export default router;
