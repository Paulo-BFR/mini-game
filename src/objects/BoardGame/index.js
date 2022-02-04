import './style.css'
import CardGame from "../../components/cardGame";
import CardFrontBack from '../../components/CardFrontBack';


function BoardGame(amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)

    return /*html*/ `
    <section class="board-game">
       ${$htmlContent}
    </section>
    `;
}

export default BoardGame;