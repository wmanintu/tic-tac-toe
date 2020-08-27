const Board = require('./board')
const Player = require('./player')
const util = require('./util')
console.log(util)

var board = new Board()
var playerX = new Player('Player1', 'X')
var playerY = new Player('Player2', 'O')

var currentPlayer = playerX.getPlayer()

//INIT GAME
console.log('Welcome this is your board:')
console.log(board.printBoard())
console.log(currentPlayer.name + ' (' + currentPlayer.type + ') ')

process.stdin.on('data', (input) => {
    var location = board.handleLocationInput(input.toString())
    board.setBoard(location[0], location[1], currentPlayer.type) // END TURN

    // CHECK FOR WINNER
    var result = board.checkDai(currentPlayer.type)
    if (result === true) {
        // WIN : CLEAR Board
        console.log(currentPlayer.name + ' WINNER!')
        board.clearBoard()
    }
    
    // SWITCH PLAYER
    currentPlayer = util.switchPlayer(playerX, playerY, currentPlayer)
    console.log(currentPlayer.name + ' (' + currentPlayer.type + ') ')
    console.log(board.printBoard())
})

process.stdin.on('end', () => {
    console.log('end')
})