// contract/assembly/model.ts
import { PersistentUnorderedMap, math } from "near-sdk-as";


export const books = new PersistentUnorderedMap<u32, Books>("books");



@nearBindgen
export class Books {
  id: u32;
  book_name: string;
  author: string;
  price: u32;
  quantity: u32;

  constructor(book_name: string, author: string, price: u32, quantity: u32) {
    this.id = math.hash32<string>(book_name);
    this.book_name = book_name;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  static createBook(book_name: string, author: string, price: u32, quantity: u32): Books {
    const book = new Books(book_name, author, price, quantity);
    books.set(book.id, book);
    return book;  
  }
  static findById(id: u32): Books {
    // Lookup a todo in the PersistentUnorderedMap by its id.
    // This is like a SELECT * FROM todos WHERE id=?
    return books.getSome(id);
  }
  static findByIdAndDelete(id: u32): void {
    books.delete(id);
  }
}
