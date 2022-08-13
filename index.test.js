const { db } = require('./db');
const {Band, Musician, Song} = require('./index');

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        band1 = await Band.create({
            name:'Beatles',
            genre:'rock'
        })
        expect(band1.name).toEqual('Beatles');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
       music1 = await Musician.create({
            name:'john',
            instruments:'flute'
        })
        expect(music1.name).toEqual('john');
    })


    test('can have musicians in a band', async () => {
       music1 = await Musician.create({
            name:'john',
            instruments:'flute'
        })
        music2 = await Musician.create({
            name:'bob',
            instruments:'drum'
        })
        band1 = await Band.create({
            name:'Beatles',
            genre:'rock'
        })
        band1.addMusician(music1)

        const owners = await band1.getMusicians({where: { name:'john' }})
        const john = owners[0]
        expect(john.name).toEqual('john');
    })

    test('can have songs attached to bands', async () => {
       const song1 = await Song.create({
             title:'s1',
             year:2001
        })
     
        const band1 = await Band.create({
             name:'Beatles',
             genre:'rock'
         })
        await band1.addSong(song1)


        /**
         * With .getSongs(), the method will return an Array
         * even if there is only one. This is so that, if you don't know
         * how many songs there are, at least you always know you're getting
         * an array!
         * 
         * test1 === [song1, song2]
         * 
         * does it makes sense that test1.title is not defined!
         */
         
         const test1 = await band1.getSongs()
         expect(test1[0].title).toEqual('s1');
     })
})