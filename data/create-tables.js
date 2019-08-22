require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
// note: you will need to create the database

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE scorecards (
                id SERIAL PRIMARY KEY NOT NULL,
                url VARCHAR(256) NOT NULL,
                course_name VARCHAR(256) NOT NULL,
                date VARCHAR(256) NOT NULL,
                score INTEGER NOT NULL,
                score_to_par INTEGER NOT NULL,
                is_rated_round BOOLEAN NOT NULL,
            );
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });