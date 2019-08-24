import Component from '../Component.js';
import { Nav } from './Nav.js';

export class App extends Component {

    onRender(dom) {
        const nav = new Nav();
        dom.prepend(nav.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <main>
                <img class="responsive-img cover-img" src="assets/cover.jpg" alt="image of a person on a disc golf course">
                <section class="container">
                    <h3 class="orange-text">Deep Insights Into Your Game</h3>
                    <ul>
                        <li class="flow-text idisc-bulleted">Sort and filter your rounds and display the data</li>
                        <li class="flow-text idisc-bulleted">Graphically visualize your stats across time, courses, holes, tournaments, locations, and more.</li>
                        <li class="flow-text idisc-bulleted">Evaluate putting, driving, greens in regulation, scrambling and penalties.</li>
                        <li class="flow-text idisc-bulleted">Analyze to find patterns and target your practice time.</li>
                    </ul>
                </section>
            </main>
        `;
    }
}