import './style.css';
// import renderPage from './modules/page.js';
import { displayScores } from './modules/pagefunctions.js';
import { saveScore } from './modules/LeaderApi.js';

// renderPage();
const refreshBtn = document.querySelector('#refresher');
const inputArea = document.querySelector('#input-area');

window.onload = () => displayScores();

refreshBtn.onclick = () => {
    displayScores();
}

inputArea.onsubmit = (e) => {
    e.preventDefault();
    saveScore();
    inputArea.reset();
}