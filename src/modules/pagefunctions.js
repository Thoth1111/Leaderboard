import { retrieveScore } from './LeaderApi.js';

const displayScores = async () => {
  const scoreCard = document.querySelector('.scores-display');
  const sought = await retrieveScore();
  const scoresData = sought.result.sort((a, b) => a.score - b.score);
  let cardData = '';
  scoresData.forEach((entry) => {
    cardData += `
        <div>
        <span>${entry.user}</span>
        <span>${entry.score}</span>
        </div>
        `;
  });
  scoreCard.innerHTML = cardData;
};

export default displayScores;
