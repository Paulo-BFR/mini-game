import './style.css';

function CardGame(icon = "alura-pixel", alt = 'logo alura') {
    return  /*html*/`
    <article class="card-game">
        <img src="images/${icon}.png" alt='${alt}'>
    </article>
    `;
}

export default CardGame;