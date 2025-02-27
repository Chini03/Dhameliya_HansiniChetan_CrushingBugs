let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;

function changeBGImage() {
    // console.log('chagedbg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    //bug fix #2: should do here, fairly short
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