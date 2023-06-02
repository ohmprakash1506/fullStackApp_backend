import express from "express";
import "dotenv/config";
import Logger from "./middlewares/logger.middleware";
import { scheduleCronJobs } from "./cornJob";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5010;

scheduleCronJobs();

app.get("/logger", (req, res) => {
  Logger.error(`This is error message`);
  Logger.warn(`This is warn message`);
  Logger.info(`This is info message`);
  Logger.http(`This is http message`);
  Logger.debug(`This is debug message`);

  res.send(`Hello world`);
});

app.listen(port, () => {
  Logger.debug(`Server is listening @ host http://localhost:${port}`);
});
