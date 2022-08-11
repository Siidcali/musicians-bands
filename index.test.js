const {db} = require('./db');
const {Band, Musician} = require('./index')

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
        band1=await Band.create({
            name:'Beatles',
            genre:'rock'
        })
        expect(band1.name).toEqual('Beatles');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
       music1= await Musician.create({
            name:'john',
            instruments:'flute'
        })
        expect(music1.name).toEqual('john');
    })
})