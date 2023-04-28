import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import database from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const PORT = 5000;

database();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
