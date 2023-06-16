"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const attributes = {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
};
const options = {
    timeStamp: false,
    tableName: "tbl_Users",
};
exports.default = (sequelize) => {
    return sequelize.define("User", attributes, options);
};
