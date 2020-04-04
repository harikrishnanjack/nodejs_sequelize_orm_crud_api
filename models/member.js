const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const member = sequelize.define('members', {
  mid:{
type:Sequelize.NUMBER,
allowNull:false,
primaryKey:true,
autoIncrement: true
  },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    country: {
      type: Sequelize.STRING,
      allowNull:false
    },
    language:{
        type:Sequelize.STRING,
        allowNull:false
    },
    salary:{
        type:Sequelize.NUMBER,
        allowNull:false
    }
},{ timestamps: false});

  module.exports = member;