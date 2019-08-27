const URL = '/api';

export function getScorecards() {
    const url = `${URL}/scorecards`;
    return fetch(url)
        .then(response => response.json());
}
