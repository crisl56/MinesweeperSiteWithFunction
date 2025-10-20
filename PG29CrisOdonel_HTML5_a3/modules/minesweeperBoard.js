class MinesweeperBoard {
    constructor(rows, columns, containerId) {
        this.containerId = containerId;
        this.rows = rows;
        this.columns = columns;
        this.board = this.createBoard();
        this.revealedBoard = this.createBoard();
    }

    createBoard() {
        return Array.from({ length: this.rows * this.columns }, () => '');
    }

    renderBoard(containerId) {
        const container = document.getElementById(containerId);

        container.innerHTML = '';
        for (let index = 0; index < this.board.length; index++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = index;

            cell.textContent = this.board[index] || '';

            container.appendChild(cell);
        }
    }

    renderBoardDefault() {
        this.renderBoard(this.containerId);
    }

    updateCell(index, value) {
        this.board[index] = value;
    }

    reset() {
        this.board = this.createBoard();
    }
}

export default MinesweeperBoard;