const cardArray = [
    {
        name: 'kabab',
        img: 'images/kabab.png',
    },
    {
        name: 'chicken',
        img: 'images/chick.png',
    },
    {
        name: 'ludus',
        img: 'images/ludus.png',
    },
    {
        name: 'rice',
        img: 'images/rice.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'steak',
        img: 'images/steak.png',
    },
    {
        name: 'kabab',
        img: 'images/kabab.png',
    },
    {
        name: 'chicken',
        img: 'images/chick.png',
    },
    {
        name: 'ludus',
        img: 'images/ludus.png',
    },
    {
        name: 'rice',
        img: 'images/rice.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'steak',
        img: 'images/steak.png',
    }
]

// console.log(cardArray)

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardWon = []


function createBoard() {
    for( let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click' , flipCard)
        gridDisplay.appendChild(card);

    }
}

createBoard()

function checkMatch() {
  const cards =  document.querySelectorAll('#grid img')
  console.log(cards)
    console.log('check for match')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if ( optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src' , 'images/blank.png')
        cards[optionTwoId].setAttribute('src' , 'images/blank.png')
        alert ( " you have clicked the same image")

    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert ('you found a match')
        cards[optionOneId].setAttribute('src' , 'images/white.png')
        cards[optionTwoId].setAttribute('src' , 'images/white.png')
        cards[optionOneId].removeEventListener('click' , flipCard)
        cards[optionTwoId].removeEventListener('click' , flipCard)
        cardWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src' , 'images/white.png')
        cards[optionTwoId].setAttribute('src' , 'images/white.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardWon.length
  cardsChosen = []
  cardsChosenIds = []


  if(cardWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'congraaatulations you have found them all!'
  } 
}

function flipCard() {
    
    // console.log(cardArray)
    let cardId =  this.getAttribute('data-id')
    
    cardsChosen.push(cardArray[cardId].name)

    // console.log('clicked' ,cardId)
    // console.log(cardsChosen)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src' , cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch , 500)
    }
}