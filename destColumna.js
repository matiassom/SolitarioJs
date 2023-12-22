function destColumna(event){

   console.log("antes");
   for(let i=1; i<5; i++){
    console.log(eval("goal"+i));
   }
   for(let i=1; i<8; i++){
    console.log(eval("column"+i));
   }

   for(let i=1; i<8; i++){
        if (event.target.id == ("imgColumn"+i) && eval("column"+i+".length") == 0 && deck[carta].number == 13) {
            event.target.style.background = "";
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );

            eval("column"+i).push(carta);
            let cardColDestino = document.getElementById("cardsColumn"+i);
            cardColDestino.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+i+"card1' class='column"+i+"Class' draggable='true' style='position:absolute ; top:0%; left:0%; z-index:0'>");
            
            
        
            deckUpdate();
            colUpdate();

        
            
            console.log("despues");
            for(let i=1; i<5; i++){
            console.log(eval("goal"+i));
            }
            for(let i=1; i<8; i++){
            console.log(eval("column"+i));
            }
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