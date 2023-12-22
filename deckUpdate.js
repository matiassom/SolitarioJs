function deckUpdate(){

deckShowed.pop();

let deckDiv = document.getElementById("deckFront");

deckDiv.insertAdjacentHTML("beforeend","<img id='imgDeckFront' class='imgDeckFront' src='/public/cards/transparente.png'  draggable='false'>")

if(deckShowed.length>0){
    let deckVar = document.getElementById("imgDeckFront");
    deckVar.setAttribute("src",deck[deckShowed[deckShowed.length-1]].img);
    deckVar.setAttribute("draggable","true");
}
}