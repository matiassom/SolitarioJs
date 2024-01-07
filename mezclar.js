function Mezclar(){    
    orderedDeck = [];
    mixedDeck = []; 
    deckShowed = [];
    goal1 = [];
    goal2 = [];
    goal3 = [];
    goal4 = [];
    column1 = [];
    column2 = [];
    column3 = [];
    column4 = [];
    column5 = [];
    column6 = [];
    column7 = [];

    for(var i=0; i<52; i++){
        orderedDeck.push(i);
    }
    
    for (var i=0;i<52;i++){
        var newNumber = Math.floor(Math.random()*orderedDeck.length);
        mixedDeck.push(orderedDeck[newNumber]);
        orderedDeck.splice(newNumber,1);       
    }
    
   //mazo para pruebas
   //mixedDeck = [0,2, 1, 5, 4, 3, 9, 8, 7, 6,    14, 13, 12, 11, 10   , 20, 19, 18, 17, 16, 15,   27, 26, 25, 24, 23, 22, 21,     28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
   // mixedDeck = [10,2, 12, 5, 4, 3, 9, 8, 7, 6,    14, 13, 3, 11, 0   , 20, 19, 18, 17, 16, 15,   27, 26, 25, 24, 23, 22, 21,     28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]

}


