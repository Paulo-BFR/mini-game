import PlayerName from "../../components/PlayerName";
import './style.css';

function ScoreBoard() {
    return /*html*/`
    <header class='score-board'>
    ${PlayerName('Player 01')}
    ${PlayerName('Player 02')}
    </header>
    `;
}

export default ScoreBoard;