import { ScorecardDisplayApp } from './components/app/ScorecardsDisplayApp.js';

const app = new ScorecardDisplayApp();
document.body.prepend(app.renderDOM());

document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(elems);
});