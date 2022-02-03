import './src/Styles/settings/colors.css';
import './src/Styles/generic/generic.css';
import './src/Styles/elements/base.css';
import BoardGame from "./src/objects/BoardGame";


const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame();

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
