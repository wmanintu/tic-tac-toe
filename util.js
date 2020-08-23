const switchPlayer = function (playerX, playerY, current) {
    if (current.type === 'X') { return playerY }
    else { return playerX }
}

module.exports = {
    switchPlayer
}