const content = document.getElementById('content');

const head = '<h1>Leaderboard</h1>';

const page = `<section class="column">        
    <div>
        <h2>Recent Scores</h2>
        <button type="button">Refresh</button>
        <div class="scores-display"></div>
    </div>
    <div class="score-form">
        <h2>Add your score</h2>
        <input type="text" required placeholder="Your name"/>
        <input type="number" required placeholder="Your score"/>
        <button type="submit">Submit</button>
    </div>
</section>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', head);
  content.insertAdjacentHTML('beforeend', page);
};

export default renderPage;