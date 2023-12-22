function colUpdate(){
    
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