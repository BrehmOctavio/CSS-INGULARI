//MENU-SECTIONS

const title = document.querySelector(".title").addEventListener("click",()=>{
    section1.style.display = "block";
    section2.style.display = "none";
});

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");

const inicio = document.querySelector(".inicio");
const mision = document.querySelector(".mision");
const contact = document.querySelector(".contact");

inicio.addEventListener("click",()=>{
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
});

mision.addEventListener("click",()=>{
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
});

contact.addEventListener("click",()=>{
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
});


//FORM

const $form = document.querySelector("#form");
const $mailTo = document.querySelector("#trick");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $mailTo.setAttribute("href",`mailto:css-ingulari@gmail.com?subject=nombre ${form.get("name")} correo ${form.get("email")}&body=${form.get("message")}`)
    $mailTo.click();
};