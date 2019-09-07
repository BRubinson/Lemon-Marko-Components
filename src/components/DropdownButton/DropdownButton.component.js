module.exports = class {
    onCreate(input) {
        this.state = { 
            show : false
        }
    }
    handleClick() {
        this.state.show = !this.state.show
    }
    handleItemClick(data) {
        this.emit('item-click',data)
        this.state.show = false
    }
    handleBlur() {
        console.log('blurbed')
    }
}