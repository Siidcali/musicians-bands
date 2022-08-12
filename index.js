const {Band} = require('./Band')
const {Musician} = require('./Musician')
const { Song } = require('./song')



Band.belongsTo(Musician,{as:"Musician"})
Musician.hasMany(Band,{foreignKey:"title1"})



Song.belongsToMany(Band,{through:'title'})
Band.belongsToMany(Song,{through:'title'})

module.exports = {
    Band,
    Musician,
    Song
};
