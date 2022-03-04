//Selector
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const link = $(".menu-link");
const sticky = $(".sticky-menu ");
const icon = $(".menu-sticky-logo");
const header = $(".header");
console.log(sticky);
//Listener
link.addEventListener("click", () => {
  sticky.classList.toggle("run-menu");
});
link.addEventListener("click", () => {
  icon.classList.toggle("menu-sticky-cancel-active");
  noScroll();
});

document.addEventListener("click", function (e) {
  if (!sticky.contains(e.target) && !header.contains(e.target)) {
    sticky.classList.remove("run-menu");
    icon.classList.remove("menu-sticky-cancel-active");
  }
});

//Function

function noScroll() {
  let body = document.documentElement.classList.toggle("scroll-body");
  return body;
}
