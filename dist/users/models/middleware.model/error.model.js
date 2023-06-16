"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customError = void 0;
class customError {
    constructor(message, status = 500, addtionalInfo = {}) {
        this.message = message;
        this.status = status;
        this.addtionalInfo = addtionalInfo;
    }
}
exports.customError = customError;
