import { morganFormat, env } from "./config/app.config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";

const app = express();
app.set("case sensitive routing", true);

// Middlewares.
app.use(cors());
app.use(express.json());
app.use(logger(morganFormat));
app.use(express.urlencoded({ extended: false }));

// Routes.
app.get("/", (req, res) => {
  res.send({
    environment: env,
    name: "carppify",
    author: "Willy Mateo Espinoza",
    version: "1.0.0",
  });
});

export { app };
