const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')


interface Card {
    number: number
    suit: string
}

const suits = ['hearts', 'diamonds', 'clubs', 'spades']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let deck: Card[] = []
let playerHand: Card[] = []

