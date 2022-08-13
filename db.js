const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect:'sqlite',
    storage:":memory:"
})
module.exports = {
    db,
    Sequelize
};
