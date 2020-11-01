function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addToBookList = function (newBook) {
  const bookList = document.querySelector("#book-list");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
  `;

  bookList.appendChild(newRow);
};

UI.prototype.clearForm = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

UI.prototype.showAlert = function (message, type) {
  const alert = document.createElement("div");
  alert.className = `alert ${type}`;
  alert.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  container.insertBefore(alert, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if ((target.className = "delete")) {
    target.parentElement.parentElement.remove();
  }
};

document.querySelector("#book-form").addEventListener("submit", function (e) {
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill all the fields", "error");
  } else {
    const newBook = new Book(title, author, isbn);

    ui.addToBookList(newBook);
    ui.showAlert("Success!", "success");
    ui.clearForm();
  }

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book Removed!", "success");
});
