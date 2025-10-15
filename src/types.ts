export interface Card {
    number: number
    suit: string
}

export interface GameState {
    playerHand: Card[],
    dealerHand: Card[],
    deck: Card[]
}