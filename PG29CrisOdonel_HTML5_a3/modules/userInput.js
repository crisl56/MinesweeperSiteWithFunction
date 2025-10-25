class UserInput {
    constructor(gameLogic, containerId) {
        this.gameLogic = gameLogic;
        this.containerId = containerId;

        this.boundHandler = this.handleClick.bind(this);

        this.addEventListeners();
    }

    addEventListeners() {
        const container = document.getElementById(this.containerId);
        container?.addEventListener('click', this.boundHandler);
    }

    handleClick(event) {
        const cell = event.target.closest('.cell');

        if (!cell) return;
        const index = parseInt(cell.dataset.index, 10);

        this.gameLogic.makeMove(index);
    }
}

export default UserInput;