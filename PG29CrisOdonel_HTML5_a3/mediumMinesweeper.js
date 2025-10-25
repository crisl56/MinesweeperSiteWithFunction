import MinesweeperEngine from './libraries/minesweeperEngine.js';

// Doing this for readability in the constructor
const columns = 16;
const rows = 16;
const mines = 40;

const game = new MinesweeperEngine('game-container', rows, columns, mines);