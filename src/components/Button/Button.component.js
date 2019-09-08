module.exports = class {
    handleClick(){
        this.emit('click', {
            event: event
        })
    }
}
