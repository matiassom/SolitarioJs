

const deck = [
    {"id":0 ,"number":1,"color":"red","suit":"hearts","img":"/public/cards/hearts_ace.png"},
    {"id":1 ,"number":2,"color":"red","suit":"hearts","img":"/public/cards/hearts_2.png"},
    {"id":2 ,"number":3,"color":"red","suit":"hearts","img":"/public/cards/hearts_3.png"},
    {"id":3 ,"number":4,"color":"red","suit":"hearts","img":"/public/cards/hearts_4.png"},
    {"id":4 ,"number":5,"color":"red","suit":"hearts","img":"/public/cards/hearts_5.png"},
    {"id":5 ,"number":6,"color":"red","suit":"hearts","img":"/public/cards/hearts_6.png"},
    {"id":6 ,"number":7,"color":"red","suit":"hearts","img":"/public/cards/hearts_7.png"},
    {"id":7 ,"number":8,"color":"red","suit":"hearts","img":"/public/cards/hearts_8.png"},
    {"id":8 ,"number":9,"color":"red","suit":"hearts","img":"/public/cards/hearts_9.png"},
    {"id":9 ,"number":10,"color":"red","suit":"hearts","img":"/public/cards/hearts_10.png"},
    {"id":10 ,"number":11,"color":"red","suit":"hearts","img":"/public/cards/hearts_jack.png"},
    {"id":11 ,"number":12,"color":"red","suit":"hearts","img":"/public/cards/hearts_queen.png"},
    {"id":12 ,"number":13,"color":"red","suit":"hearts","img":"/public/cards/hearts_king.png"},

    {"id":13 ,"number":1,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_ace.png"},
    {"id":14 ,"number":2,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_2.png"},
    {"id":15 ,"number":3,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_3.png"},
    {"id":16 ,"number":4,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_4.png"},
    {"id":17 ,"number":5,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_5.png"},
    {"id":18 ,"number":6,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_6.png"},
    {"id":19 ,"number":7,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_7.png"},
    {"id":20 ,"number":8,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_8.png"},
    {"id":21 ,"number":9,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_9.png"},
    {"id":22 ,"number":10,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_10.png"},
    {"id":23 ,"number":11,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_jack.png"},
    {"id":24 ,"number":12,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_queen.png"},
    {"id":25 ,"number":13,"color":"red","suit":"diamonds","img":"/public/cards/diamonds_king.png"},

    {"id":26 ,"number":1,"color":"black","suit":"clubs","img":"/public/cards/clubs_ace.png"},
    {"id":27 ,"number":2,"color":"black","suit":"clubs","img":"/public/cards/clubs_2.png"},
    {"id":28 ,"number":3,"color":"black","suit":"clubs","img":"/public/cards/clubs_3.png"},
    {"id":29 ,"number":4,"color":"black","suit":"clubs","img":"/public/cards/clubs_4.png"},
    {"id":30 ,"number":5,"color":"black","suit":"clubs","img":"/public/cards/clubs_5.png"},
    {"id":31 ,"number":6,"color":"black","suit":"clubs","img":"/public/cards/clubs_6.png"},
    {"id":32 ,"number":7,"color":"black","suit":"clubs","img":"/public/cards/clubs_7.png"},
    {"id":33 ,"number":8,"color":"black","suit":"clubs","img":"/public/cards/clubs_8.png"},
    {"id":34 ,"number":9,"color":"black","suit":"clubs","img":"/public/cards/clubs_9.png"},
    {"id":35 ,"number":10,"color":"black","suit":"clubs","img":"/public/cards/clubs_10.png"},
    {"id":36 ,"number":11,"color":"black","suit":"clubs","img":"/public/cards/clubs_jack.png"},
    {"id":37 ,"number":12,"color":"black","suit":"clubs","img":"/public/cards/clubs_queen.png"},
    {"id":38 ,"number":13,"color":"black","suit":"clubs","img":"/public/cards/clubs_king.png"},

    {"id":39 ,"number":1,"color":"black","suit":"spades","img":"/public/cards/spades_ace.png"},
    {"id":40 ,"number":2,"color":"black","suit":"spades","img":"/public/cards/spades_2.png"},
    {"id":41 ,"number":3,"color":"black","suit":"spades","img":"/public/cards/spades_3.png"},
    {"id":42 ,"number":4,"color":"black","suit":"spades","img":"/public/cards/spades_4.png"},
    {"id":43 ,"number":5,"color":"black","suit":"spades","img":"/public/cards/spades_5.png"},
    {"id":44 ,"number":6,"color":"black","suit":"spades","img":"/public/cards/spades_6.png"},
    {"id":45 ,"number":7,"color":"black","suit":"spades","img":"/public/cards/spades_7.png"},
    {"id":46 ,"number":8,"color":"black","suit":"spades","img":"/public/cards/spades_8.png"},
    {"id":47 ,"number":9,"color":"black","suit":"spades","img":"/public/cards/spades_9.png"},
    {"id":48 ,"number":10,"color":"black","suit":"spades","img":"/public/cards/spades_10.png"},
    {"id":49 ,"number":11,"color":"black","suit":"spades","img":"/public/cards/spades_jack.png"},
    {"id":50 ,"number":12,"color":"black","suit":"spades","img":"/public/cards/spades_queen.png"},
    {"id":51 ,"number":13,"color":"black","suit":"spades","img":"/public/cards/spades_king.png"}
];

var orderedDeck = [];
var mixedDeck = [];
var deckShowed = [];
let goal1 = [];
let goal2 = [];
let goal3 = [];
let goal4 = [];
var column1 = [];
var column2 = [];
var column3 = [];
var column4 = [];
var column5 = [];
var column6 = [];
var column7 = [];



function inicio(){
    precargarImagenes();
}

function juego(){
    limpiar();
    Mezclar();
    repartir();
    arrastrar();

}

function precargarImagenes() {

    let img = new Image();
    img.src ="/cards/kingWin.png";

    let imagenesCargadas = 0;

    for (let i = 0; i < 52; i++) {
        let img = new Image();
        img.onload = function(){
            imagenesCargadas++;
            if(imagenesCargadas === deck.length){
                juego();
            }
        }
        img.src = deck[i].img;
    }
}




