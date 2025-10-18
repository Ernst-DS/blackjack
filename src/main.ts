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
};
hitBtn.onclick = () => {
    game.hitPlayer();
    console.log(game.playerHand);
    if (game.sumOfHand(game.playerHand) > 21) {
        alert("you lose!");
    }
}