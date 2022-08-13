const { Band } = require('./Band')
const { Musician } = require('./Musician')
const { Song } = require('./song')


Band.hasMany(Musician )
Musician.belongsTo(Band)


Song.belongsToMany(Band, { through:'Band_Song' })
Band.belongsToMany(Song, { through:'Band_Song' })

module.exports = {
    Band,
    Musician,
    Song
};
