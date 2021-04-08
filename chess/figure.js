function pawn(figure, tabBox) {

    // console.log(document.querySelector(`.tableBox[data-x="${figure.parentNode.dataset.x}"][data-y="3"]`))

    if (figure.getAttribute("class").search("white") != -1) {
        if ((+figure.parentNode.dataset.y + 1 == +tabBox.dataset.y && +figure.parentNode.dataset.x == +tabBox.dataset.x && tabBox.innerHTML == '') || (+figure.parentNode.dataset.y == 2 && +figure.parentNode.dataset.y + 2 == +tabBox.dataset.y && +figure.parentNode.dataset.x == +tabBox.dataset.x && tabBox.innerHTML == '' && document.querySelector(`.tableBox[data-x="${figure.parentNode.dataset.x}"][data-y="3"]`).innerHTML == '')) {
            addFigureHasNOtParent(figure, tabBox)
            if(tabBox.dataset.y == 8){
                document.querySelector('.wrapNoCursor1').classList.remove('damaNone')
            }
        } else if ((+figure.parentNode.dataset.y + 1 == +tabBox.parentNode.dataset.y) && ((+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 1) || (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 1)) && ((tabBox.getAttribute("class").search("figureImg") != -1) && (tabBox.getAttribute("class").search("black") != -1))) {
            figureEat(figure, tabBox)
            // if(tabBox.dataset.y == 8 ||tabBox.parentNode.dataset.y == 8 )
        } else if (tabBox.innerHTML != '' && (+figure.parentNode.dataset.y + 1 == +tabBox.dataset.y) && ((+figure.parentNode.dataset.x == +tabBox.dataset.x + 1) || (+figure.parentNode.dataset.x == +tabBox.dataset.x - 1)) && ((tabBox.firstChild.getAttribute("class").search("figureImg") != -1) && (tabBox.firstChild.getAttribute("class").search("black") != -1))) {
            figureEatTab(figure, tabBox)
        } else {
            figureNotMove(figure)
        }
    } else {
        if ((+figure.parentNode.dataset.y - 1 == +tabBox.dataset.y && +figure.parentNode.dataset.x == +tabBox.dataset.x && tabBox.innerHTML == '') || (+figure.parentNode.dataset.y == 7 && +figure.parentNode.dataset.y - 2 == +tabBox.dataset.y && +figure.parentNode.dataset.x == +tabBox.dataset.x && tabBox.innerHTML == '' && document.querySelector(`.tableBox[data-x="${figure.parentNode.dataset.x}"][data-y="6"]`).innerHTML == '')) {
            addFigureHasNOtParent(figure, tabBox)
            if(tabBox.dataset.y == 1){
                document.querySelector('.wrapNoCursor2').classList.remove('damaNone')
            }
        } else if ((+figure.parentNode.dataset.y - 1 == +tabBox.parentNode.dataset.y) && ((+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 1) || (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 1)) && (tabBox.getAttribute("class").search("figureImg") != -1) && (tabBox.getAttribute("class").search("white") != -1)) {
            figureEat(figure, tabBox)
        } else if (tabBox.innerHTML != '' && (+figure.parentNode.dataset.y - 1 == +tabBox.dataset.y) && ((+figure.parentNode.dataset.x == +tabBox.dataset.x + 1) || (+figure.parentNode.dataset.x == +tabBox.dataset.x - 1)) && ((tabBox.firstChild.getAttribute("class").search("figureImg") != -1) && (tabBox.firstChild.getAttribute("class").search("white") != -1))) {
            figureEatTab(figure, tabBox)
        } else {
            figureNotMove(figure)
        }
    }
}


function hors(figure, tabBox) {
    // console.log(tabBox.innerHTML == '')
    if (((+figure.parentNode.dataset.y + 2 == +tabBox.dataset.y && (+figure.parentNode.dataset.x == +tabBox.dataset.x + 1 || +figure.parentNode.dataset.x == +tabBox.dataset.x - 1)) || (+figure.parentNode.dataset.y - 2 == +tabBox.dataset.y && (+figure.parentNode.dataset.x == +tabBox.dataset.x + 1 || +figure.parentNode.dataset.x == +tabBox.dataset.x - 1)) || (+figure.parentNode.dataset.y + 1 == +tabBox.dataset.y && (+figure.parentNode.dataset.x == +tabBox.dataset.x + 2 || +figure.parentNode.dataset.x == +tabBox.dataset.x - 2)) || (+figure.parentNode.dataset.y - 1 == +tabBox.dataset.y && (+figure.parentNode.dataset.x == +tabBox.dataset.x + 2 || +figure.parentNode.dataset.x == +tabBox.dataset.x - 2)))) {
        if (tabBox.innerHTML == '' && tabBox.getAttribute("class").search("figureImg") == -1) {
            addFigureHasNOtParent(figure, tabBox)
        } else if (tabBox.innerHTML != '' && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) {
            figureEatTab(figure, tabBox)
        } else {
            figureNotMove(figure)
        }
    } else if (((+figure.parentNode.dataset.y + 2 == +tabBox.parentNode.dataset.y && (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 1 || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 1)) || (+figure.parentNode.dataset.y - 2 == +tabBox.parentNode.dataset.y && (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 1 || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 1)) || (+figure.parentNode.dataset.y + 1 == +tabBox.parentNode.dataset.y && (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 2 || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 2)) || (+figure.parentNode.dataset.y - 1 == +tabBox.parentNode.dataset.y && (+figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x + 2 || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x - 2))) && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))) {
        figureEat(figure, tabBox)
    } else {
        figureNotMove(figure)
    }
}


function rook(figure, tabBox) {

    if ((+figure.parentNode.dataset.y != +tabBox.dataset.y || +figure.parentNode.dataset.x != +tabBox.dataset.x) && ((+figure.parentNode.dataset.y == +tabBox.dataset.y || +figure.parentNode.dataset.x == +tabBox.dataset.x) || (tabBox.getAttribute("class").search("figureImg") != -1 && (+figure.parentNode.dataset.y == +tabBox.parentNode.dataset.y || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x)))) {
        let tabBoxY;
        let tabBoxX;
        if (tabBox.getAttribute("class").search("figureImg") != -1) {
            tabBoxY = +tabBox.parentNode.dataset.y
            tabBoxX = +tabBox.parentNode.dataset.x
        } else {
            tabBoxY = +tabBox.dataset.y
            tabBoxX = +tabBox.dataset.x
        }
        if ((+figure.parentNode.dataset.x == +tabBox.dataset.x) || (tabBox.getAttribute("class").search("figureImg") != -1 && +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x)) {
            if ((+figure.parentNode.dataset.y < +tabBox.dataset.y) || (tabBox.getAttribute("class").search("figureImg") != -1 && +figure.parentNode.dataset.y < +tabBox.parentNode.dataset.y)) {
                let temp = 0;

                for (let i = (+figure.parentNode.dataset.y) + 1; i <= tabBoxY; i++) {
                    if (document.querySelector(`.tableBox[data-x="${figure.parentNode.dataset.x}"][data-y="${i}"]`).innerHTML != '') {
                        if (i == tabBoxY && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {

                                rookKing(figure)

                                figureEat(figure, tabBox)
                            } else {

                                rookKing(figure)

                                figureEatTab(figure, tabBox)
                            }

                        } else {
                            temp = -1
                            break
                        }
                    } else {
                        if (i == tabBoxY) {
                            rookKing(figure)
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }
                }
                if (temp == -1) {
                    figureNotMove(figure)
                }
            } else {
                let temp = 0;
                for (let i = (+figure.parentNode.dataset.y) - 1; i >= tabBoxY; i--) {
                    if (document.querySelector(`.tableBox[data-x="${figure.parentNode.dataset.x}"][data-y="${i}"]`).innerHTML != '') {
                        if (i == tabBoxY && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                rookKing(figure)
                                figureEat(figure, tabBox)
                            } else {
                                rookKing(figure)
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            temp = -1
                            break
                        }
                    } else {
                        if (i == tabBoxY) {
                            rookKing(figure)
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }
                }
                if (temp == -1) {
                    figureNotMove(figure)
                }
            }


        } else if ((+figure.parentNode.dataset.y == +tabBox.dataset.y) || (tabBox.getAttribute("class").search("figureImg") != -1 && +figure.parentNode.dataset.y == +tabBox.parentNode.dataset.y)) {
            if ((+figure.parentNode.dataset.x < +tabBox.dataset.x) || (tabBox.getAttribute("class").search("figureImg") != -1 && +figure.parentNode.dataset.x < +tabBox.parentNode.dataset.x)) {
                let temp = 0;

                for (let i = (+figure.parentNode.dataset.x) + 1; i <= tabBoxX; i++) {
                    if (document.querySelector(`.tableBox[data-x="${i}"][data-y="${figure.parentNode.dataset.y}"]`).innerHTML != '') {
                        if (i == tabBoxX && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                rookKing(figure)
                                figureEat(figure, tabBox)
                            } else {
                                rookKing(figure)
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            temp = -1
                            break
                        }
                    } else {
                        if (i == tabBoxX) {
                            rookKing(figure)
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }
                }
                if (temp == -1) {
                    figureNotMove(figure)
                }
            } else {
                let temp = 0;
                for (let i = (+figure.parentNode.dataset.x) - 1; i >= tabBoxX; i--) {
                    if (document.querySelector(`.tableBox[data-x="${i}"][data-y="${figure.parentNode.dataset.y}"]`).innerHTML != '') {
                        if (i == tabBoxX && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                rookKing(figure)
                                figureEat(figure, tabBox)
                            } else {
                                rookKing(figure)
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            temp = -1
                            break
                        }
                    } else {
                        if (i == tabBoxX) {
                            rookKing(figure)
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }
                }
                if (temp == -1) {
                    figureNotMove(figure)
                }
            }
        } else {
            figureNotMove(figure)
        }

    } else {
        figureNotMove(figure)
    }

}


function elephant(figure, tabBox) {
    if (((+figure.parentNode.dataset.y != +tabBox.dataset.y && +figure.parentNode.dataset.x != +tabBox.dataset.x)) &&
        (((figure.parentNode.classList.contains('white') && tabBox.classList.contains('white')) || (figure.parentNode.classList.contains('black') && tabBox.classList.contains('black'))) || (((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1)))) && ((tabBox.getAttribute("class").search("figureImg") == -1 && (Math.abs(+figure.parentNode.dataset.y - (+tabBox.dataset.y)) == Math.abs(+figure.parentNode.dataset.x - (+tabBox.dataset.x)))) || (tabBox.getAttribute("class").search("figureImg") != -1 && (Math.abs(+figure.parentNode.dataset.y - (+tabBox.parentNode.dataset.y)) == Math.abs(+figure.parentNode.dataset.x - (+tabBox.parentNode.dataset.x)))))) {

        let tabBoxY;
        let tabBoxX;
        if (tabBox.getAttribute("class").search("figureImg") != -1) {
            tabBoxY = +tabBox.parentNode.dataset.y
            tabBoxX = +tabBox.parentNode.dataset.x
        } else {
            tabBoxY = +tabBox.dataset.y
            tabBoxX = +tabBox.dataset.x
        }

        if (+figure.parentNode.dataset.y < +tabBox.dataset.y || +figure.parentNode.dataset.y < +tabBox.parentNode.dataset.y) {
            if (+figure.parentNode.dataset.x < +tabBox.dataset.x || +figure.parentNode.dataset.x < +tabBox.parentNode.dataset.x) {

                for (let i = 1; i <= (tabBoxX - (+figure.parentNode.dataset.x)); ++i) {
                    if (document.querySelector(`.tableBox[data-x="${+figure.parentNode.dataset.x + i}"][data-y="${+figure.parentNode.dataset.y + i}"]`).innerHTML != '') {
                        if (i == (tabBoxX - (+figure.parentNode.dataset.x)) && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                figureEat(figure, tabBox)
                            } else {
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            figureNotMove(figure)
                            break
                        }

                    } else {
                        if (i == (tabBoxX - (+figure.parentNode.dataset.x))) {
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }

                }
            } else {
                for (let i = 1; i <= (+figure.parentNode.dataset.x - tabBoxX); ++i) {
                    if (document.querySelector(`.tableBox[data-x="${+figure.parentNode.dataset.x - i}"][data-y="${+figure.parentNode.dataset.y + i}"]`).innerHTML != '') {
                        if (i == (+figure.parentNode.dataset.x - tabBoxX) && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                figureEat(figure, tabBox)
                            } else {
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            figureNotMove(figure)
                            break
                        }
                    } else {
                        if (i == (+figure.parentNode.dataset.x - tabBoxX)) {
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }

                }
            }


        } else {

            if (+figure.parentNode.dataset.x < +tabBox.dataset.x || +figure.parentNode.dataset.x < +tabBox.parentNode.dataset.x) {

                for (let i = 1; i <= (tabBoxX - (+figure.parentNode.dataset.x)); ++i) {
                    if (document.querySelector(`.tableBox[data-x="${+figure.parentNode.dataset.x + i}"][data-y="${+figure.parentNode.dataset.y - i}"]`).innerHTML != '') {
                        if (i == (tabBoxX - (+figure.parentNode.dataset.x)) && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                figureEat(figure, tabBox)
                            } else {
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            figureNotMove(figure)
                            break
                        }
                    } else {
                        if (i == (tabBoxX - (+figure.parentNode.dataset.x))) {
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }

                }
            } else {
                for (let i = 1; i <= (+figure.parentNode.dataset.x - tabBoxX); ++i) {
                    if (document.querySelector(`.tableBox[data-x="${+figure.parentNode.dataset.x - i}"][data-y="${+figure.parentNode.dataset.y - i}"]`).innerHTML != '') {
                        if (i == (+figure.parentNode.dataset.x - tabBoxX) && ((tabBox.getAttribute("class").search("figureImg") == -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) || (tabBox.getAttribute("class").search("figureImg") != -1 && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))))) {
                            if (tabBox.getAttribute("class").search("figureImg") != -1) {
                                figureEat(figure, tabBox)
                            } else {
                                figureEatTab(figure, tabBox)
                            }
                        } else {
                            figureNotMove(figure)
                            break
                        }
                    } else {
                        if (i == (+figure.parentNode.dataset.x - tabBoxX)) {
                            addFigureHasNOtParent(figure, tabBox)
                            break
                        }
                    }

                }
            }



        }
    } else {
        figureNotMove(figure)
    }
}


function queen(figure, tabBox) {
    if ((+figure.parentNode.dataset.y != +tabBox.dataset.y || +figure.parentNode.dataset.x != +tabBox.dataset.x) && ((+figure.parentNode.dataset.y == +tabBox.dataset.y || +figure.parentNode.dataset.x == +tabBox.dataset.x) || (tabBox.getAttribute("class").search("figureImg") != -1 && (+figure.parentNode.dataset.y == +tabBox.parentNode.dataset.y || +figure.parentNode.dataset.x == +tabBox.parentNode.dataset.x)))) {
        rook(figure, tabBox)
    } else {
        elephant(figure, tabBox)
    }
}

function king(figure, tabBox) {
    let tabX;
    let tabY;

    if (tabBox.classList.contains('figureImg')) {
        tabX = +tabBox.parentNode.dataset.x
        tabY = +tabBox.parentNode.dataset.y
    } else {
        tabX = +tabBox.dataset.x
        tabY = +tabBox.dataset.y
    }


    if ((+figure.parentNode.dataset.y + 1 == tabY && +figure.parentNode.dataset.x == tabX) ||
        (+figure.parentNode.dataset.y + 1 == tabY && +figure.parentNode.dataset.x + 1 == tabX) ||
        (+figure.parentNode.dataset.y + 1 == tabY && +figure.parentNode.dataset.x - 1 == tabX) ||
        (+figure.parentNode.dataset.y - 1 == tabY && +figure.parentNode.dataset.x == tabX) ||
        (+figure.parentNode.dataset.y - 1 == tabY && +figure.parentNode.dataset.x + 1 == tabX) ||
        (+figure.parentNode.dataset.y - 1 == tabY && +figure.parentNode.dataset.x - 1 == tabX) ||
        (+figure.parentNode.dataset.y == tabY && +figure.parentNode.dataset.x + 1 == tabX) ||
        (+figure.parentNode.dataset.y == tabY && +figure.parentNode.dataset.x - 1 == tabX)
    ) {
        if (tabBox.classList.contains('figureImg') && ((figure.getAttribute("class").search("white") != -1 && tabBox.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.getAttribute("class").search("white") != -1))) {
            if (kingBlack == 0 && figure.getAttribute("class").search("black") != -1) {
                kingBlack = 1
            } else if (kingWhite == 0 && figure.getAttribute("class").search("white") != -1) {
                kingWhite = 1
            }
            figureEat(figure, tabBox)
        } else if (!tabBox.classList.contains('figureImg') && tabBox.innerHTML == '') {
            if (kingBlack == 0 && figure.getAttribute("class").search("black") != -1) {
                kingBlack = 1
            } else if (kingWhite == 0 && figure.getAttribute("class").search("white") != -1) {
                kingWhite = 1
            }
            addFigureHasNOtParent(figure, tabBox)
        } else if (!tabBox.classList.contains('figureImg') && ((figure.getAttribute("class").search("white") != -1 && tabBox.firstChild.getAttribute("class").search("black") != -1) || (figure.getAttribute("class").search("black") != -1 && tabBox.firstChild.getAttribute("class").search("white") != -1))) {
            if (kingBlack == 0 && figure.getAttribute("class").search("black") != -1) {
                kingBlack = 1
            } else if (kingWhite == 0 && figure.getAttribute("class").search("white") != -1) {
                kingWhite = 1
            }
            figureEatTab(figure, tabBox)
        } else {
            figureNotMove(figure)
        }

    } else if ((kingWhite == 0 || kingBlack == 0) && !tabBox.classList.contains('figureImg') && ((+figure.parentNode.dataset.y == 1 && +figure.parentNode.dataset.x == 5) || (+figure.parentNode.dataset.y == 8 && +figure.parentNode.dataset.x == 5)) && ((+tabBox.dataset.y == 1 && +tabBox.dataset.x == 7) || (+tabBox.dataset.y == 1 && +tabBox.dataset.x == 3) || (+tabBox.dataset.y == 8 && +tabBox.dataset.x == 3) || (+tabBox.dataset.y == 8 && +tabBox.dataset.x == 7))) {

        if (kingWhite == 0 && figure.getAttribute('class').search('white') != -1 && (+tabBox.dataset.y == 1 && +tabBox.dataset.x == 7) || (+tabBox.dataset.y == 1 && +tabBox.dataset.x == 3)) {

            if (rookWhite81 == 0 && +tabBox.dataset.y == 1 && +tabBox.dataset.x == 7 && document.querySelector(`.tableBox[data-x="6"][data-y="1"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="8"][data-y="1"]`).innerHTML != '' && document.querySelector(`.tableBox[data-x="8"][data-y="1"]`).firstChild.classList.contains('whiteRook')) {
                addFigureHasNOtParent(figure, tabBox, 0)
                addFigureHasNOtParent(document.querySelector(`.tableBox[data-x="8"][data-y="1"]`).firstChild, document.querySelector(`.tableBox[data-x="6"][data-y="1"]`))

                kingWhite = 1
                console.log(kingWhite)
            } else if (rookWhite11 == 0 && +tabBox.dataset.y == 1 && +tabBox.dataset.x == 3 && document.querySelector(`.tableBox[data-x="4"][data-y="1"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="2"][data-y="1"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="1"][data-y="1"]`).innerHTML != '' && document.querySelector(`.tableBox[data-x="1"][data-y="1"]`).firstChild.classList.contains('whiteRook')) {
                addFigureHasNOtParent(figure, tabBox, 0)
                addFigureHasNOtParent(document.querySelector(`.tableBox[data-x="1"][data-y="1"]`).firstChild, document.querySelector(`.tableBox[data-x="4"][data-y="1"]`))

                kingWhite = 1
                console.log(kingWhite)
            } else {
                figureNotMove(figure)
            }


        } else if (kingBlack == 0 && figure.getAttribute('class').search('black') != -1 && (+tabBox.dataset.y == 8 && +tabBox.dataset.x == 7) || (+tabBox.dataset.y == 8 && +tabBox.dataset.x == 3)) {
            if (rookBlack88 == 0 && +tabBox.dataset.y == 8 && +tabBox.dataset.x == 7 && document.querySelector(`.tableBox[data-x="6"][data-y="8"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="8"][data-y="8"]`).innerHTML != '' && document.querySelector(`.tableBox[data-x="8"][data-y="8"]`).firstChild.classList.contains('blackRook')) {
                addFigureHasNOtParent(figure, tabBox, 0)
                addFigureHasNOtParent(document.querySelector(`.tableBox[data-x="8"][data-y="8"]`).firstChild, document.querySelector(`.tableBox[data-x="6"][data-y="8"]`))

                kingBlack = 1
            } else if (rookBlack18 == 0 && +tabBox.dataset.y == 8 && +tabBox.dataset.x == 3 && document.querySelector(`.tableBox[data-x="4"][data-y="8"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="2"][data-y="8"]`).innerHTML == '' && document.querySelector(`.tableBox[data-x="1"][data-y="8"]`).innerHTML != '' && document.querySelector(`.tableBox[data-x="1"][data-y="8"]`).firstChild.classList.contains('blackRook')) {
                addFigureHasNOtParent(figure, tabBox, 0)
                addFigureHasNOtParent(document.querySelector(`.tableBox[data-x="1"][data-y="8"]`).firstChild, document.querySelector(`.tableBox[data-x="4"][data-y="8"]`))

                kingBlack = 1
            } else {
                figureNotMove(figure)
            }
        }

    } else {
        figureNotMove(figure)
    }
}