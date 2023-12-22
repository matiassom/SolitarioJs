let elementoArrastrado;
let origenElemeArrast;
let goalAutorizado = false;
let goal1Autorizado = false;
let goal2Autorizado = false;
let goal3Autorizado = false;
let goal4Autorizado = false;
let carta;
let idDest;
let idCarta;


function arrastrar(){                     
    
     
    document.addEventListener("drag", function( event ) {  
        valGoalCero();
    }, false);
    }
    
    document.addEventListener("dragstart", function( event ) {
    
            //guarda una referéncia del elemento arrastrado
            elementoArrastrado = event.target;
            origenElemeArrast = elementoArrastrado.getAttribute("class");
            idCarta = elementoArrastrado.getAttribute("id");
            

            //guarda información acerca del objeto arrastrado dependiendo de donde se tomó.
            origenElemeArrast=="imgDeckFront"&&event.dataTransfer.setData('dato',deckShowed[deckShowed.length-1]);

            for(let i=1; i<8; i++){
            if (origenElemeArrast == ("column"+i+"Class"))
                {event.dataTransfer.setData('dato',eval('column'+i)[eval('column'+i).length-1]);
            }}
                
            // cambia la opacidad del elemento a medio transparente
            event.target.style.opacity = .5;
      }, false);
    
      document.addEventListener("dragend", function( event ) {
        // reestablece el valor de la opacidad
        event.target.style.opacity = 1;
    }, false);
    
    document.addEventListener("dragover", function( event ) {
        // previene el comportamiento por defecto del elemento arrastrado
       event.preventDefault();
    }, false);
    
    document.addEventListener("dragenter", function( event ) {
        // comprueba si el event.target es una zona de soltar  
        if ( event.target.className == "goalDiv" ) {
          // y si lo és cambia el color de fondo
            event.target.style.background = "darkgreen";
            event.target.style.opacity = 1;
        }

    
    carta = event.dataTransfer.getData('dato');

    
    idDest = event.target.id;
    
    
    }, false);
    
    
    
    document.addEventListener("dragleave", function( event ) {
        // comprueba si el event.target es una zona de soltar  
        if ( event.target.className == "goalDiv" ) {
          // y si lo és, reestablece el valor inicial
            event.target.style.background = "";
        }
    }, false);
    
    document.addEventListener("drop", function( event ) {
         // Si el elemento arrastrado es un link, este se abre en una nueve página.
        // Para que esto no pase hay que utilizar: 
        event.preventDefault();
        
        var destinoElemeArrast = event.target.className;
        valGoal2();
        
        // comprueba si el event.target es una zona de soltar
        if (event.target.id == "imgGoal1" && goal1Autorizado == true) {
            // reestablece el valor inicial para el background
            event.target.style.background = "";
            // elimina el elemento arrastrado del del elemento padre
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );
            // y lo agrega al elemento de destino
            //event.target.appendChild( elementoArrastrado );

            deckUpdate();
            colUpdate();
        }

        // comprueba si el event.target es una zona de soltar
        if (event.target.id == "imgGoal2" && goal2Autorizado == true) {
            // reestablece el valor inicial para el background
            event.target.style.background = "";
            // elimina el elemento arrastrado del del elemento padre
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );
            // y lo agrega al elemento de destino
            //event.target.appendChild( elementoArrastrado );

       
            deckUpdate();
            colUpdate();
        }

        // comprueba si el event.target es una zona de soltar
        if (event.target.id == "imgGoal3" && goal3Autorizado == true) {
            // reestablece el valor inicial para el background
            event.target.style.background = "";
            // elimina el elemento arrastrado del del elemento padre
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );
            // y lo agrega al elemento de destino
            //event.target.appendChild( elementoArrastrado );

        
            deckUpdate();
            colUpdate();
        }

        // comprueba si el event.target es una zona de soltar
        if (event.target.id == "imgGoal4" && goal4Autorizado == true) {
            // reestablece el valor inicial para el background
            event.target.style.background = "";
            // elimina el elemento arrastrado del del elemento padre
            elementoArrastrado.parentNode.removeChild( elementoArrastrado );
            // y lo agrega al elemento de destino
            //event.target.appendChild( elementoArrastrado );

         
            deckUpdate();
            colUpdate();
        }

    
        if(destinoElemeArrast == "goalDiv"){
            if(idDest == "imgGoal1" && goal1Autorizado == true){
                goal1.push(carta);
                document.getElementById("imgGoal1").setAttribute("src",deck[carta].img);
                event.target.style.opacity = 1;
                goal1Autorizado = false;
            }

            if(idDest == "imgGoal2" && goal2Autorizado == true){
                goal2.push(carta);
                document.getElementById("imgGoal2").setAttribute("src",deck[carta].img);
                event.target.style.opacity = 1;
            }

            if(idDest == "imgGoal3" && goal3Autorizado == true){
                goal3.push(carta);
                document.getElementById("imgGoal3").setAttribute("src",deck[carta].img);
                event.target.style.opacity = 1;
            }

            if(idDest == "imgGoal4" && goal4Autorizado == true){
                goal4.push(carta);
                document.getElementById("imgGoal4").setAttribute("src",deck[carta].img);
                event.target.style.opacity = 1;
            }
            
        }
           
      
        destColumna(event);
     
      
    }, false);
    