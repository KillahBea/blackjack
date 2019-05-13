let dealerHand = []
let playerHand = []

const suit = ['H', 'D', 'S', 'C']
const card = [
  { face: 'ace', value: 11 },
  { face: '2', value: 2 },
  { face: '3', value: 3 },
  { face: '4', value: 4 },
  { face: '5', value: 5 },
  { face: '6', value: 6 },
  { face: '7', value: 7 },
  { face: '8', value: 8 },
  { face: '9', value: 9 },
  { face: '10', value: 10 },
  { face: 'jack', value: 10 },
  { face: 'queen', value: 10 },
  { face: 'king', value: 10 }
]
const deck = []
// let shuffledDeck []

let createCards = () => {
  for (let y = 0; y < card.length; y++) {
    const newFace = card[y]
    for (let x = 0; x < suit.length; x++) {
      const newSuit = suit[x]
      const cards = {
        suit: newSuit,
        value: card.value,
        face: newFace
      }
      deck.push(cards)
    }
  }
  console.log(deck)
}
const main = () => {
  createCards()
}
const shuffleCards = () => {
  for (let x = deck.length - 1; x >= 0; x--) {
    const randomIndex = Math.floor(Math.random() * card.length)

    const currentCard = deck[x]
    const cardToSwap = deck[randomIndex]
    deck[x] = cardToSwap
    deck[randomIndex] = currentCard
  }
  // console.log(deck)
}
let playerScore = 0
// deal to the player
cont dealToPlayer = () => {
  let card = deck.pop()
  playerHand.push(card)
  document.querySelector('.card-image1').appendChild(image)
}


// deal to the dealer
let dealerScore = 0 

// document.createElement(image).classList.add('card-image')
// .addClassList interpolate the image `./images/${card}`
// cardsValues = []
document.getElementsByClassName('card-image1').textContent = ''
// document.getElementById('player-hit').addEventListener('click', dealCard)

const renderShuffledCards = () => {
  for (let x = deck.length - 1; x >= 0; x--) {}
}
document.addEventListener
document.addEventListener('DOMContentLoaded', main)
