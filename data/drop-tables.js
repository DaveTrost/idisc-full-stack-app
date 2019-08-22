require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
// note: you will need to create the database

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS scorecards;
    `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });