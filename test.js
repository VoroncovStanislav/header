const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link, index) => {
  link.addEventListener("click", function() {
    closeOnClick(index);
  });
});

function closeOnClick(index) {
  if (index !== 5) { // Шестой пункт меню имеет позицию 5 в массиве
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
}
