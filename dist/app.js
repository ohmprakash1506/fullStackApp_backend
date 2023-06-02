"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const logger_middleware_1 = __importDefault(require("./middlewares/logger.middleware"));
const cornJob_1 = require("./cornJob");
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5010;
(0, cornJob_1.scheduleCronJobs)();
app.get("/logger", (req, res) => {
    logger_middleware_1.default.error(`This is error message`);
    logger_middleware_1.default.warn(`This is warn message`);
    logger_middleware_1.default.info(`This is info message`);
    logger_middleware_1.default.http(`This is http message`);
    logger_middleware_1.default.debug(`This is debug message`);
    res.send(`Hello world`);
});
app.listen(port, () => {
    logger_middleware_1.default.debug(`Server is listening @ host http://localhost:${port}`);
});
