import Component from '../Component.js';
import { Nav } from './Nav.js';

export class ScorecardAddApp extends Component {

    onRender(dom) {
        const nav = new Nav();
        dom.prepend(nav.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <main class="container">
            </main>
        `;
    }
}