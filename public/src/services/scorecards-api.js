const URL = 'http://localhost:3000/api';

export function getScorecards() {
    const url = `${URL}/scorecards`;
    return fetch(url)
        .then(response => response.json());
}
