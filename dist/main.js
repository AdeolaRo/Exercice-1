import { Library } from "./Classe/classe.js";
function createBook(title, author, pages) {
    return {
        title: title,
        author: author,
        pages: pages,
        isAvailable: true,
    };
}
function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
const author1 = { name: "John Doe", gender: 'M', birthdate: "2024/03/20" };
const myBook = createBook("My Awesome Book", author1, 250);
console.log(myBook.isAvailable);
toggleAvailability(myBook);
console.log(myBook.isAvailable);
let libaryBook = new Library();
console.log(libaryBook);
let livre = {
    title: "livre",
    author: author1,
    pages: 300,
    isAvailable: true
};
libaryBook.addBook(livre);
console.log(livre);
