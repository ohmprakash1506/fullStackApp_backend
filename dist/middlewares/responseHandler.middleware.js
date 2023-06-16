"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logError = (error) => {
    console.error(error);
};
const returnError = (statusCode, message) => {
    const response = {
        statusCode,
        response: {
            status: false,
            code: statusCode,
            message
        }
    };
};
const retrunSuccess = (statusCode, message, data) => {
    const response = {
        statusCode,
        response: {
            status: true,
            code: statusCode,
            message,
            data,
        }
    };
};
exports.default = {
    retrunSuccess,
    returnError,
    logError
};
