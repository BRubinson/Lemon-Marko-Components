module.exports = class {
    handleItemClick(data) {
        this.emit('item-click',data)
    }
}