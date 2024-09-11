import { root } from "./elements.js";
import { currentUser } from "../controller/firebase_auth.js";
import { protectedView } from "./protected_view.js";
import { onClickBoardButton, onClickNewGame } from "../controller/home_controller.js";
import { TicTacToeGame } from "../model/tictactoe_game.js";

export let game = new TicTacToeGame();

export async function homePageView() {
     if(!currentUser) {
          root.innerHTML = await protectedView();
          return;
     }
     const response = await fetch('/view/templates/home_page_template.html',
          {cache: 'no-store'});
     const divWrapper = document.createElement('div');
     divWrapper.innerHTML = await response.text();
     divWrapper.classList.add('m-4', 'p-4');
     
     const buttons = divWrapper.querySelectorAll('table button');
     buttons.forEach(b => b.onclick = onClickBoardButton);
     const newGameButton = divWrapper.querySelector('#button-new-game');
     newGameButton.onclick = onClickNewGame;

     root.innerHTML = '';
     root.appendChild(divWrapper);
}