import express from "express";
import logger from "morgan";
import "dotenv/config";


const app = express();
app.set("case sensitive routing", true);

// Middlewares.
app.use(express.json());
app.use(logger("combined"));
app.use(express.urlencoded({ extended: false }));

// Routes.
app.get("/", (req, res) => {
  res.send({
    environment: process.env.NODE_ENV,
    name: "carppify",
    author: "Willy Mateo Espinoza",
    version: "1.0.0"
  });
});

export { app };
