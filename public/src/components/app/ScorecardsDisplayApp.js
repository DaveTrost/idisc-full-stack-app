import Component from '../Component.js';
import { Nav } from './Nav.js';
import { ScorecardsDisplayRow } from './ScorecardsDisplayRow.js';
import { getScorecards } from '../../services/scorecards-api.js';

//const scorecardsData = getScorecards();

export class ScorecardDisplayApp extends Component {

    onRender(dom) {
        const nav = new Nav();
        dom.prepend(nav.renderDOM());

        const scorecardsDisplayRow = new ScorecardsDisplayRow({ scorecards: [] });
        dom.appendChild(scorecardsDisplayRow.renderDOM());

        window.addEventListener('hashchange', () => this.updateScorecards(scorecardsDisplayRow));
        this.updateScorecards(scorecardsDisplayRow);
    }

    updateScorecards(scorecardsDisplayRow) {
        // const scorecardsData = getScorecards();
        // scorecardsData.then(data => {
        //     scorecardsDisplayRow.update({ scorecards: data });
        // });
        const scorecardsData = [{
            url: 'assets/scorecards/IMG-2950.JPG',
            courseName: 'Milo McIver (West)',
            date: 'June 10 2018',
            score: 73,
            scoreToPar: 12,
            isRatedRound: false,
        }];
        scorecardsDisplayRow.update({ scorecards: scorecardsData });
    }

    renderHTML() {
        return /*html*/ `
            <main class="container"></main>
        `;
    }
}