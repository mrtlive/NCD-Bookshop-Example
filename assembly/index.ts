// contract/assembly/index.ts

import {Context} from "near-sdk-as";
import {Books,book} from "./model";

const BOOKS_LIMIT =10;
// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function create(book_name: string, author: string, price: u32, quantity: u32): Books {
  // use the Todo class to persist the todo data
  assert(quantity >=0,"Quantity cannot be negative or zero");
  const newBooks = new Books(book_name, author, price, quantity);
  book.set(book_name, newBooks);
  return Books.createBook(book_name,author,price,quantity);
}
export function userInfo(): string{
  let sender = Context.sender;
  return "sender id is: " + sender;
}
export function getBooks(): Books[] {
  return book.values();
}


export function getById(id: u32): Books {
  assert(id >= 0, "id needs to be valid.");
  return Books.findById(id);
}
export function del(id: u32): void {
  assert(id >=0 , "please provide a valid id");
  Books.findByIdAndDelete(id);
}