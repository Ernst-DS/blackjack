export class Card {
    suit: String;
    number: number;
    
    constructor(suit: String, number: number) {
        this.suit = suit;
        this.number = number > 10 ? 10 : number;
    }
}

export enum Winner {
    PLAYER,
    PUSH,
    DEALER
}