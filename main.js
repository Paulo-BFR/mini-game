import './src/Styles/settings/colors.css';
import './src/Styles/generic/generic.css';
import './src/Styles/elements/base.css';
import BoardGame from "./src/objects/BoardGame";
import PlayerName from './src/components/PlayerName';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${PlayerName('Player 01')}
        ${PlayerName('Player 02')}
        ${BoardGame(6)}

        `

)
