import Component from '../Component.js';
import { Scorecard } from './Scorecard.js';

export class ScorecardsDisplayRow extends Component {

    onRender(dom) {
        this.props.scorecards.forEach(scorecardData => {
            const scorecard = new Scorecard({ props: scorecardData });
            dom.appendChild(scorecard.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/ `
            <div class="row"></div>
        `;
    }
}