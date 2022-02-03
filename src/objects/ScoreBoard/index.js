import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
    return /*html*/`
    <header class='score-board'>
    ${PlayerName('Player 01')}
    ${PlayerName('Player 02')}
    </header>
    `;
}

export default ScoreBoard;