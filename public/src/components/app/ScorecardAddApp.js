import Component from '../Component.js';
import { Nav } from './Nav.js';



export class ScorecardAddApp extends Component {

    onRender(dom) {
        const nav = new Nav();
        dom.prepend(nav.renderDOM());

        const form = dom.querySelector('#add-edit-delete-form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const scorecardObj = {
                url: formData.get('scorecard-url'),
                course: formData.get('course-selection'),
                date: formData.get('date'),
                score: formData.get('total-score'),
                toPar: formData.get('score-to-par'),
                isRated: formData.get('rated-round') === 'on',
            };
            addScorecard(scorecardObj);

        });

        function addScorecard(scorecardObj) {
            console.log(JSON.stringify(scorecardObj));
            const postObj = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(scorecardObj),
            };
            fetch('/api/scorecards', postObj)
                .then(response => response.json())
                .then(response => console.log(`scorecard accepted: (${response})`))
                .catch(err => console.log(`scorecard not saved :(${err})`))
            ;
        }

    }

    renderHTML() {
        return /*html*/ `
            <main class="container">
                <h4 class="blue-text">Add Scorecard</h4>
                <hr>
                <form id="add-edit-delete-form" action="#">
                    <div class="row">
                        <div class="col s8 m6 l4">
                            <img class="materialboxed hide" width="100%" src="https://i.imgur.com/ORu25VI.jpg">
                        </div>
                        <div class="input-field col s12">
                            <input id="scorecard-url" type="url" name="scorecard-url" class="validate" required>
                            <label for="scorecard-url">Scorecard Image URL</label>
                            <a class="waves-effect waves-light btn grey hide"><i class="material-icons left">image</i>Test Image</a>
                        </div>
                        <div class="input-field col s12 m6 l4">
                            <select class="validate" name="course-selection" required>
                                <option value="" disabled selected>Course Played</option>
                                <option value="Blue Lake">Blue Lake</option>
                                <option value="Hornings Hideout">Hornings Hideout</option>
                                <option value="Milo McIver (West)">Milo McIver (West)</option>
                                <option value="Milo McIver (East)">Milo McIver (East)</option>
                            </select>
                            <label>Course</label>
                        </div>
                        <div class="input-field col s12 m6 l4">
                            <input type="text" class="datepicker" name="date" required>
                            <label>Date Played</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l4">
                            <input id="total-score" type="number" class="validate" name="total-score" value="" min="0" max="999" required>
                            <label for="total-score">Total Score</label>
                        </div>
                        <div class="input-field col s12 m6 l4">
                            <input id="score-to-par" type="number" class="validate" name="score-to-par" value="" min="-999" max="999" required>
                            <label for="score-to-par">Score Relative To Par</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="switch">
                            <label>
                                Casual Round
                                <input type="checkbox" name="rated-round"><span class="lever"></span>
                                Rated Round
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <button class="btn waves-effect waves-light blue hide" type="submit" name="edit">Edit Scorecard
                            <i class="material-icons right">edit</i>
                        </button>
                        <button class="btn waves-effect waves-light orange" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                        <button class="btn waves-effect waves-light red hide" type="submit" name="delete">Delete Scorecard
                            <i class="material-icons right">delete</i>
                        </button>
                    </div>
                </form>
            </main>
        `;
    }
}