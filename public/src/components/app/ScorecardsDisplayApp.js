import Component from '../Component.js';
import { Nav } from './Nav.js';

export class ScorecardDisplayApp extends Component {

    onRender(dom) {
        const nav = new Nav();
        dom.prepend(nav.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <main class="container">
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="assets/scorecards/IMG-2950.JPG">
                                <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>June 10 2018:</p>
                                <span class="card-title">Milo McIver (West)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="assets/scorecards/IMG-2950.JPG">
                                <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>June 10 2018:</p>
                                <span class="card-title">Milo McIver (West)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }
}