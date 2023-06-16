import express from "express";
import "dotenv/config";
import Logger from "./middlewares/logger.middleware";
import { scheduleCronJobs } from "./cornJob";
import routes from "./users/router/user.router";
import * as jwt from 'jsonwebtoken';


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

app.post("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey: any = process.env.SECERT;
  let data = {
      time: Date(),
      userId: 12,
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.listen(port, () => {
  Logger.debug(`Server is listening @ host http://localhost:${port}`);
});

app.use("/api/v1", routes);
