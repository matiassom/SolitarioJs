function colUpdate(){
    
    if(origenElemeArrast == "column1Class" || origenElemeArrast == "column2Class" || origenElemeArrast == "column3Class" || origenElemeArrast == "column4Class" || origenElemeArrast == "column5Class" || origenElemeArrast == "column6Class" || origenElemeArrast == "column7Class" ){
 
        for(let i=1; i<8; i++){
            if(origenElemeArrast == "column"+i+"Class"){
                eval('column'+i).pop();
                let columnaCarta = "column"+i+"card"+eval("column"+i).length;
                
                if(eval("column"+i).length > 0){
                    var cardDePaso = document.getElementById(columnaCarta);
                    cardDePaso.setAttribute("src",deck[eval("column"+i+"[column"+i+".length-1]")].img); 
                    cardDePaso.setAttribute("draggable","true");
                    cardDePaso.setAttribute("class","column"+i+"Class");
                    cardDePaso.setAttribute("ondragover","event");
                    cardDePaso.setAttribute("ondrop","event");   
                }       
            }
        }
    }
}