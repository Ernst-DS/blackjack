import { Card, Winner } from "./types.js";

const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export class Game {

    deck: Card[];
    playerHand: Card[];
    dealerHand: Card[];
    winner: Winner | null;
    constructor() {
        this.deck = this.shuffleDeck(this.createDeck());
        this.playerHand = [this.deck.pop()!, this.deck.pop()!];
        this.dealerHand = [this.deck.pop()!, this.deck.pop()!];
        this.winner = null;
    }

    createDeck(): Card[] {
        const deck: Card[] = [];
        for (const suit of suits) {
            for (let j = 1; j < 14; j++) {
                deck.push({ number: j, suit });
            }
        }
        return deck;
    }

    shuffleDeck(array: Card[]): Card[] {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap
            [array[currentIndex]!, array[randomIndex]!] = [array[randomIndex]!, array[currentIndex]!];
        }
        return array;
    }

    sumOfHand(array: Card[]): number {
        return array.reduce((acc, val) => acc + val.number, 0);
    }

    drawDealer() {
        while (this.sumOfHand(this.dealerHand) < 17) {
            this.dealerHand.push(this.deck.pop()!);
        }
    }

    hitPlayer() {
        this.playerHand.push(this.deck.pop()!);
    }

    checkWinner() {
        const playerSum = this.sumOfHand(this.playerHand);
        const dealerSum = this.sumOfHand(this.dealerHand);

        const rules: Array<[() => boolean, Winner]> = [
            // busts
            [() => playerSum > 21, Winner.DEALER],
            [() => dealerSum > 21, Winner.PLAYER],
            // blackjacks
            [() => playerSum === 21 && this.playerHand.length === 2, Winner.PLAYER],
            [() => dealerSum === 21 && this.dealerHand.length === 2, Winner.DEALER],
            // both finished: compare
            [() => playerSum >= 17 && dealerSum >= 17 && playerSum > dealerSum, Winner.PLAYER],
            [() => playerSum >= 17 && dealerSum >= 17 && dealerSum > playerSum, Winner.DEALER],
            [() => playerSum >= 17 && dealerSum >= 17 && playerSum === dealerSum, Winner.PUSH],
        ];

        const match = rules.find(([pred]) => pred());
        this.winner = match ? match[1] : null;

        if (this.winner != null) {
            alert(this.winner.toString());
        }
    }
}



