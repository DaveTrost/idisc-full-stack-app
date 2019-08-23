require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);

const scorecardData = require('./scorecards.js');

client.connect()
    .then(() => {
        return Promise.all(
            scorecardData.map(scorecard => {
                return client.query(`
                    INSERT INTO scorecards (url, course_name, date, score, score_to_par, is_rated_round)
                    VALUES ('${scorecard.url}', '${scorecard.courseName}', '${scorecard.date}', ${scorecard.score}, ${scorecard.scoreToPar}, ${scorecard.isRatedRound});
                `);
            })
        );
    })
    .then(
        () => console.log('load seed data complete'),
        err => console.log(err)
    )
    .then(
        () => client.end()
    );

