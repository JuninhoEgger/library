const Book = require("../models/book");

module.exports = class BookController {
    static async showBooks(req, res) {
        const books = await Book.getBooks()

        //passando para tela os dados
        res.render("books/all", { books });

    }
    static createBook(req, res) {
            res.render('books/create')
        }
        //método para salvar no banco de dados um empregado
    static createBookPost(req, res) {
        const title = req.body.title
        const price = req.body.price

        const book = new Book(title, price)

        book.save()

        res.redirect('/')
    }
}