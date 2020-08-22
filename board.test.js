var Board = require('./board')
var board = new Board()

test('board is array', function () {
    expect(Array.isArray(board.getBoard())).toBe(true)
})