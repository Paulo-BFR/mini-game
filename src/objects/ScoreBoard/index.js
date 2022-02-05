import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import './style.css';

function ScoreBoard() {
    return /*html*/`
    <header class='score-board'>
    ${PlayerName('Player 01')}
    ${PlayerScore(2)}
    ${VsPlayer()}
    ${PlayerScore(3)}
    ${PlayerName('Player 02')}
    </header>
    `;
}

export default ScoreBoard;