function Board() {
    this.board = [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
    ]
    this.min = 0
    this.max = 2
}

Board.prototype.getBoard = function () {
    return this.board
}
Board.prototype.setBoard = function (x, y, type) {
    this.board[x][y] = type
}
Board.prototype.handleLocationInput = function (data) {
    var dataArray = data.split('')
    if (dataArray.length >= 3) {
        return [parseInt(dataArray[0]), parseInt(dataArray[2])]
    } else {
        return []
    }
}
Board.prototype.printBoard = function () {
    return this.getBoard().join('\n')
}
Board.prototype.checkHorizontal = function (type) {
    var result = false
    for(var x = 0; x <= 2; x++) {
        var count = 0
        for(var y = 0; y <=2; y++) {
            if (this.board[x][y] === type) { count++ }
            if (count === 3) { 
                result = true
            }
        }
    }
    return result
}
Board.prototype.checkVerticle = function (type) {
    var result = false
    for(var y = 0; y <=2; y++) {
        var count = 0
        for(var x = 2; x >= 0; x--) {
            console.log(this.board[x][y])
            if (this.board[x][y] === type) { count++ }
            if (count === 3) { 
                result = true
            }
        }
    }
    return result
}
Board.prototype.checkDai = function (type) {
    var s = 2
    var bs = 0
    var sCount = 0
    var bsCount = 0

    for(var x = 0; x <= 2; x++) {
        for(var y = 0; y <= 2; y++) {}
        console.log(this.board[x][s])
        if (this.board[x][bs] === type) { bsCount++ }
        if (this.board[x][s] === type) { sCount++ }
        s--
        bs++
    }

    if(sCount === 3 || bsCount === 3) {
        return true
    } else {
        return false
    }
}
Board.prototype.clearBoard = function () {
    this.board = [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
    ]
}
module.exports = Board