const mobileMenuController = document.getElementById("mobile-menu-controller");
const mobileMenu = document.getElementById("mobile-menu");
const pageHeader = document.getElementById("page-header");
const body = document.querySelector('body')
console.log(body)
let opened = false;

mobileMenuController.addEventListener("click", () => {
  opened = !opened;
  opened
    ? body.classList.add("noscroll")
    : body.classList.remove("noscroll");

  mobileMenu.classList.toggle("opened");
  pageHeader.classList.toggle("opened");
});
