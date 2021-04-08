const chessTable = document.querySelector('.chessTable');
let temp = 1;
let count = 0;
let kingWhite = 0;
let kingBlack = 0;
let rookWhite11 = 0;
let rookBlack18 = 0;
let rookWhite81 = 0;
let rookBlack88 = 0;
let audio = document.querySelector('.audio');


for (let i = 1; i <= 8; ++i) {
    for (let j = 1; j <= 8; ++j) {
        let square = document.createElement('div')
        square.dataset.x = j;
        square.dataset.y = 9 - i;
        if (temp % 2) {
            square.classList.add('tableBox', 'white')
            //   console.log( square)
        } else {
            // console.log( square)
            square.classList.add('tableBox', 'black')
        }
        chessTable.append(square);
        // if((i == 1 && j == 1)){
        // square.innerHTML = `<img class ="figureImg" draggable ="true" >`
        // }
        temp++
    }
    temp++
}






let tableBox = document.querySelectorAll('.tableBox')

tableBox.forEach(elem => {

    elem.addEventListener('mouseup', (e) => {
      
        if (e.target.classList.contains('chessFigure')) {
            e.target.hidden = true
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            e.target.hidden = false

            // console.log(elemBelow.classList.contains('tableBox'))
            if (!elemBelow.classList.contains('tableBox') && !elemBelow.classList.contains('figureImg')) {
                figureNotMove(e.target)
            } else {
                switch (e.target.getAttribute('id')) {
                    case 'Pawn':
                        pawn(e.target, elemBelow)
                        break
                    case 'Hors':
                        hors(e.target, elemBelow)
                        break
                    case 'Rook':
                        rook(e.target, elemBelow)
                        break
                    case 'Elephant':
                        elephant(e.target, elemBelow)
                        break
                    case 'Queen':
                        queen(e.target, elemBelow)
                        break
                    case 'King':
                        king(e.target, elemBelow)
                        break
                }
            }


            //     if(((e.target.getAttribute("class").search("Pawn") != -1) && (+elemBelow.dataset.y == +(e.target.parentNode.dataset.y) + 1))){

            //     if (elemBelow.classList.contains('tableBox') && !elemBelow.hasChildNodes()) {

            //         let el = e.target
            //         console.log(elemBelow)
            //         e.target.removeAttribute("style")

            //         elemBelow.append(e.target)
            //         count++
            //         whoMove(figureImg)

            //     } else if (elemBelow.classList.contains('tableBox') && ((e.target.getAttribute("class").search("white") != elemBelow.firstChild.getAttribute("class").search("white")) && (e.target.getAttribute("class").search("black") != elemBelow.firstChild.getAttribute("class").search("black")) ) ){
            //         console.log('************************')
            //         e.target.removeAttribute("style")
            //         elemBelow.innerHTML = ''
            //         elemBelow.append(e.target)
            //         count ++
            //         whoMove(figureImg)
            //     } else if(elemBelow.classList.contains('chessFigure')&& ((e.target.getAttribute("class").search("white") != elemBelow.getAttribute("class").search("white")) && (e.target.getAttribute("class").search("black") != elemBelow.getAttribute("class").search("black")) ) ){
            //         e.target.removeAttribute("style")
            //         elemBelow.parentNode.append(e.target)
            //         console.log(elemBelow.parentNode)
            //         elemBelow.remove()

            //         count ++
            //         whoMove(figureImg)
            //     }else {
            //         e.target.removeAttribute("style")
            //         whoMove(figureImg)
            //     }
            // }else{
            //     e.target.removeAttribute("style")
            //     whoMove(figureImg)
            // }

        }
    })
})


function addImg() {
    tableBox.forEach((elem, index) => {
        if (elem.dataset.y == 1 || elem.dataset.y == 2 || elem.dataset.y == 7 || elem.dataset.y == 8) {
            elem.innerHTML = `<img class ="figureImg" draggable="false" >`;
        }
    })
}

addImg();

// /=====================================/ 
function addFigure(figureImg) {

    for (let i = 0; i < figureImg.length; ++i) {
        figureImg[i].classList.add('chessFigure')
        if (i > 7 && i < 16) {
            figureImg[i].classList.add('blackPawn')
            figureImg[i].setAttribute('src', 'img/blackPawn.png')
            figureImg[i].setAttribute('id', 'Pawn')
        }
        if (i > 15 && i < 24) {
            figureImg[i].classList.add('whitePawn')
            figureImg[i].setAttribute('src', 'img/whitePawn.png')
            figureImg[i].setAttribute('id', 'Pawn')
        }

        switch (i) {
            case 0:
            case 7:
                figureImg[i].classList.add('blackRook')
                figureImg[i].setAttribute('src', 'img/blackRook.png')
                figureImg[i].setAttribute('id', 'Rook')
                break
            case 1:
            case 6:
                figureImg[i].classList.add('blackHors')
                figureImg[i].setAttribute('src', 'img/blackHors.png')
                figureImg[i].setAttribute('id', 'Hors')
                break
            case 2:
            case 5:
                figureImg[i].classList.add('blackElephant')
                figureImg[i].setAttribute('src', 'img/blackElephant.png')
                figureImg[i].setAttribute('id', 'Elephant')
                break
            case 3:
                figureImg[i].classList.add('blackQueen')
                figureImg[i].setAttribute('src', 'img/blackQueen.png')
                figureImg[i].setAttribute('id', 'Queen')
                break
            case 4:
                figureImg[i].classList.add('blackKing')
                figureImg[i].setAttribute('src', 'img/blackKing.png')
                figureImg[i].setAttribute('id', 'King')
                break

            case 24:
            case 31:
                figureImg[i].classList.add('whiteRook')
                figureImg[i].setAttribute('src', 'img/whiteRook.png')
                figureImg[i].setAttribute('id', 'Rook')
                break
            case 25:
            case 30:
                figureImg[i].classList.add('whiteHors')
                figureImg[i].setAttribute('src', 'img/whiteHors.png')
                figureImg[i].setAttribute('id', 'Hors')
                break
            case 26:
            case 29:
                figureImg[i].classList.add('whiteElephant')
                figureImg[i].setAttribute('src', 'img/whiteElephant.png')
                figureImg[i].setAttribute('id', 'Elephant')
                break
            case 27:
                figureImg[i].classList.add('whiteQueen')
                figureImg[i].setAttribute('src', 'img/whiteQueen.png')
                figureImg[i].setAttribute('id', 'Queen')
                break
            case 28:
                figureImg[i].classList.add('whiteKing')
                figureImg[i].setAttribute('src', 'img/whiteKing.png')
                figureImg[i].setAttribute('id', 'King')
                break
        }

    }

}

let figureImg = document.querySelectorAll('.figureImg')
addFigure(figureImg)
let figureImgWhite = []
let figureImgBlack = []
figureImg.forEach((el, ind) => {
    if (el.getAttribute("class").search('white') != -1) {
        figureImgWhite.push(el)
    } else {
        figureImgBlack.push(el)
    }
})

console.log(figureImgWhite)
console.log(figureImgBlack)

document.querySelector('.restart').addEventListener('click', (e) => {
    tableBox.forEach(elem => {
        elem.innerHTML = '';
    })
    addImg();
    figureImg = document.querySelectorAll('.figureImg')
    addFigure(figureImg)

    rookWhite11 = 0;
    rookBlack18 = 0;
    rookWhite81 = 0;
    rookBlack88 = 0;
    kingWhite = 0;
    kingBlack = 0;
    count = 0;
    whoMove()
})



function posFigure(figureImg, color) {


    for (let i = 0; i < figureImg.length; ++i) {
        if (figureImg[i].classList.contains('chessFigure')) {
            figureImg[i].onmousedown = function (e) {





                figureImg[i].style.position = 'absolute'
                figureImg[i].style.zIndex = 1000;
                moveAt(e.pageX, e.pageY);


                function moveAt(pageX, pageY) {
                    figureImg[i].style.left = pageX - figureImg[i].offsetWidth / 2 + 'px';
                    figureImg[i].style.top = pageY - figureImg[i].offsetHeight / 2 + 'px';
                }

                document.onmousemove = function (e) {
                    moveAt(e.pageX, e.pageY);

                }

                figureImg[i].addEventListener('mouseup', (e) => {

                    document.onmousemove = null;
                    figureImg[i].onmouseup = null;

                    for (let i = 0; i < figureImg.length; ++i) {
                        if (color == 1) {
                          
                                figureImgBlack[i].onmousedown = null
                            
                        }
                        if (color == 0) {
                            
                                figureImgWhite[i].onmousedown = null

                            
                        }
                    }

                })

                figureImg[i].ondragstart = function () {
                    return false;
                };






            }

        }
    }


}

// posFigure(figureImg, 0)

function whoMove() {

    if (count % 2 == 0) {
        posFigure(figureImgWhite, 0)

    } else {
        posFigure(figureImgBlack, 1)

    }
}

whoMove()


let damaWhite = document.getElementById('damaWhite')
let damaBlack = document.getElementById('damaBlack')

damaWhite.addEventListener('click', (e) => {
    if (e.target.classList.contains('damaImg')) {
        for (let i = 0; i <= 7; i++) {
            if (tableBox[i].firstChild.classList.contains('whitePawn')) {
                tableBox[i].innerHTML = `<img class="figureImg chessFigure white${e.target.getAttribute('id')}" draggable="false" src="img/white${e.target.getAttribute('id')}.png" id="${e.target.getAttribute('id')}">`
                document.querySelector('.wrapNoCursor1').classList.add('damaNone')
                figureImgWhite.push(tableBox[i].firstChild)
                break
            }
        }
    }
})


damaBlack.addEventListener('click', (e) => {
    if (e.target.classList.contains('damaImg')) {
        for (let i = 56; i <= 63; i++) {
            if (tableBox[i].firstChild.classList.contains('blackPawn')) {
                tableBox[i].innerHTML = `<img class="figureImg chessFigure black${e.target.getAttribute('id')}" draggable="false" src="img/black${e.target.getAttribute('id')}.png" id="${e.target.getAttribute('id')}">`
                document.querySelector('.wrapNoCursor2').classList.add('damaNone')
                figureImgBlack.push(tableBox[i].firstChild)
                break
            }
        }
    }
})