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

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
