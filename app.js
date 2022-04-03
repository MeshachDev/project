const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector(".main-container");
const root = document.querySelector(":root");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
const ulogo = document.querySelector("#ulogo");
const uname = document.querySelector("#uname");
const side = document.querySelector(".side");
const ham = document.querySelector("#ham");
const error = document.querySelector("#error");
ham.addEventListener("click", () => {
  sh();
});

const sh = () => {
  side.classList.toggle("sideon");
};
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const name = document.querySelector("#name").value;
  alert("Logged In!");
});
