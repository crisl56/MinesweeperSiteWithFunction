class MinesweeperLogic {
    constructor(gameBoard, mines) {
        this.gameBoard = gameBoard;
        this.mines = mines;
        this.gameOver = false;
        this.hasMadeBoard = false;

        // Create tiles or something
    }

    InitializeBoard(playerIndex) {

        // This creates the mines
        this.createMines(playerIndex);

        // This checks all the cells in the board to see if they're near a mine
        this.checkAllCells();

        this.hasMadeBoard = true;
    }

    // createsMines
    createMines(playerIndex) {
        let i = 0;
        // Loop until we have the same number of mines
        while (i < this.mines) {
            // Get a random pos
            let randomIndex = Math.floor(Math.random() * this.gameBoard.board.length);

            // check if that position is where the player clicked or if it is already a mine
            // get another random index if it is
            if (randomIndex == playerIndex || this.gameBoard.board[randomIndex] == "mine") { continue; }

            // Set the cell to mine
            this.gameBoard.updateCell(randomIndex, "mine");

            i++
        }
        //this.gameBoard.renderBoard('game-container');

    }

    checkAllCells() {

        // 3 nested for loops lets gooo!!!!
        for (let i = 0; i < this.gameBoard.board.length; i++) { // Loop code through every cell

            const y = Math.floor(i / this.gameBoard.columns);
            const x = i % this.gameBoard.columns;

            if (this.check(x, y) == 1) { continue; } // skip that tile if it is a mine

            let numOfMinesNear =
                this.check(x - 1, y - 1) + // diagonally top left
                this.check(x, y - 1) + // top 
                this.check(x + 1, y - 1) + // diagonally top right
                this.check(x - 1, y) + // same level left
                this.check(x + 1, y) + // same level right
                this.check(x - 1, y + 1) + // diagonally bottom left
                this.check(x, y + 1) + // bottom
                this.check(x + 1, y + 1); // diagonally bottom right

            this.gameBoard.updateCell(i, numOfMinesNear); // update the cell

        }
    }

    // Row-major order
    // Checks and returns the value of the tile using the codinates of the tile. (0,0) is the upper left corner
    // Example:
    // (0,0) (1,0) (2,0) (3,0)
    // (0,1) (1,1) (2,1) (3,1)
    // (0,2) (1,2) (2,2) (3,2)
    // (0,3) (1,3) (2,3) (3,3)
    // (0,4) (1,4) (2,4) (3,4)
    // (2,1) == [6]
    check(x, y) {

        // Check if we are inside the board 
        if (!((x >= 0 && y >= 0) && (x <= this.gameBoard.columns && y <= this.gameBoard.rows))) { return 0; }

        // Check that slot
        const indexToCheck = y * this.gameBoard.columns + x; // formula that checks that index

        if (this.gameBoard.board[indexToCheck] == "mine") { return 1; }
        else { return 0; }
    }

    makeMove(index) {
        if (this.gameOver || this.gameBoard.revealedBoard[index]) return;

        if (!this.hasMadeBoard) {
            this.InitializeBoard(index);
        }

        this.gameBoard.revealCell(index);

        this.gameBoard.renderBoardDefault();
    }
}

export default MinesweeperLogic;