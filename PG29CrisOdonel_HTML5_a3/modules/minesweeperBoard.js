class MinesweeperBoard {
    constructor(rows, columns, containerId) {
        this.containerId = containerId;
        this.rows = rows;
        this.columns = columns;
        this.board = this.createBoard();
        this.revealedBoard = this.createBoard();

        // dictionary for all images lol
        this.imageMap = {
            '0': 'Images/emptyTile.png',
            '1': 'Images/1mine.png',
            '2': 'Images/2mine.png',
            '3': 'Images/3mine.png',
            '4': 'Images/4mine.png',
            '5': 'Images/5mine.png',
            '6': 'Images/6mine.png',
            '7': 'Images/7mine.png',
            '8': 'Images/8mine.png',
            '': 'Images/uncoveredTile.png',
            'mine': 'Images/mineTile.png',
            'mineX': 'Images/mineTile.png',
            'flag': 'Images/flagTile.png',
        };
    }

    createBoard() {
        return Array.from({ length: this.rows * this.columns }, () => '');
    }

    renderBoard(containerId) {
        const container = document.getElementById(containerId);

        container.innerHTML = '';
        for (let index = 0; index < this.revealedBoard.length; index++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = index;

            //update the cell to have image
            const value = this.revealedBoard[index];
            const img = document.createElement('img')
            img.src = this.imageMap[value] || this.imageMap[''];

            img.classList.add('cell-image');2

            cell.appendChild(img);
            container.appendChild(cell);
        }
    }

    renderBoardDefault() {
        // just in case renderboard is called without an id we default to the one we stored
        this.renderBoard(this.containerId);
    }

    updateCell(index, value) {
        this.board[index] = value;
    }

    revealCell(index){
        this.revealedBoard[index] = this.board[index];
    }

    reset() {
        this.board = this.createBoard();
    }
}

export default MinesweeperBoard;