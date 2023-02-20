const cardArray = [
    {
        name:'cheesburger',
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

function flipCard(){
    const cardId  = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    console.log('test');
}