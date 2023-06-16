"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrybt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
class token {
    constructor() {
        this.tokenGenerated = jsonwebtoken_1.default.sign;
    }
}
exports.default = token;
