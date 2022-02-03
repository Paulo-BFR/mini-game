import './src/Styles/settings/colors.css';
import './src/Styles/generic/generic.css';
import './src/Styles/elements/base.css';
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from './src/objects/ScoreBoard';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${ScoreBoard()}
        ${BoardGame(6)}

        `

)
