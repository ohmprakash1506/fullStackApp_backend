const config = require("config.json");
const mySql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

const db = {};
module.exports = db;

const intialize = async () => {
  //! creating db if does not exist

  const { host, port, user, password, database } = config.database;
  const connection = await mySql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \` ${database} \`; `);

  //! connect to db

  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
  });

  //! init the model and add it
};
