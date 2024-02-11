const myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.toggleRead = () => {
    if (!this.read) {
      this.read = true;
    } else {
      this.read = false;
    }
    refreshPara();
  };
}

function addBookToLibrary(author, title, pages, read) {
  // do stuff here
  myLibrary.push(new Book(author, title, pages, read));
}

addBookToLibrary("Author1", "Title1", "1", true);
addBookToLibrary("Author2", "Title2", "2", false);
addBookToLibrary("Author3", "Title3", "3", true);
addBookToLibrary("Author4", "Title4", "4", false);

const body = document.querySelector("body");
const container = document.querySelector(".container");

function refreshPara() {
  container.innerHTML = "";

  myLibrary.forEach((item, index) => {
    const para = document.createElement("p");
    para.textContent = `Author: ${item.author} Title: ${item.title} Pages: ${item.pages} Read: ${item.read} `;
    para.setAttribute("data-index", index);
    container.appendChild(para);

    const readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    para.appendChild(readBtn);

    readBtn.addEventListener("click", () => {
      myLibrary[+para.dataset.index].toggleRead();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    para.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      myLibrary.splice(+para.dataset.index, 1);
      refreshPara();
    });
  });
}
refreshPara();

const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector(".js-add-book-btn");

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
    refreshPara();
    modal.close();
    setInterval(() => {
      form.reset();
    }, 1000);
  }
});

const dialogCloseBtn = document.querySelector(".js-dialog-close-btn");

dialogCloseBtn.addEventListener("click", () => {
  modal.close();
});
