import './style.css';
import renderPage from './modules/page.js';
import { displayScores } from './modules/pagefunctions.js';
import { saveScore } from './modules/LeaderApi.js';

window.onload = () => {
    renderPage();
    displayScores();
    const refreshBtn = document.querySelector('#refresher');
    const inputArea = document.querySelector('#input-area');

    refreshBtn.onclick = () => {
        displayScores();
    }

    inputArea.onsubmit = (e) => {
        e.preventDefault();
        const player = document.querySelector('#player-id');
        const score = document.querySelector('#score-input');
        saveScore(player, score);
        inputArea.reset();
        displayScores();
    }
}