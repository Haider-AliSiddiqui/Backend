// main server file

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

config({
    path: "./.env"
})

// Create 1st api: / route...!
app.get("/", (req, res) => {
  return res.status(200).send({
    statusCode: 200,
    message: "Welcome to Back End using Node JS",
  });
});