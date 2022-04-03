import {storage, getStorage , hello} from './app.js';
const birthday = document.querySelector("#birthday");
const names = document.querySelector("#names").value;
const passwords = document.querySelector("#passwords").value;
const forms = document.querySelector("#forms");
forms.addEventListener("submit", (e) => {
  console.log("login")
storage(names, passwords);
  getStorage();
  document.querySelector("#names").value = "";
  document.querySelector("#passwords").value = "";
})