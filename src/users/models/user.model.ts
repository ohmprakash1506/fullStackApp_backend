import { DataTypes, Sequelize } from "sequelize";

const attributes = {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  timeStamp: false,
  tableName: "tbl_Users",
};

export default (sequelize: Sequelize) => {
  return sequelize.define("User", attributes, options);
};
