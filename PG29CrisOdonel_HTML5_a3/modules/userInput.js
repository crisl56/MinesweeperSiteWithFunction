class UserInput {
    constructor(gameLogic, containerId) {
        this.gameLogic = gameLogic;
        this.containerId = containerId;

        this.boundHandler = this.handleClick.bind(this);

        this.addEventListeners();
    }

    addEventListeners() {
        const container = document.getElementById(this.containerId);

        if(!container) {return;}

        container.addEventListener('mousedown', this.boundHandler);
        container.addEventListener('contextmenu', (e) => e.preventDefault()); 
    }

    handleClick(event) {
        const cell = event.target.closest('.cell');

        if (!cell) return;
        const index = parseInt(cell.dataset.index, 10);

        if(event.button == 0){ this.gameLogic.makeMove(index); }
        else if (event.button == 2) { this.gameLogic.toggleFlag(index);}
    }
}

export default UserInput;