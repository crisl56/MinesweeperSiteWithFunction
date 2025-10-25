import MinesweeperBoard from "../modules/minesweeperBoard.js";
import MinesweeperLogic from "../modules/minesweeperLogic.js";
import UserInput from "../modules/userInput.js"

class MinesweeperEngine {
    constructor(containerId, rows, columns, mines) {
        this.containerId = containerId;

        // Setup all stuff
        this.gameBoard = new MinesweeperBoard(rows, columns, containerId);
        this.gameLogic = new MinesweeperLogic(this.gameBoard, mines);
        this.UserInput = new UserInput(this.gameLogic, containerId);

        this.gameBoard.renderBoard(this.containerId);

        this.resetBtn = document.getElementById('reset');

        this.resetBtn?.addEventListener('click', () => {
            this.gameLogic.reset();
        })
    }
}

export default MinesweeperEngine;