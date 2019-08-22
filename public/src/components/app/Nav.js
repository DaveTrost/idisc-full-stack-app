import Component from '../Component.js';

export class Nav extends Component {

    renderHTML() {
        return /*html*/ `
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo idisc-logo">IDisc</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="scorecards-display.html">Scorecards</a></li>
                        <li><a href="scorecard-add.html">Add A Scorecard</a></li>
                    </ul>
                </div>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="/">Home</a></li>
                    <li><a href="scorecards-display.html">Scorecards</a></li>
                    <li><a href="scorecard-add.html">Add A Scorecard</a></li>
                </ul>
            </nav>
        `;
    }
}