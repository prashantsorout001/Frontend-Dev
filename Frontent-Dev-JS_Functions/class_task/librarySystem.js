class Book {
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }

    toggleStatus() {
        this.isAvailable = !this.isAvailable;
    }
}

const book1 = new Book("Atomic Habits", "James Clear", "ISBN001");
const book2 = new Book("The Alchemist", "Paulo Coelho", "ISBN002");
const book3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "ISBN003");

const books = [book1, book2, book3];

console.log("Books JSON:", JSON.stringify(books));

const historyBook = Object.create(Book.prototype);
historyBook.title = "World History";
historyBook.author = "H. Wells";
historyBook.isbn = "ISBN004";
historyBook.isAvailable = true;

function borrowBook(book) {
    if (book.isAvailable) {
        book.toggleStatus();
        console.log(`Book issued: ${book.title}`);
    } else {
        console.log(`Not available: ${book.title}`);
    }
}

borrowBook(book1);
borrowBook(book1);
borrowBook(historyBook);
