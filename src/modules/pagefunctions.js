import { retrieveScore } from "./LeaderApi";
export const scoreCard = document.querySelector('.scores-display');

export const displayScores = async () => {
    // scoreCard.innerHTML = '';
    const sought = await retrieveScore();
    const scoresData = sought.result.sort((a, b) => a.score - b.score);
    let cardData = '';
    scoresData.forEach(entry => {
        cardData += `
        <div>
        <span>${entry.user}</span>
        <span>${entry.score}</span>
        </div>
        `
    });
    scoreCard.innerHTML = cardData;
}