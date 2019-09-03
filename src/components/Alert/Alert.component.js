module.exports = class {
    onCreate(){
        this.state = {
            displayNoneTimeout: null,
            startedDisplayNoneTimeout: false
        }
    }
    handleCloseButtonClick(){
        this.emit('close')
    }
}