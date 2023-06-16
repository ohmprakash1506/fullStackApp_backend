"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const logger_middleware_1 = __importDefault(require("./middlewares/logger.middleware"));
const cornJob_1 = require("./cornJob");
const user_router_1 = __importDefault(require("./users/router/user.router"));
const jwt = __importStar(require("jsonwebtoken"));
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
app.post("/user/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
    let jwtSecretKey = process.env.SECERT;
    let data = {
        time: Date(),
        userId: 12,
    };
    const token = jwt.sign(data, jwtSecretKey);
    res.send(token);
});
app.listen(port, () => {
    logger_middleware_1.default.debug(`Server is listening @ host http://localhost:${port}`);
});
app.use("/api/v1", user_router_1.default);
