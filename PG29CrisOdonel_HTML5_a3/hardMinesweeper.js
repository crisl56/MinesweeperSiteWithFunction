import MinesweeperEngine from './libraries/minesweeperEngine.js';

// Doing this for readability in the constructor
const columns = 22;
const rows = 22;
const mines = 99;

const game = new MinesweeperEngine('game-container', rows, columns, mines);