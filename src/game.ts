import type { Card } from "./types";

const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export class Game {

    deck: Card[];
    playerHand: Card[];
    dealerHand: Card[];
    constructor() {
        this.deck = this.shuffleDeck(this.createDeck());
        this.playerHand = [this.deck.pop()!, this.deck.pop()!];
        this.dealerHand = [this.deck.pop()!, this.deck.pop()!];

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

    sumOfHand(array: Card[]) {
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
}



