function precargarImagenes(callback) {
    
    
    for (var i = 0; i < 52; i++) {
        var img = new Image();
        img.src = deck[i].img;
        img.onload = ()=>{i==51&&callback()}
    }
}
