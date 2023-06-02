"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const config = require("config.json");
const mySql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
const db = {};
module.exports = db;
const intialize = () => __awaiter(void 0, void 0, void 0, function* () {
    //! creating db if does not exist
    const { host, port, user, password, database } = config.database;
    const connection = yield mySql.createConnection({
        host,
        port,
        user,
        password,
    });
    yield connection.query(`CREATE DATABASE IF NOT EXISTS \` ${database} \`; `);
    //! connect to db
    const sequelize = new Sequelize(database, user, password, {
        dialect: "mysql",
    });
    //! init the model and add it
});
