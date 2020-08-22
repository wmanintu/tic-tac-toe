function Board() {
    this.board = [
        ['-1','-4','-7'],
        ['-2','-5','-8'],
        ['-3','-6','-9']
    ]
    this.min = 0
    this.max = 2
}

Board.prototype.getBoard = function () {
    return this.board
}

module.exports = Board