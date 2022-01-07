//Selector
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const menu = $(".menu-link");
const sticky = $(".sticky-menu ");
console.log(sticky);
//Listener
menu.addEventListener("click", () => {
  sticky.classList.toggle("run-menu");
});
menu.addEventListener("click", noScroll);

//Function

function noScroll() {
  let body = document.documentElement.classList.toggle("scroll-body");
  return body;
}
