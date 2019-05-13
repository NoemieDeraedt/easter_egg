/*
 * Made by Noémie Deraedt in 2019.
 */

var livre4 = 0;
var livre3 = 0;
var livre5 = 0;
var poulet = 0;
var date = 0;

function checkCodes(key) {
    if (key === 49 && livre4 === 0)
        livre4++;
    else if (key === 57 && (livre4 === 1 || livre4 === 2 || livre4 === 3))
        livre4++;
    else if (key === 51 && (livre4 === 4 || livre4 === 7))
        livre4++;
    else if (key === 54 && (livre4 === 5 || livre4 === 9))
        livre4++;
    else if (key === 55 && (livre4 === 8 || livre4 === 10 || livre4 === 6))
        livre4++;
    else
        livre4 = 0;
    if (livre4 === 11) {
        document.getElementById("book4").style.opacity = 1.0;
        alert("Il semblerait qu'un livre soit apparu...");
        livre4 = 0;
    }

    if (key === 38 && (livre3 === 0 || livre3 === 1))
        livre3++;
    else if (key === 40 && (livre3 === 2 || livre3 === 3))
        livre3++;
    else if (key === 37 && (livre3 === 4 || livre3 === 6))
        livre3++;
    else if (key === 39 && (livre3 === 5 || livre3 === 7))
        livre3++;
    else if (key === 66 && livre3 === 8)
        livre3++;
    else if (key === 65 && livre3 === 9)
        livre3++;
    else
        livre3 = 0;
    if (livre3 === 10) {
        document.getElementById("book3").style.opacity = 1.0;
        alert("Il semblerait qu'un livre soit apparu...");
        livre3 = 0;
    }

    if (key === 55 && poulet === 0)
        poulet++;
    else if (key === 51 && poulet === 1)
        poulet++;
    else if (key === 53 && (poulet === 2 || poulet === 3))
        poulet++;
    else if (key === 54 && poulet === 4)
        poulet++;
    else if (key === 48 && poulet === 5)
        poulet++;
    else if (key === 56 && poulet === 6)
        poulet++;
    else
        poulet = 0;
    if (poulet === 7) {
        document.getElementById("poulet").style.opacity = 1.0;
        alert("Un poulet est entré dans la bibliothèque ! Heureusement qu’il ne crache pas de flammes...");
        poulet = 0;
    }

    if (key === 49 && date === 0)
        date++;
    else if (key === 57 && (date === 1 || date === 3))
        date++;
    else if (key === 55 && date === 2)
        date++;
    else
        date = 0;
    if (date === 4) {
        document.getElementById("chumtoad").style.opacity = 1.0;
        alert("Un Chumtoad est tombé du plafond !");
        date = 0;
    }
}


function closeBooks() {
    document.getElementById("a").style.opacity = 0.0;
    document.getElementById("b").style.opacity = 0.0;
    document.getElementById("c").style.opacity = 0.0;
    document.getElementById("d").style.opacity = 0.0;
    document.getElementById("e").style.opacity = 0.0;
    document.getElementById("f").style.opacity = 0.0;
    document.getElementById("solution").style.opacity = 0.0;
}


function checkInteraction(posx, posy) {
    if ((posx === 14 && posy === 31) || (posx === 15 && posy === 30) || (posx === 14 && posy === 30))
        document.getElementById("solution").style.opacity = 1.0;
    if ((posx === 59 && posy === 35) || (posx === 59 && posy === 34) || (posx === 58 && posy === 34)
        || (posx === 58 && posy === 35))
        document.getElementById("a").style.opacity = 1.0;
    if ((posx === 64 && posy === 17) || (posx === 65 && posy === 17) || (posx === 66 && posy === 17)
        || (posx === 65 && posy === 18))
        document.getElementById("b").style.opacity = 1.0;
    if ((posx === 79 && posy === 26) || (posx === 80 && posy === 26) || (posx === 81 && posy === 26)
        || (posx === 80 && posy === 27))
        document.getElementById("c").style.opacity = 1.0;
    if ((posx === 63 && posy === 26) || (posx === 64 && posy === 26) || (posx === 65 && posy === 26)
        || (posx === 64 && posy === 27))
        document.getElementById("e").style.opacity = 1.0;
    if ((posx === 77 && posy === 38) || (posx === 77 && posy === 37) || (posx === 78 && posy === 37)
        || (posx === 76 && posy === 37) || (posx === 77 && posy === 36))
        document.getElementById("d").style.opacity = 1.0;
    if ((posx === 74 && posy === 23) || (posx === 75 && posy === 23) || (posx === 74 && posy === 24)
        || (posx === 74 && posy === 22))
        document.getElementById("f").style.opacity = 1.0;

    if (posy === 30 && (posx === 20 || posx === 21 || posx === 22) && livre5 === 0)
        livre5++;
    else if (posy === 30 && (posx === 24 || posx === 25) && livre5 === 1)
        livre5++;
    else if (posy === 30 && (posx === 31 || posx === 30 || posx === 32) && livre5 === 2)
        livre5++;
    else
        livre5 = 0;
    if (livre5 === 3) {
        document.getElementById("book5").style.opacity = 1.0;
        alert("Il semblerait qu'un livre soit apparu...");
        livre5 = 0;
    }

    if ((posx === 56 && posy === 30) || (posx === 55 && posy === 30) || (posx === 57 && posy === 30)
        || (posx === 56 && posy === 31)) {
        document.getElementById("poulet").style.opacity = 0.0;
        document.getElementById("poulet-or").style.opacity = 1.0;
    }

    if ((posx === 84 && posy === 24) || (posx === 85 && posy === 24) || (posx === 85 && posy === 25)
        || (posx === 85 && posy === 23) || (posx === 86 && posy === 24))
        alert("Grrrrrrrrr");
}