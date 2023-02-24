let myLibrary = [];
const modal = document.querySelector("#myModal");
const span = document.querySelector(".close");
const addButton = document.querySelector(".add");
const titleButton = document.querySelector(".book_title");
const authorButton = document.querySelector(".book_author");
const pagesButton = document.querySelector(".book_pages");
const content = document.querySelector(".content");
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

// const deleteBook = document.querySelectorAll(".");

function showBooks() {
  content.replaceChildren();
  for (let i = 0; i < myLibrary.length; i++) {
    const newBook = document.createElement("div");
    newBook.setAttribute("data-index", `${i}`); // Important for now! I'll have to think about how to implement this to delete books by their data-index attribute.
    newBook.setAttribute("class", "card");

    const titl = document.createElement("p");
    titl.innerText = "Title: ";
    newBook.appendChild(titl);

    const asd = document.createElement("div");
    asd.innerText = myLibrary[i].title;
    newBook.appendChild(asd);

    const authr = document.createElement("p");
    authr.innerText = "Author: ";
    newBook.appendChild(authr);

    const asd2 = document.createElement("div");
    asd2.innerText = myLibrary[i].author;
    newBook.appendChild(asd2);

    const numPgs = document.createElement("p");
    numPgs.innerText = "Pages: ";
    newBook.appendChild(numPgs);

    const asd3 = document.createElement("div");
    asd3.innerText = myLibrary[i].pages;
    newBook.appendChild(asd3);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    newBook.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", (e) => {
      let bookIndex = e.target.parentElement.dataset.index;
      // console.log(bookIndex);
      // console.log(myLibrary[bookIndex]);
      content.removeChild(e.target.parentElement);
      myLibrary.splice(bookIndex, 1);
      console.log(myLibrary);
    });

    content.appendChild(newBook);
  }
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function showModal() {
  modal.style.display = "block";
}

addButton.addEventListener("click", showModal);

function hideModal() {
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    hideModal();
  }
});

span.addEventListener("click", hideModal);
// form.addEventListener("submit", addBookToLibrary(event));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#book_title");
  let author = document.querySelector("#book_author");
  let pages = document.querySelector("#book_pages");
  let read = document.querySelector("#read");
  const book = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(book);
  showBooks();
  // const cool = document.createElement("div");
  // cool.setAttribute("class", "card");
  // content.appendChild(cool);
  hideModal();
  form.reset();
  console.log(myLibrary);
});
