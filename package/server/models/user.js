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
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
