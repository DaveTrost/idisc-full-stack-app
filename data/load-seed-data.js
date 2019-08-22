require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
const scorecards = require('./scorecards');
// note: you will need to create the database!

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            scorecards.map(scorecard => {
                return client.query(`
                    INSERT INTO scorecards (url, course_name, date, score, score_to_par, is_rated_round)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [scorecard.url, scorecard.courseName, scorecard.date, scorecard.score, scorecard.scoreToPar, scorecard.isRatedRound]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });