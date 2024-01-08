function precargarImagenes() {
    //var imagenes = ['carta1.jpg', 'carta2.jpg', /*... lista de todas las cartas ...*/];
    
    for (var i = 0; i < 52; i++) {
        var img = new Image();
        img.src = deck[i].img;
        console.log("imagen "+i+" cargada.");
    }
}
