function AfficherMenu() {

    var menu = document.getElementById("menu-deroulant");

    if(menu.style.display == "block") {

        menu.style.display = "none";
    }

    else {

        menu.style.display = "block";
    }
}



function ChangerCouleur() {

    var couleurs = [
        "lightblue",
        "lightpink",
        "lightgreen",
        "lavender",
        "peachpuff",
        "mistyrose",
        "lightyellow"
    ];

    var couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];

    document.body.style.background = couleurAleatoire;
}

function playVideo() {

    var img = document.getElementById("imgChant");
    var video = document.getElementById("videoChant");
    var icon = document.getElementById("playIcon");

    img.style.display = "none";
    icon.style.display = "none";

    video.style.display = "block";

    video.play();
}
let ensibsPhotos = [
    "ensibs.jpg",
    "ensibs1.jpg",
    "ensibs2.jpg",
    "ensibs3.jpg"
];


let paulPhotos = [
    "paulva.jpg",
    "paulva1.jpg",
    "paulva2.jpg",
    "paulva3.jpg"
];


let indexEnsibs = 0;
let indexPaul = 0;



setInterval(()=>{


let img = document.getElementById("ensibs-slider");


if(img){

indexEnsibs++;

if(indexEnsibs >= ensibsPhotos.length){
indexEnsibs = 0;
}


img.classList.remove("fade-image");

void img.offsetWidth;

img.src = ensibsPhotos[indexEnsibs];

img.classList.add("fade-image");


}


},3500);





setInterval(()=>{


let img = document.getElementById("paul-slider");


if(img){

indexPaul++;

if(indexPaul >= paulPhotos.length){
indexPaul = 0;
}


img.classList.remove("fade-image");

void img.offsetWidth;

img.src = paulPhotos[indexPaul];

img.classList.add("fade-image");


}


},3500);
