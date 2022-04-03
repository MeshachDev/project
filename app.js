const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector(".main-container");
const root = document.querySelector(":root");
const ulogo = document.querySelector("#ulogo");
const uname = document.querySelector("#uname");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
const side = document.querySelector(".side");
const ham = document.querySelector("#ham");
const error = document.querySelector("#error");
ham.addEventListener("click", () => {
  sh();
});

const sh = () => {
  side.classList.toggle("sideon");
};
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  alert("Logged In!");
  storage(name, password);
  getStorage();
  document.querySelector("#name").value = "";
  document.querySelector("#password").value = "";
});
// local storage
 export const storage = (name, password) => {
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);
};

export const getStorage = () => {
  uname.innerHTML = localStorage.getItem("name");
  ulogo.innerHTML = uname.innerText.charAt(0).toUpperCase();
};
window.onload = getStorage;