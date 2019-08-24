import Component from '../Component.js';
import { Scorecard } from './Scorecard.js';

export class ScorecardsDisplayRow extends Component {

    onRender(dom) {
        this.props.scorecards.forEach(scorecardData => {
            const scorecard = new Scorecard({ scorecard: scorecardData });
            dom.appendChild(scorecard.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/ `
            <div class="container row scorecards-container"></div>
        `;
    }
    
}