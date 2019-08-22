import { scorecards } from ''./scorecards.js';

const URL = '/api';

export function getScorecards() {  

    return scorecards;

    const url = `${URL}/scorecards`;
    return fetch(url)
        .then(response => response.json());
}
