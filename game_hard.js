const cardColors = ["q8C12CB","q8C12CB","AA521A","AA521A","BDECB6","BDECB6","A06863","A06863","q3BB00F","q3BB00F","q6F1DFC","q6F1DFC","q226666","q226666","CF1463","CF1463","DA7701","DA7701","AD7D6A","AD7D6A","q5CC343","q5CC343","F1B2B3","F1B2B3","q3B0228","q3B0228","D5ECB6","D5ECB6","q3C2D17","q3C2D17","BF6769","BF6769","q4C1139","q4C1139","B18F6B","B18F6B","C5E234","C5E234","E07511","E07511","B8AFA1","B8AFA1","C2041F","C2041F","q7F2BF3","q7F2BF3","q42DA56","q42DA56","q1E545D","q1E545D"];

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
                }
            }
        }
        else{
            console.log('przegrana')
            activeCards.forEach(card => card.classList.add('hidden'))
        }
        activeCard ='';
        activeCards.length = 0;
        cards.forEach(card => card.addEventListener('click', clickCard))
    
    },500)
         
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
    },)
};

init()
