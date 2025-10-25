import MinesweeperEngine from './libraries/minesweeperEngine.js';

// Doing this for readability in the constructor
const columns = 9;
const rows = 9;
const mines = 10;

const game = new MinesweeperEngine('game-container', rows, columns, mines);