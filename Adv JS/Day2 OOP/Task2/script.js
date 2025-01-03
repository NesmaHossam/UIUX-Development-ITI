// - Box

//     Create your box object that contains books objects, ensure that you can :
//     a. count # of books inside box.

//     b. `addBook()` create book object and add it to box object content property .
//     c. `deleteBook()` delete any of these books in box according to book name or `type`  .
//     d. use `toString()` to tell its dimensions and how many books are stored in it.
//     e. implement `valueof()` so that if there is more than one box object we can
//     a. get total books in these boxes by adding the

//     i.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7.

//     Note:

//     • there is no inheritance
//     • box object has the following properties: height, width, length, numOfBooks,
//     volume, material, type, content.
//     • The content property contains an array of books.
//     • book object has the following properties: name , type, numofChapters, author,
//     numPages, publisher, numofCopies.
//     • you can define any function needed for both box and book objects.
///////////////////////////////////////////////////////////////////////////////////////////////////////

function Box(height, width, length, material, type) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.type = type;
  this.numOfBooks = 0;
  this.content = [];
}

function Book(
  name,
  type,
  numofChapters,
  author,
  numPages,
  publisher,
  numofCopies
) {
  this.name = name;
  this.type = type;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numPages = numPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
}

Box.prototype.addBook = function (book) {
  this.content.push(book);
  this.numOfBooks++;
};

Box.prototype.deleteBook = function (identifier) {
  for (let i = 0; i < this.content.length; i++) {
    if (
      this.content[i].name === identifier ||
      this.content[i].type === identifier
    ) {
      this.content.splice(i, 1);
      this.numOfBooks--;
      break;
    }
  }
};

Box.prototype.toString = function () {
  return `Box: height: ${this.height}, width: ${this.width}, length: ${
    this.length
  }, material: ${this.material}, type: ${this.type}, numOfBooks: ${
    this.numOfBooks
  }, content: [${this.content.map((book) => book.toString()).join(", ")}]`;
};

Book.prototype.toString = function () {
  return `Book: name: ${this.name}, type: ${this.type}, numofChapters: ${this.numofChapters}, author: ${this.author}, numPages: ${this.numPages}, publisher: ${this.publisher}, numofCopies: ${this.numofCopies}`;
};

Box.prototype.valueOf = function () {
  return this.numOfBooks;
};

const box1 = new Box(10, 20, 30, "plastic", "Storage");
const box2 = new Box(15, 25, 35, "Plastic", "Archive");

const book1 = new Book(
  "Book One",
  "c programming",
  10,
  "Author A",
  200,
  "Publisher A",
  5
);
const book2 = new Book(
  "Book Two",
  "c++ programming",
  8,
  "Author B",
  150,
  "Publisher B",
  3
);

box1.addBook(book1);
box1.addBook(book2);
console.log(box1.toString());

// box1.deleteBook("Book One");
box1.deleteBook("c++ programming");
console.log(box1.valueOf());
console.log(box1.toString());

box2.addBook(
  new Book("Book Three", "Fiction", 12, "Author C", 220, "Publisher C", 2)
);
console.log(box2.toString());
console.log(box2);

const totalBooks = box1.valueOf() + box2.valueOf();
console.log(`Total books in box1 and box2: ${totalBooks}`);
