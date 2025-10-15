import type { Card } from "./types";

const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];

export class Game {
    createDeck(): Card[] {
        const deck: Card[] = [];
        for (const suit of suits) {
            for (let j = 1; j < 14; j++) {
                deck.push({ number: j, suit });
            }
        }
        return deck;
    }

    shuffleDeck(array: Card[]) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap
            [array[currentIndex]!, array[randomIndex]!] = [array[randomIndex]!, array[currentIndex]!];
        }
    }

    sumOfHand(array: Card[]) {
        return array.reduce((acc, val) => acc + val.number, 0);
    }

    drawDealer(dealerHand: Card[], deck: Card[]) {
        while (this.sumOfHand(dealerHand) < 17) {
            dealerHand.push(deck.pop()!)
        }
    }

}



