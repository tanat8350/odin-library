const myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  // do stuff here
  myLibrary.push(new Book(author, title, pages, read));
}

addBookToLibrary(1, 1, 1, 1);
addBookToLibrary(2, 2, 2, 2);
addBookToLibrary(3, 3, 3, 3);
addBookToLibrary(4, 4, 4, 4);

const body = document.querySelector("body");

function pushToPara(item) {
  const para = document.createElement("p");
  para.textContent = `Author: ${item.author} Title: ${item.title} Pages: ${item.pages} Read: ${item.read}`;
  body.appendChild(para);
}

myLibrary.forEach((item) => {
  pushToPara(item);
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const author = prompt("Author");
  const title = prompt("Title");
  const pages = prompt("Pages");
  const read = prompt("Read");
  addBookToLibrary(author, title, pages, read);
  pushToPara(myLibrary[myLibrary.length - 1]);
});
