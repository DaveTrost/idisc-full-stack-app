import { ScorecardAddApp } from './components/app/ScorecardAddApp.js';

const app = new ScorecardAddApp();
document.body.prepend(app.renderDOM());

document.addEventListener('DOMContentLoaded', function() {
    const sideNav = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(sideNav);

    const popupBox = document.querySelectorAll('.materialboxed');
    // eslint-disable-next-line no-undef
    M.Materialbox.init(popupBox);
    
    var dropdown = document.querySelectorAll('select');
    // eslint-disable-next-line no-undef
    M.FormSelect.init(dropdown);    
    
    var dateSelector = document.querySelectorAll('.datepicker');
    // eslint-disable-next-line no-undef
    M.Datepicker.init(dateSelector);
});