async function gameEnd() {  
    
    if(
        mixedDeck.length == 0 &&
        deckShowed.length == 0 &&
        goal1.length == 13 &&
        goal2.length == 13 &&
        goal3.length == 13 &&
        goal4.length == 13 &&
        column1.length == 0 &&
        column2.length == 0 &&
        column3.length == 0 &&
        column4.length == 0 &&
        column5.length == 0 &&
        column6.length == 0 &&
        column7.length == 0 
    ){
       
        for(let i=1; i<5; i++){
            let cardAnim = document.getElementById("imgGoal"+i);
            cardAnim.setAttribute("class","cartafinal"+i);
            
            await esperar(950);
            cardAnim.setAttribute("src","/public/cards/kingWin.png"); 
        }
        valoresOriginales()

    }
}

function valoresOriginales (){
    for(let i=1; i<5; i++){
        let cardAnim = document.getElementById("imgGoal"+i);
        cardAnim.setAttribute("class","goalDiv");
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }