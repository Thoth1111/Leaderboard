const content = document.getElementById('content');

const page = `<section class="page-content">        
    <div>
        <h2>Recent Scores</h2>
        <button type="button" id="refresher">Refresh</button>
        <div class="scores-display"></div>
    </div>
    <div class="score-form">
        <h2>Add your score</h2>
        <form id="input-area">
        <input type="text" id="player-id" required placeholder="Your name"/>
        <input type="number" id="score-input" required placeholder="Your score"/>
        <button type="submit">Submit</button>
        </form>
    </div>
</section>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', page);
};

// export default renderPage;