import { Book } from "./interface";

export class Library {

    books: Book[] = []; 

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(title: string): void {
        this.books.filter(book => book.title !== title)  
    }


   findBookByTitle(title: string) {
        return this.books.find(book => book.title === title);
    }

    listAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);
    }

    getBooksByAuthor(authorName: string): Book | undefined {
        return this.books.find(book => book.author);
    }

}