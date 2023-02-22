const cardArray = [
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },{
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
let cardChosen = []
let cardChosenIds = []
let cardsWon = []
const resultDisplay = document.querySelector('#result');
function createBoard(){
    for(let i = 0; i <cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card)
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    if(cardChosenIds[0] == cardChosenIds[1]){
        alert("you choose the same card")
    }
    if(cardChosen[0] == cardChosen[1]){
        alert('you found a match!');
        cards[cardChosenIds[0]].setAttribute('src','images/white.png')
        cards[cardChosenIds[1]].setAttribute('src','images/white.png')
        cards[cardChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }else{
        cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
        alert('sorry try again')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardChosen = []
    cardChosenIds = []
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "you have found all the match"
    }

}

function flipCard(){
    const cardId  = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}