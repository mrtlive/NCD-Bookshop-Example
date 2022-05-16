

# NCD-Bookshop-Example

> note: edited this repo for missing ncd project createria context,assert,scripting

Here is my Book Shop project for NEAR Protocol create book find and deleting functions avaliable for now.

Instructions
```
near-login
```
Repo Clone
```
git clone https://github.com/mrtlive/NCD-Bookshop-Example
```
if near-cli not installed
```
npm install --global near-cli
cd NCD-Bookshop-Example
yarn
```
easy setup
```
cd scripts
bash setup.sh
export CONTRACT=<YOUR_ACCOUNT_ID>
```

Functions
user info
```
near call $CONTRACT userInfo --accountId <your_account>.testnet
```
get all books data
```
near call $CONTRACT getBooks --accountId <your_account>.testnet

```
createbook
```
near call $CONTRACT createBook '{"book_name":"<BookName>","author":"<Author>","price":<Price>,"quantity":<Quantity>}' --accountId <your_account>.testnet
```
view with id
```
near view $CONTRACT getById '{"id":<ID>}' --accountId <your_account>.testnet
```
delete with id
```
near call $CONTRACT del '{"id":<ID>}' --accountId <your_account>.testnet
```
this is my first project for patika.dev bootcamp thanks.
