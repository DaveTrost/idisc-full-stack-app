require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS scorecards;
        `);
    })
    .then(
        () => console.log('drop table complete'),
        err => console.log(err)
    )
    .then(
        () => client.end()
    );

