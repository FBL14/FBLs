const cardColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll('div');
cards = [...cards];

const startTime = new Date().getTime();

let activeCard ='';
const activeCards = [];

const gamePairs = cards.length/2;
let gameResault = 0;





const clickCard = function(){
    activeCard = this;

    if(activeCard == activeCards[0]){
        return;
    }

    activeCard.classList.remove('hidden');

    if(activeCards.length === 0){
        activeCards[0] = activeCard;
        return;
    }
    
    else{
        cards.forEach(card =>{
            card.removeEventListener('click', clickCard)    
        })
        activeCards[1]=activeCard;
        setTimeout(function(){if(activeCards[0].className === activeCards[1].className){
            console.log('wygrana')
            activeCards.forEach(card => card.classList.add('off'))
            gameResault++;
            if(gameResault == gamePairs){
                const endTime = new Date().getTime();
                const gameTime = (endTime - startTime)/1000;
                alert(`WYGRANA! CZAS JAKI POTRZEBOWAŁEŚ TO: ${gameTime} sec`)
                if(confirm(`CZY CHCESZ GRAĆ OD NOWA?`)){
                    location.reload();
                }
                else{
                    location.href='gamemainpage.html';
                };
            }
        }
        else{
            console.log('przegrana')
            activeCards.forEach(card => card.classList.add('hidden'))
        }
        activeCard ='';
        activeCards.length = 0;
        cards.forEach(card => card.addEventListener('click', clickCard))
    
    },300)
         
    }
};
const init = function(){
    cards.forEach(card =>{
        const position = Math.floor(Math.random()*cardColors.length);
        card.classList.add(cardColors[position]);
        cardColors.splice(position, 1);
    })
    setTimeout(function(){
        cards.forEach(card =>{
            card.classList.add('hidden');
            card.addEventListener('click', clickCard)
        })
    },1000)
};

init()
