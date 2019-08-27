require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE IF NOT EXISTS courses (
                id SERIAL PRIMARY KEY NOT NULL,
                course_name VARCHAR(256) NOT NULL
            );
            CREATE TABLE IF NOT EXISTS scorecards (
                id SERIAL PRIMARY KEY NOT NULL,
                url VARCHAR(256) NOT NULL,
                course_id INTEGER NOT NULL REFERENCES courses(id),
                date VARCHAR(256) NOT NULL,
                score INTEGER NOT NULL,
                score_to_par INTEGER NOT NULL,
                is_rated_round BOOLEAN NOT NULL
            );
        `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(
        () => client.end()
    );

