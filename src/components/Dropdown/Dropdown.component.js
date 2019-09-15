module.exports = class {
    onCreate() {
        this.state = {
            blurTimeout: null
        }
    }
    handleClick() {
        this.emit('click')
    }
    handleMenuItemClick(cb) {
        this.emit('item-click',{
            cb:cb
        })
    }
    handleBlur() {
    }
    handleKeyDown(event){
        code = event.code || null
    }
}