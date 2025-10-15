import {Game} from "./game.js";
import type { GameState } from "./types.js";
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const standBtn = document.getElementById("standBtn")!;

const game = new Game();
const gameState: GameState = {
    dealerHand: [],
    playerHand: [],
    deck: game.createDeck()
}
standBtn.onclick = () => { 
    console.log("standing");
};
