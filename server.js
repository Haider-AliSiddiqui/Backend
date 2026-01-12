// main server file

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

config({
    path: "./.env"
})

// Global variables...!
const port = process.env.PORT;
const app = express();
let todoBucket = []; // Data will be stored here...!

// Middlewares...!
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Create 1st api: / route...!
app.get("/", (req, res) => {
  return res.status(200).send({
    statusCode: 200,
    message: "Welcome to Back End using Node JS",
  });
});

// Server running...!
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});