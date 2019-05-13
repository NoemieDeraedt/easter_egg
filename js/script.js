/*
 * Made by Noémie Deraedt 2019.
 */

var posx = 15;
var posy = 33;

function animation() {
    alert("Bienvenue !\nUtilisez les flèches de votre clavier pour bouger le personnage et sur E pour intéragir avec les livres.\nPour quitter l'affichage d'un livre, appuyez sur ECHAP.");

    document.getElementById("character").style.marginTop = posy + '%';
    document.getElementById("character").style.marginLeft = posx + '%';

    window.addEventListener('keydown', moveChar, false);
}


function moveChar(event) {
    let key = event.which || event.keyCode;
    const character = document.getElementById("character");

    if (key === 38 || key === 90)
        moveUp(character);
    else if (key === 37 || key === 81)
        moveLeft(character);
    else if (key === 40 || key === 83)
        moveDown(character);
    else if (key === 39 || key === 68)
        moveRight(character);
    else if (key === 69)
        checkInteraction(posx, posy);
    else if (key === 27)
        closeBooks();
}


function moveDown(character) {
    character.style.backgroundPositionX = 0 + 'px';
    if (checkMoveDown(posx, posy) === 0) {
        posy += 1;
        character.style.marginTop = posy + '%';
    }
}


function moveUp(character) {
    character.style.backgroundPositionX = -210 + 'px';
    if (checkMoveUp(posx, posy) === 0) {
        posy -= 1;
        character.style.marginTop = posy + '%';
    }
}


function moveLeft(character) {
    character.style.backgroundPositionX = -315 + 'px';
    if (checkMoveLeft(posx, posy) === 0) {
        posx -= 1;
        character.style.marginLeft = posx + '%';
    }
}


function moveRight(character) {
    character.style.backgroundPositionX = -105 + 'px';
    if (checkMoveRight(posx, posy) === 0) {
        posx += 1;
        character.style.marginLeft = posx + '%';
    }
}


window.addEventListener("load", animation);