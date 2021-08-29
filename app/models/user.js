const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  intendedPosition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maritalStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idCard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  car: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  licence: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
