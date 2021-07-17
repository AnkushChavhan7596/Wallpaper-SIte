
const hambergur_btn = document.querySelector('.hambergur') ;
const bars = document.querySelectorAll(".bars");
const background = document.querySelector(".backg");
const menu = document.querySelector(".menu");

hambergur_btn.addEventListener("click",()=>
{
 for(let i=0; i<bars.length; i++)
 {
   bars[i].classList.toggle("active");
 }

  background.classList.toggle("bg");
  menu.classList.toggle("MENU");
  hambergur_btn.classList.toggle("hmb");

})




const loader = document.querySelector(".loader-container");

window.addEventListener("load",()=>
{
    loader.style.display = "none";
})