let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    gameBoard = document.querySelector('.puzzle-pieces'), // for bug #2
    puzzlePieceTopLeft = document.querySelector('#topLeft'), // for bonus bug
    puzzlePieceTopRight = document.querySelector('#topRight'), // for bonus bug
    puzzlePieceBottomLeft = document.querySelector('#bottomLeft'), // for bonus bug
    puzzlePieceBottomRight = document.querySelector('#bottomRight'), // for bonus bug
    draggedPiece;

function changeBGImage() {
    // console.log('chagedbg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    //bug fix #2: should do here, fairly short
    // checks if theres a first child, if yes appends it back to the main parent, the gameboard otherwise outputs empty
    dropZones.forEach(zone => {
        if (!zone.firstChild){ // i learned that firstchild functions doesnt return true or false so i used notFirstChild = !zone.firstChild to check if null or not
            console.log("Empty")
        }
        else {
            gameBoard.appendChild(zone.firstChild); //draggedPiece removes this instance wholly instaed of cloning it so i replaced it with zone.firstchild which would leave the draddge piece container be and focus on the children of the zones.
        }
    });


    // to change the puzzle piece image, same logic as the backgroundImage change
    puzzlePieceTopLeft.setAttribute("src", `images/topLeft${this.id}.jpg`);
    puzzlePieceTopRight.setAttribute("src", `images/topRight${this.id}.jpg`);
    puzzlePieceBottomLeft.setAttribute("src", `images/bottomLeft${this.id}.jpg`);
    puzzlePieceBottomRight.setAttribute("src", `images/bottomRight${this.id}.jpg`);
}

function handlesStartDrag() {
    console.log('Started Dragging this piece: ', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log('Dragged Over');
}

function handleDrop(e) {
    console.log('dropped');
    e.preventDefault();
    //bug fix #1: should do here, its fairly short
    // checks if child count is greater than 0 and if yes, outputs "occupied" otherwise appends the piece to drop it onto the zone
    if (this.childElementCount > 0) {
        console.log("Occupied")
    }
    else {
        this.appendChild(draggedPiece);
    }

}

theButtons.forEach(button => button.addEventListener('click', changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handlesStartDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));