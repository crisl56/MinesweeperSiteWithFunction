import MinesweeperBoard from "../modules/minesweeperBoard.js";
import MinesweeperLogic from "../modules/minesweeperLogic.js";
import UserInput from "../modules/userInput.js"

class MinesweeperEngine {
    constructor(containerId, rows, columns) {
        this.containerId = containerId;

        // Setup all stuff
        this.gameBoard = new MinesweeperBoard(rows, columns, containerId);
        this.gameLogic = new MinesweeperLogic(this.gameBoard, 10);
        this.UserInput = new UserInput(this.gameLogic);

        this.gameBoard.renderBoard(this.containerId);
    }
}

export default MinesweeperEngine;