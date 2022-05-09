import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(json());

app.get("/", (_req, res) => {
  res.send("Online");
});

app.listen(PORT, () => {
  console.log(
    chalk.bold.yellow(`Server started on port ${chalk.bold.yellow(PORT)}`)
  );
});
