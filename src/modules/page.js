const content = document.getElementById('content');

const page = `<section class="column">        
    <div>
        <h2>Recent Scores</h2>
        <button type="button" id="refresher">Refresh</button>
        <div class="scores-display"></div>
    </div>
    <div class="score-form">
        <h2>Add your score</h2>
        <form id="input-area" action="post">
        <input type="text" required placeholder="Your name"/>
        <input type="number" required placeholder="Your score"/>
        <button type="submit">Submit</button>
        </form>
    </div>
</section>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', page);
};

export default renderPage;