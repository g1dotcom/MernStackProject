import express from "express";
import { createError } from "../utils/error.js";
import {
  createLesson,
  deleteLesson,
  getAllLesson,
  getLesson,
  updateLesson,
} from "../controllers/lesson.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createLesson);
//put
router.put("/:id", verifyAdmin, updateLesson);
//delete
router.delete("/:id", verifyAdmin, deleteLesson);
//get
router.get("/:id", getLesson);
//getAll
router.get("/", getAllLesson);

export default router;
