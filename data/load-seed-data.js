require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);

const scorecardData = require('./scorecards.js');
const coursesData = require('./courses.js');

client.connect()
    .then(() => {
        return Promise.all(
            coursesData.map(course => {
                return client.query(`
                    INSERT INTO courses (course_name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [course]
                )
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(courses => {
        return Promise.all(
            scorecardData.map(scorecard => {
                const courseId = courses.find(course => course.course_name === scorecard.courseName).id;
                return client.query(`
                    INSERT INTO scorecards (url, course_id, date, score, score_to_par, is_rated_round)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING *;
                `,
                [scorecard.url, courseId, scorecard.date, scorecard.score, scorecard.scoreToPar, scorecard.isRatedRound]
                );
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

