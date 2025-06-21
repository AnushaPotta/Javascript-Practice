//Challenge: Create a Library System
//Define two classes:

//1. Book
//Each book has:a title,an author,a isAvailable flag (default is true)Also define a method:borrow() – sets isAvailable to false

//returnBook() – sets isAvailable to true

//2. Library The library contains:an array of Book objects.

//Define methods:

//addBook(book) – adds a new Book to the library

//listAvailableBooks() – logs titles of books where isAvailable is true

//borrowBook(title) – finds the book by title and calls .borrow() if available

//returnBook(title) – finds the book and calls .returnBook()

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }
  returnBook() {
    this.isAvailable = true;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  listAvailableBooks() {
    this.books.forEach((book) => {
      if (book.isAvailable === true) {
        console.log(book.title);
      }
    });
  }

  borrowBook(title) {
    const book = this.books.find((b) => b.title === title);
    if (!book) {
      console.log("Book not found.");
    } else if (!book.isAvailable) {
      console.log("Book is not available");
    } else {
      book.borrow();
      console.log(`You borrowed "${title}"`);
    }
  }

  returnBook(title) {
    const book = this.books.find((b) => b.title === title);
    if (book) {
      book.returnBook();
      console.log(`You returned "${title}"`);
    }
  }
}

const book1 = new Book("Hobbit", "abc");
const book2 = new Book("Harry Porter", "def");

const lib = new Library();
lib.addBook(book1);
lib.addBook(book2);
lib.listAvailableBooks();

lib.borrowBook("Hobbit");
lib.listAvailableBooks();
lib.borrowBook("Hobbit");

lib.returnBook("Hobbit");
lib.listAvailableBooks();
