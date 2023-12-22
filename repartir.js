function repartir(){

for(var i=1; i<8; i++){
    for(var j=0; j<i; j++){
        eval("column" + i + ".push(mixedDeck["+j+"])");
    }
    for(var j=0; j<i; j++){
        mixedDeck.shift();
    }
}

mixedDeck.length>0?document.getElementById("cntH").innerHTML = mixedDeck.length:"";

for(let j=7; j>0; j--){  
    let col = document.getElementById("cardsColumn"+j);
    let zPercent = 0;
    for(var i=0; i<j; i++){ 
        let icol = eval("column"+j); 
        if(i+1 == icol.length){
            col.insertAdjacentHTML("beforeend","<img src="+deck[eval("column"+j+"[i]")].img+" id='column"+(i+1)+"card"+j+"' ondragover='event' ondrop='event' class='column"+(i+1)+"Class' draggable='true' style='position:absolute;top:"+zPercent+"px;left:0%;z-index:"+i+";'>")
            zPercent += 15;
        } else {
            col.insertAdjacentHTML("beforeend","<img src='/public/cards/blue2.png' id='column"+(j)+"card"+(i+1)+"' class='column"+(j)+"Back' draggable='false' style='position:absolute;top:"+zPercent+"px;left:0%;z-index:"+i+";'>")
            zPercent += 15; 
        }
    }
}  
}