function destColumna(event){

   for(let i=1; i<8; i++){
        if (event.target.id == ("imgColumn"+i) && eval("column"+i).length == 0 && deck[carta].number == 13) {
            event.target.style.background = "";
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );

            eval("column"+i).push(carta);
            let cardColDestino = document.getElementById("cardsColumn"+i);
            cardColDestino.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+i+"card1' class='column"+i+"Class' draggable='true' style='position:absolute ; top:0%; left:0%; z-index:0'>");
            
            deckUpdate();
            colUpdate();
        }
    }

for(let i=1; i<8; i++){
        let colorCartaCol = eval("column"+i+"[column"+i+".length-1]") && deck[eval("column"+i+"[column"+i+".length-1]")].color; 
        let numCartaCol = deck[eval("column"+i+"[column"+i+".length-1]")] && deck[eval("column"+i+"[column"+i+".length-1]")].number
        let colorCarta = deck[carta].color;
        let numCarta = deck[carta].number;
        
        if(event.target.id == ("column"+i+"card"+(eval("column"+i).length)) && colorCarta != colorCartaCol &&  numCartaCol == numCarta + 1 && eval("column"+1).length > 0){
            event.target.style.background = "";
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );
                
            eval("column"+i).push(carta);

            let lastCard = document.getElementById(event.target.id);
            let zindexCard = parseInt(window.getComputedStyle(lastCard).getPropertyValue('z-index')) + 1;
            let percentTop = parseInt(window.getComputedStyle(lastCard).getPropertyValue('top'))+15;
            console.log(zindexCard);
            console.log(percentTop);
            let insHtmlDest = document.getElementById("cardsColumn"+i);
            insHtmlDest.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+i+"card"+eval("column"+i).length+"' class='column"+i+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");

            deckUpdate();
            colUpdate();
        }

}
/*
if (event.target.id == "column1card"+column1.length ) {
    event.target.style.background = "";
    elementoArrastrado.parentNode.removeChild( elementoArrastrado );
    
    let idCard = event.target.id;
    console.log(idCard);
    let cardColDestino = document.getElementById("cardsColumn1");
    console.log(cardColDestino);
    cardColDestino.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column1card10' class='column1Class' draggable='true' style='position:absolute ; top:50%; left:0%; z-index:3'>");
    
    

    if(origenElemeArrast == "imgDeckFront"){
        deckUpdate();
    }
    
    if(origenElemeArrast == "column1Class" || origenElemeArrast == "column2Class" || origenElemeArrast == "column3Class" || origenElemeArrast == "column4Class" || origenElemeArrast == "column5Class" || origenElemeArrast == "column6Class" || origenElemeArrast == "column7Class" ){
        colUpdate();
    }
}
*/
}