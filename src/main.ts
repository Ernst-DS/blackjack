import {dealerHand, playerHand, drawDealer} from "./game.js";
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const standBtn = document.getElementById("standBtn")!;
standBtn.onclick = () => { 
    console.log(dealerHand);
    drawDealer();
    console.log(dealerHand);
    
};
