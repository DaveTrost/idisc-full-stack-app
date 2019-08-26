require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.get('/api/scorecards', (req, res) => {
    client.query(`
        SELECT
            url, 
            course_name as "courseName", 
            date, 
            score, 
            score_to_par as "scoreToPar", 
            is_rated_round as "isRatedRound"
        FROM scorecards;
    `)
        .then(databaseResponse => res.status(200).json(databaseResponse.rows))
        .catch(err => res.status(500).json({ error: err.message || err }))
    ;
});

app.post('/api/scorecards', (req, res) => {
    client.query(`
        INSERT
        INTO scorecards(url, course_name, date, score, score_to_par, is_rated_round)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,
    [req.body.url, req.body.course, req.body.date, req.body.score, req.body.toPar, req.body.isRated]
    )
        .then(databaseResponse => res.status(200).json(databaseResponse.rows[0]))
        .catch(err => res.status(500).json({ error: err.message || err }))
    ;
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
