function Player (name, type) {
    this.name = name
    this.type = type
}
Player.prototype.getPlayer = function () {
    return { name: this.name, type: this.type }
}

module.exports = Player