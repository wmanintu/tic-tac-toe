var Board = require('../board')
var board = new Board()

test('board is array', function () {
    expect(Array.isArray(board.getBoard())).toBe(true)
})

test('assign X to [0,0] matrix', function () {
    board.setBoard(0, 0, 'X')
    board.getBoard()
    expect(board.getBoard()[0][0]).toBe('X')
})