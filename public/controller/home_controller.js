import { GameState } from "../model/tictactoe_game.js";
import { game } from "../view/home_page.js";

export function onClickBoardButton(e) {
    console.log(e.target.value);
    console.log(e.currentTarget.value);
}

export function onClickNewGame(e) {
    console.log(e.target.id);
    game.reset();
    game.gameState = GameState.PLAYING;
}