// contract/assembly/index.ts
import {Books} from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function create(book_name: string, author: string, price: u32, quantity: u32): Books {
  // use the Todo class to persist the todo data
  return Books.createBook(book_name,author,price,quantity);
}
export function getById(id: u32): Books {
  return Books.findById(id);
}
export function del(id: u32): void {
  Books.findByIdAndDelete(id);
}