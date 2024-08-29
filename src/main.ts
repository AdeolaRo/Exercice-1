import { Library } from "./Classe/classe.js";
import { Author,Book } from "./Classe/interface.js";

function createBook (title:string, author:Author, pages:number): Book {

    return  {
        title : title,
        author : author,
        pages : pages,
        isAvailable : true,
    }
}

function toggleAvailability(book:Book): void {
  book.isAvailable = !book.isAvailable

}


const author1: Author = { name: "John Doe", gender: 'M', birthdate: "2024/03/20" };
const myBook: Book = createBook("My Awesome Book", author1, 250);

console.log(myBook.isAvailable); 

toggleAvailability(myBook);

console.log(myBook.isAvailable); 


let libaryBook = new Library();

console.log(libaryBook);

let livre: Book = {

    title: "livre",
    author: author1,
    pages:300,
    isAvailable:true
}

libaryBook.addBook(livre);

console.log(livre);
