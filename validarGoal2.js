function valGoal2(){

if(carta>=0){
    if(goal1.length >0 && goal1Autorizado == false && deck[carta].color == deck[goal1[goal1.length-1]].color && deck[carta].suit == deck[goal1[goal1.length-1]].suit && deck[goal1[goal1.length-1]].number == deck[carta].number-1){
        goal1Autorizado=true;
    } 

    if(goal2.length >0 && goal2Autorizado == false && deck[carta].color == deck[goal2[goal2.length-1]].color && deck[carta].suit == deck[goal2[goal2.length-1]].suit && deck[goal2[goal2.length-1]].number == deck[carta].number-1){
        goal2Autorizado=true;
    }

    if(goal3.length >0 && goal3Autorizado == false && deck[carta].color == deck[goal3[goal3.length-1]].color && deck[carta].suit == deck[goal3[goal3.length-1]].suit && deck[goal3[goal3.length-1]].number == deck[carta].number-1){
        goal3Autorizado=true;
    }

    if(goal4.length >0 && goal4Autorizado == false && deck[carta].color == deck[goal4[goal4.length-1]].color && deck[carta].suit == deck[goal4[goal4.length-1]].suit && deck[goal4[goal4.length-1]].number == deck[carta].number-1){
        goal4Autorizado=true;
    }
}
}
