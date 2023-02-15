const SEARCH = document.querySelector(".search");
const INPUT = document.querySelector(".input");
const BTN = document.querySelector(".btn");

BTN.addEventListener( "click", ()=>{
    SEARCH.classList.toggle("active");
    INPUT.focus();
})