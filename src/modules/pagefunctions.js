import { retrieveScore } from "./LeaderApi";

const user = document.querySelector('#player-id');
const score = document.querySelector('#score-input');
const scoreCard = document.querySelector('.scores-display');

export const newSave = () => {
    const playerData = {player: user.value, score: score.value};
    return playerData;
}

export const display = async () => {
    const sought = await retrieveScore();
    const scoresData = sought.result.sort((a, b) => a.score - b.score);
    let cardData = '';
    scoresData.array.forEach(entry => {
        cardData += `
        <div>
        <span>${entry.player}</span>
        <span>${entry.score}</span>
        </div>
        `
    });
    scoreCard.innerHTML = cardData;
}