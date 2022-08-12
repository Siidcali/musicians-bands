const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');

const Song = db.define('song',{
    title:{
        type:DataTypes.STRING
    },
    year:{
        type:DataTypes.INTEGER
    }
})

module.exports = {
    Song
};