function newCard(){
    if(mixedDeck.length>0){
    deckShowed.push(mixedDeck[mixedDeck.length-1]);
    mixedDeck.pop();
    let imgCard =document.getElementById("imgDeckFront");
    deckShowed&&imgCard.setAttribute("src",deck[deckShowed[deckShowed.length-1]].img);
    deckShowed&&imgCard.setAttribute("draggable","true");
    
        if(mixedDeck.length>0){
            document.getElementById("cntH").innerHTML = mixedDeck.length;
        } else {
            document.getElementById("cntH").innerHTML = mixedDeck.length;
            document.getElementById("imgDeckBack").setAttribute("src","/public/cards/transparente.png");}
    } else {
        if(mixedDeck.length==0 && deckShowed.length>0){
            mixedDeck = deckShowed.reverse();
            deckShowed = [];
            document.getElementById("imgDeckBack").setAttribute("src","/public/cards/blue2.png");
            document.getElementById("imgDeckFront").setAttribute("src","/public/cards/transparente.png");
            document.getElementById("cntH").innerHTML = mixedDeck.length;
        }}
}