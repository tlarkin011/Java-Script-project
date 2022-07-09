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
    push(card){
        this.cards.push(card)
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

let playerOneDeck, playerTwoDeck

startGame()
function startGame(){
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerOneDeck = new Deck (deck.cards.slice(0, deckMidpoint))
    playerTwoDeck = new Deck (deck.cards.slice(deckMidpoint, deck.numberOfCards))
   

    flipCards()
}

    

function flipCards(){
    
    const playerOneCard = playerOneDeck.pop()
    const playerTwoCard = playerTwoDeck.pop()


    

  if (playerOneCard.value > playerTwoCard.value){
    console.log("Player One Wins")
    playerOneDeck.push(playerOneCard)
    playerOneDeck.push(playerTwoCard)
  }  else if (playerTwoCard.value > playerTwoCard.value){
    console.log("Player Two Wins")
    playerTwoDeck.push(playerOneCard)
    playerTwoDeck.push(playerTwoCard)
  }else if (playerOneCard.value === playerTwoCard.value){
    console.log("Draw")
    playerOneDeck.push(playerOneCard)
    playerTwoDeck.push(playerTwoCard)
  } 
  
  if (playerOneDeck === 0 || playerTwoDeck === 0){
    return "Game over"}
    else { console.log(playerOneDeck, playerTwoDeck)
        startGame()
    }

    


  
}



// function isRoundWinner(cardOne, cardTwo){
//     return cardOne.value > cardTwo.value
// }
// function isGameOver(playerOneDeck, playerTwoDeck){
//     if( playerOneDeck.numberOfCards === 0 || playerTwoDeck === 52){
//     return console.log("Player One Sucks")}
//     else if (playerTwoDeck === 0 || playerOneDeck === 52){
//         return console.log("Player Two Sucks")
//     }

// }





