function AfficherMenu() {

    var menu = document.getElementById("menu-deroulant");

    if(menu.style.display == "block") {

        menu.style.display = "none";
    }

    else {

        menu.style.display = "block";
    }
}

function ChangerTexte() {

    document.getElementById("texteJS").innerHTML =

    "Mon objectif est de devenir une ingénieure reconnue dans le domaine industriel 🚀";
}

function ChangerCouleur() {

    var couleurs = ["lightblue", "lightpink", "lightgreen", "lavender", "peachpuff", "mistyrose", "lightyellow"];

    var couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];

    document.body.style.backgroundColor = couleurAleatoire;
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