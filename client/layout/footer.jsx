import "../assets/styles/footer.scss"
export default {
    data() {
        return {
            author: 'YF'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}