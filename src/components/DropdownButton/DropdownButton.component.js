module.exports = class {
    onCreate(input) {
        this.state = { 
            show : false
        }
    }
    handleClick() {
        this.state.show = !this.state.show
    }
}