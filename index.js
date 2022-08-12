const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.belongsTo(Musician)
Musician.hasOne(Band)


module.exports = {
    Band,
    Musician
};
