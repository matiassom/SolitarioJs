function valGoalCero(){
goal1Autorizado = false;
goal2Autorizado = false;
goal3Autorizado = false;
goal4Autorizado = false;

if(carta){
    if(goal1.length == 0 && deck[carta].number == 1){
        goal1Autorizado = true;
    } 

    if(goal2.length == 0 && deck[carta].number == 1){
        goal2Autorizado = true;
    } 

    if(goal3.length == 0 && deck[carta].number == 1){
        goal3Autorizado = true;
    } 

    if(goal4.length == 0 && deck[carta].number == 1){
        goal4Autorizado = true;
    }
} 
}
