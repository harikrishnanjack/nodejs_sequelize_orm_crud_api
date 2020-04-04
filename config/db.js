const Sequelize = require('sequelize');

const sequelize = new Sequelize('orm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports=sequelize;