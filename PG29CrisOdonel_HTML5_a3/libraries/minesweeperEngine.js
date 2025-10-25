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

        // Add Reset Button
        this.resetBtn = document.getElementById('reset');

        this.resetBtn?.addEventListener('click', () => {
            this.gameLogic.reset();
        })

        // Change the container style to match the columns
        this.container = document.getElementById(containerId);

        this.container.style.gridTemplateColumns = `repeat(${columns}, 100px)`;
    }
}

export default MinesweeperEngine;