import CardGame from "../../components/cardGame";

function BoardGame(amountCard) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCard)

    return $htmlBoardGame;
}

export default BoardGame;