import {Game} from "./game.js";
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const standBtn = document.getElementById("standBtn")!;
const hitBtn = document.getElementById("hitBtn")!;

const game = new Game();
console.log(game.playerHand);
console.log(game.dealerHand);
standBtn.onclick = () => {    
    game.drawDealer();
    game.checkWinner();
};

hitBtn.onclick = () => {
    game.hitPlayer();
    game.checkWinner();
}

standBtn.onclick = () => {
    game.drawDealer();
    game.checkWinner();
}