// import App from './components/app/App.js';

// const app = new App();
// document.body.prepend(app.renderDOM());

document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});