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
  para.textContent = `Author: ${item.author} Title: ${item.title} Pages: ${item.pages} Read: ${item.read} `;
  body.appendChild(para);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  para.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    body.removeChild(para);
    body.removeChild(removeBtn);
  });
}

myLibrary.forEach((item) => {
  pushToPara(item);
});

const addBookBtn = document.querySelector(".js-add-book-btn");
// addBookBtn.addEventListener("click", () => {
//   const author = prompt("Author");
//   const title = prompt("Title");
//   const pages = prompt("Pages");
//   const read = prompt("Read");
//   addBookToLibrary(author, title, pages, read);
//   pushToPara(myLibrary[myLibrary.length - 1]);
// });
const modal = document.querySelector("dialog");
addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

const dialogSubmitBookBtn = document.querySelector(
  ".js-dialog-submit-book-btn"
);
const form = document.querySelector("form");

const author = modal.querySelector("#author");
const title = modal.querySelector("#title");
const pages = modal.querySelector("#pages");
const read = modal.querySelector("#read");

dialogSubmitBookBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  if (author.value && title.value && pages.value && read.value) {
    addBookToLibrary(author.value, title.value, pages.value, read.value);
    pushToPara(myLibrary[myLibrary.length - 1]);
    form.reset();
  }
});

const dialogCloseBtn = document.querySelector(".js-dialog-close-btn");

dialogCloseBtn.addEventListener("click", () => {
  modal.close();
});
