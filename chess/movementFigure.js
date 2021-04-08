function addFigureHasNOtParent(fig, tab, p = 1) {
    fig.removeAttribute("style")
    tab.append(fig)

    if (p) {
        audio.innerHTML = '<audio src="mp3/addFigure.mp3" autoplay></audio>'
        // audio.innerHTML = ''
        count++
        whoMove()
    }
}

function figureNotMove(fig) {
    // audio.innerHTML = '<audio src="mp3/notM.mp3" autoplay></audio>'
    fig.removeAttribute("style")
    whoMove()
}


function figureEat(fig, tab) {
    audio.innerHTML = '<audio src="mp3/eatFigure.mp3" autoplay></audio>'
        // audio.innerHTML = ''
    fig.removeAttribute("style")
    tab.parentNode.append(fig)
    tab.remove()
    count++
    whoMove()

}

function figureEatTab(fig, tab) {
    audio.innerHTML = '<audio src="mp3/eatFigure.mp3" autoplay></audio>'
        // audio.innerHTML = ''
    fig.removeAttribute("style")
    tab.innerHTML = ''
    tab.append(fig)
    count++
    whoMove()
}


function rookKing(figure){
    if (figure.getAttribute("class").search("black") != -1) {
        if(rookBlack18 == 0 && figure.parentNode.dataset.y == 8 && figure.parentNode.dataset.x == 1){
            rookBlack18 = 1
        }
        if(rookBlack88 == 0 && figure.parentNode.dataset.y == 8 && figure.parentNode.dataset.x == 8){
            rookBlack88 = 1
        }
    } else {
        if(rookWhite11 == 0 && figure.parentNode.dataset.y == 1 && figure.parentNode.dataset.x == 1){
            rookWhite11 ==1
        }
        if(rookWhite81 == 0 && figure.parentNode.dataset.y == 1 && figure.parentNode.dataset.x == 8){
            rookWhite81 = 1
        }
    }
}