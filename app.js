const body = document.querySelector("body")
const header = document.querySelector("header");
const root = document.querySelector(':root');
window.addEventListener('scroll',()=>{
    header.classList.toggle("sticky", window.scrollY > 0);
})
