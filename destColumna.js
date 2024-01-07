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
        let colorCarta = carta && deck[carta].color;
        let numCarta = deck[carta].number;
        
        if( event.target.id == ("column"+i+"card"+(eval("column"+i).length)) && colorCarta != colorCartaCol &&  numCartaCol == numCarta + 1 && eval("column"+i).length > 0){
            event.target.style.background = "";
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );

            
                            
            eval("column"+i).push(carta);

            let lastCard = document.getElementById(event.target.id);
            let zindexCard = parseInt(window.getComputedStyle(lastCard).getPropertyValue('z-index')) + 1;
            let percentTop = parseInt(window.getComputedStyle(lastCard).getPropertyValue('top'))+15;
            
            let insHtmlDest = document.getElementById("cardsColumn"+i);
            insHtmlDest.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+i+"card"+eval("column"+i).length+"' class='column"+i+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");

            deckUpdate();
            colUpdate();
        }






        }
   

////////////////////// De aquí en adelante  el codigo es para arrastrar columnas de cartas. /////////////////////////////////


let zindex = parseInt(window.getComputedStyle(elementoArrastrado).getPropertyValue('z-index'))+1 ;
        
for(let j=1; j<8; j++){

    for(let m=1; m<8; m++){
        if(origenElemeArrast == "column"+m+"Class"){
            carta = eval("column"+m)[zindex-1];
            }   
        }
        
    let colorCartaCol = eval("column"+j+"[column"+j+".length-1]") && deck[eval("column"+j+"[column"+j+".length-1]")].color; 
    let numCartaCol = deck[eval("column"+j+"[column"+j+".length-1]")] && deck[eval("column"+j+"[column"+j+".length-1]")].number
    let colorCarta = carta && deck[carta].color;
    let numCarta = carta && deck[carta].number;
    /////Aqui comienza el código para arrastrar varias cartas sobre un lugar vacío.
    for(let i=1; i<8; i++){
        if(origenElemeArrast == "column"+i+"Class" && 
        zindex < (eval("column"+i)).length && 
        i!=j &&
        idDest == "imgColumn"+j &&
        deck[eval("column"+i)[zindex-1]].number == 13
        ){
            console.log("Codigo correcto.")
            console.log(zindex);


            lastCard = document.getElementById(event.target.id);
            zindexCard = parseInt(window.getComputedStyle(lastCard).getPropertyValue('z-index')) + 1;
            percentTop = parseInt(window.getComputedStyle(lastCard).getPropertyValue('top'))+15;
            
            console.log(lastCard);
            console.log(zindexCard);

            //esta linea de para probar si se eliminan las imagenes en cascada
            elementoArrastrado.remove();
            eval("column"+j).push(carta);
            
            let col = document.getElementById("cardsColumn"+j);
            col.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+j+"card"+eval("column"+j).length+"' class='column"+j+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");

            
            for(let k=zindex+1; k< eval("column"+i).length+1; k++){ 
                zindexCard = zindexCard + 1;
                percentTop = percentTop + 15;
                let aEliminar = eval("column"+i+"card"+k) && eval("column"+i+"card"+k); 
                
                eval("column"+j).push( parseInt(eval("column"+i)[k-1]  )) ;
                
                col.insertAdjacentHTML("beforeend","<img src="+deck[parseInt(eval("column"+i)[k-1])].img+" id='column"+j+"card"+eval("column"+j).length+"' class='column"+j+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");
                
                aEliminar.remove();
               
            }
            
            let cantEliminar = parseInt(eval("column"+i).length) - (zindex-1);

            for(let k=0; k<cantEliminar; k++){
                eval("column"+i).pop();
            }
            
            let origenLength = parseInt(zindex-1);

            //let datoNroCarta = "column"+i+"["+(origenLength-1)+"]";
            
            let cardDePaso = document.getElementById("column"+i+"card"+origenLength);
            
            if(cardDePaso!=null){
                cardDePaso.setAttribute("src",deck[    eval("column"+i+"["+parseInt(origenLength-1)+"]"  )  ].img); 
                cardDePaso.setAttribute("draggable","true");
                cardDePaso.setAttribute("class","column"+i+"Class");
                cardDePaso.setAttribute("ondragover","event");
                cardDePaso.setAttribute("ondrop","event");   
            }



            console.log(column1);
            console.log(column2);
            console.log(column3);
            console.log(column4);
            console.log(column5);
            console.log(column6);
            console.log(column7);






















        }
    }
       
    /////Aqui comienza el código para arrastrar varias cartas sobre otra carta, o sobre otras cartas.
    for(let i=1; i<8; i++){
        if( 
            origenElemeArrast == "column"+i+"Class" && 
            zindex < (eval("column"+i)).length && 
            i!=j && 
            idDest == "column"+j+"card"+(eval("column"+j)).length &&
            colorCarta != colorCartaCol &&  
            numCartaCol == numCarta + 1  
          ){
            
                lastCard = document.getElementById(event.target.id);
                zindexCard = parseInt(window.getComputedStyle(lastCard).getPropertyValue('z-index')) + 1;
                percentTop = parseInt(window.getComputedStyle(lastCard).getPropertyValue('top'))+15;
                
                //esta linea de para probar si se eliminan las imagenes en cascada
                elementoArrastrado.remove();
                eval("column"+j).push(carta);
                
                let col = document.getElementById("cardsColumn"+j);
                col.insertAdjacentHTML("beforeend","<img src="+deck[carta].img+" id='column"+j+"card"+eval("column"+j).length+"' class='column"+j+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");

                
                for(let k=zindex+1; k< eval("column"+i).length+1; k++){ 
                    zindexCard = zindexCard + 1;
                    percentTop = percentTop + 15;
                    let aEliminar = eval("column"+i+"card"+k) && eval("column"+i+"card"+k); 
                    
                    eval("column"+j).push( parseInt(eval("column"+i)[k-1]  )) ;
                    
                    col.insertAdjacentHTML("beforeend","<img src="+deck[parseInt(eval("column"+i)[k-1])].img+" id='column"+j+"card"+eval("column"+j).length+"' class='column"+j+"Class' draggable='true' style='position:absolute ; top:"+percentTop+"px; left:0%; z-index:"+zindexCard+"'>");
                    
                    aEliminar.remove();
                   
                }
                
                let cantEliminar = parseInt(eval("column"+i).length) - (zindex-1);

                for(let k=0; k<cantEliminar; k++){
                    eval("column"+i).pop();
                }
                
                let origenLength = parseInt(zindex-1);

                //let datoNroCarta = "column"+i+"["+(origenLength-1)+"]";
                
                let cardDePaso = document.getElementById("column"+i+"card"+origenLength);
                
                if(cardDePaso!=null){
                    cardDePaso.setAttribute("src",deck[    eval("column"+i+"["+parseInt(origenLength-1)+"]"  )  ].img); 
                    cardDePaso.setAttribute("draggable","true");
                    cardDePaso.setAttribute("class","column"+i+"Class");
                    cardDePaso.setAttribute("ondragover","event");
                    cardDePaso.setAttribute("ondrop","event");   
                }

            }
        }
       }

            





}
