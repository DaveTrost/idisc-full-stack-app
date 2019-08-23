import Component from '../Component.js';

export class Scorecard extends Component {
    renderHTML() {
        const info = this.props.scorecard;
        return /*html*/ `
            <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
                        <img src="${info.url}">
                        <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>${info.date}:</p>
                        <span class="card-title">${info.courseName}</span>
                    </div>
                </div>
            </div>
        `;
    }
}