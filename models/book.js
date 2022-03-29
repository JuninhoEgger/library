const conn = require('../db/conn')

class Book {
    constructor(title, price) {
            this.title = title
            this.price = price
        }
        //método que salva no banco de dados
    save() {
        const book = conn.db().collection('books').insertOne({
            title: this.title,
            price: this.price,
        })

        return book
    }
    static getBooks() {
        const books = conn.db().collection('books').find().toArray()

        return books
    }
}

module.exports = Book