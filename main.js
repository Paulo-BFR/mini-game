import CardGame from "./src/components/cardGame";
import './src/Styles/settings/colors.css';
import './src/Styles/generic/generic.css';
import './src/Styles/elements/base.css';


const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
