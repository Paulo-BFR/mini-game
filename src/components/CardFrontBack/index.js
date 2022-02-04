import CardGame from "../cardGame";

function CardFrontBack() {
    return /*html*/ `
        <article class='card-front-back'>
        ${CardGame()}
        ${CardGame("javascript", 'Logo do javaScript')}
        </article>
    `
}

export default CardFrontBack;