let A = 1 
let J = 11
let Q = 12
let K = 13
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]

class Deck{
    constructor(cards = newDeck()){
        this.cards = cards
    }
    get numberOfCards() {
        return this.cards.length
    }
    pop(){
        return this.cards.shift()
    }
    push(Card){
        this.cards.push(Card)
    }

    
    shuffle(){
        for(let i = this.numberOfCards - 1; i >  0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}
function newDeck(){
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit,value)
        })
    })
}

let playerOneDeck, playerTwoDeck, gameOver
startGame()
function startGame(){
    
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerOneDeck = new Deck (deck.cards.slice(0, deckMidpoint))
    playerTwoDeck = new Deck (deck.cards.slice(deckMidpoint, deck.numberOfCards))
   console.log(playerOneDeck, playerTwoDeck)
flipCards(playerOneDeck, playerTwoDeck)
  

}
    
    
    function checkWinner(playerOneCard, playerTwoCard){   
    console.log(playerOneDeck, playerTwoDeck)
  if (playerOneCard.value > playerTwoCard.value){
    console.log("Player One Wins")
    playerOneDeck.push(playerOneCard)
    playerOneDeck.push(playerTwoCard)
    
   
  }  else if (playerTwoCard.value > playerOneCard.value){
    console.log("Player Two Wins")
    playerTwoDeck.push(playerOneCard)
    playerTwoDeck.push(playerTwoCard)
    
    
  }else if (playerOneCard.value === playerTwoCard.value){
    console.log("Draw")
    playerOneDeck.push(playerOneCard)
    playerTwoDeck.push(playerTwoCard)
    } 

    if (isGameOver(playerOneDeck, playerTwoDeck)){
        console.log( "Game over")
    }
    updateDeckCount(playerOneDeck, playerTwoDeck)
}





function flipCards(playerOneDeck, playerTwoDeck){
const playerOneCard = playerOneDeck.pop()
const playerTwoCard = playerTwoDeck.pop()
console.log(playerOneCard, playerTwoCard)
checkWinner(playerOneCard, playerTwoCard) }

function updateDeckCount(playerOneDeck, playerTwoDeck){
    playerOneDeck = playerOneDeck.numberOfCards
    playerTwoDeck = playerTwoDeck.numberOfCards
    flipCards(playerOneDeck, playerTwoDeck)
}

function isGameOver(playerOneDeck, playerTwoDeck){
    return playerOneDeck.numberOfCards || playerTwoDeck.numberOfCards === 0
}


