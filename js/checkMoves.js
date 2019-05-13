/*
 * Made by Noémie Deraedt in 2019.
 */

function checkMoveUp(posx, posy) {
    if (posy <= 30 && 14 <= posx && posx <= 59)
        return 84;
    else if (posy <= 15 && 60 <= posx && posx <= 86)
        return 84;
    else
        return 0;
}


function checkMoveDown(posx, posy) {
    if (posy === 35 && posx >= 14 && posx <= 68)
        return 84;
    if (posy >= 790 && posx >= 1250 && posx <= 1580)
        return 84;
    else if (posy === 41)
        return 84;
    else
        return 0;
}


function checkMoveLeft(posx, posy) {
    if (posx === 60 && posy <= 31 && posy >= 15)
        return 84;
    else if (posx === 60 && (posy === 34 || posy === 35))
        return 84;
    else if (posx === 14)
        return 84;
    else if (posx === 69 && posy >= 35)
        return 84;
    else
        return 0;
}


function checkMoveRight(posx, posy) {
    if (posx === 59 && (posy === 30 || posy === 31 || posy === 34 || posy === 35))
        return 84;
    else if (posx === 86)
        return 84;
    else
        return 0;
}