import type { Card } from "./types"

const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades']
let deck: Card[] = []
let playerHand: Card[] = []
let dealerHand: Card[] = []
//populate deck
for (const suit of suits) {
    for (let j = 1; j < 14; j++) {
        const card: Card = { number: j, suit: suit }
        deck.push(card)
    }
}
shuffleDeck(deck);
playerHand = [deck.pop() as Card, deck.pop() as Card]
console.log(playerHand);

function shuffleDeck(array: Card[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        if (
            array[randomIndex] !== undefined &&
            array[currentIndex] !== undefined
            
        ) {
            const tmp: Card = array[randomIndex];
            array[randomIndex] = array[currentIndex] as Card;
            array[currentIndex] = tmp;
        }
    }
}

