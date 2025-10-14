import type { Card } from "./types";

const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];

function createDeck(): Card[] {
    const deck: Card[] = [];
    for (const suit of suits) {
        for (let j = 1; j < 14; j++) {
            deck.push({ number: j, suit });
        }
    }
    return deck;
}

function shuffleDeck(array: Card[]) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // Swap
        [array[currentIndex]!, array[randomIndex]!] = [array[randomIndex]!, array[currentIndex]!];
    }
}

function sumOfHand(array: Card[]) {
    return array.reduce((acc, val) => acc + val.number, 0);
}

export function drawDealer() {
    while (sumOfHand(dealerHand) < 17) {
        dealerHand.push(deck.pop()!)
    }
}
let deck = createDeck();
shuffleDeck(deck);

// Deal two cards to player and dealer
export const playerHand: Card[] = [deck.pop()!, deck.pop()!];
export const dealerHand: Card[] = [deck.pop()!, deck.pop()!];



