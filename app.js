const Board = require('./board')
const Player = require('./player')

var board = new Board()
var playerX = new Player('Player1', 'X')
var playerY = new Player('Player2', 'O')

var currentPlayer = playerX.getPlayer()

//INIT GAME
console.log('Welcome this is your board:')
console.log(board.printBoard())
console.log(currentPlayer.name + ' (' + currentPlayer.type + ') ')

process.stdin.on('data', (input) => {
    
})

process.stdin.on('end', () => {
    console.log('end')
})