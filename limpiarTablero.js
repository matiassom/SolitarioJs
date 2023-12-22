function limpiar(){

    var inferiorDiv = document.getElementById('inferior');

        
    while (inferiorDiv.firstChild) {
        inferiorDiv.removeChild(inferiorDiv.firstChild);
    }


    for(let i=1; i<5; i++){
        document.getElementById("imgGoal"+i).setAttribute("src","/public/cards/transparente.png");
    }

    for(let i=1; i<8; i++){
        var inf = document.getElementById("inferior");
        inf.insertAdjacentHTML("beforeend","<div id='cardsColumn"+i+"' class='cardDiv cardColumn' draggable='false'><img title='card' id='imgColumn"+i+"' src='/public/cards/transparente.png' draggable='false'/></div>")
    }

    
    document.getElementById("imgDeckBack").setAttribute("src","/public/cards/blue2.png");
    document.getElementById("imgDeckFront").setAttribute("src","/public/cards/transparente.png");

}