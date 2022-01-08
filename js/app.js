//Selector
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const link = $(".menu-link");
const sticky = $(".sticky-menu ");
const icon = $(".menu-sticky-logo");
console.log(sticky);
//Listener
link.addEventListener("click", () => {
  sticky.classList.toggle("run-menu");
});
link.addEventListener("click", () => {
  icon.classList.toggle("menu-sticky-cancel-active");
});
menu.addEventListener("click", noScroll);

//Function

function noScroll() {
  let body = document.documentElement.classList.toggle("scroll-body");
  return body;
}
