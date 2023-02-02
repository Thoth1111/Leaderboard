import './style.css';
import renderPage from './modules/page.js';
import { scoreCard, displayScores } from './modules/pagefunctions.js';
import { saveScore } from './modules/LeaderApi';

renderPage();
const refreshBtn = document.querySelector('#refresher');
const inputArea = document.querySelector('#input-area');

refreshBtn.onclick = () => {
    scoreCard.innerHTML = '';
    displayScores();
}

inputArea.onsubmit = (e) => {
    e.preventdefault();
    saveScore();
}

