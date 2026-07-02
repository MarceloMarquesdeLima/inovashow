const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dados/database.sqlite',
    logging: false
});

module.exports = sequelize;