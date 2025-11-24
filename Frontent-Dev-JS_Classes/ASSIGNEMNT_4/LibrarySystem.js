class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("Atomic Habits", "James Clear", "111"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "222"),
  new Book("Wings of Fire", "APJ Abdul Kalam", "333")
];

console.log("Available Books:", books.filter(b => !b.isIssued));

const searched = books.find(b => b.ISBN === "222");
searched.issueBook();

console.log("After issuing:", books);
