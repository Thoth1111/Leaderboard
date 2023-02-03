const content = document.getElementById('content');

const page = `
<main>
    <section class="display-pane">        
        <div class="top-display">
                <h2>Recent Scores</h2>
                <button type="button" id="refresher">Refresh</button>
        </div>
        <div class="scores-display"></div>
    </section>
    <section class="score-form">
        <h2>Add your score</h2>
        <form id="input-area">
            <input type="text" id="player-id" required placeholder="Your name"/>
            <input type="number" id="score-input" required placeholder="Your score"/>
            <button type="submit">Submit</button>
        </form>
    </section>
</main>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', page);
};

export default renderPage;