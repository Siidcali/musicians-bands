const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');


// TODO - define the Musician model
let Musician=db.define('Musician',{
    name:{
        type:DataTypes.STRING
    },
    instruments:{
        type:DataTypes.STRING
    }
})

module.exports = {
    Musician
};