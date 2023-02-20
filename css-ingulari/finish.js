let calificacion = localStorage.getItem("calificacion");
let timeConteo = localStorage.getItem("time");
let qual = document.querySelector(".qual");
let time = document.querySelector(".time");

if(calificacion == "excelente"){
    qual.textContent = "Haz finalizado, su calificación es excelente !";
    time.textContent = `${timeConteo} segundos`;
};
if(calificacion == "bien"){
    qual.textContent = "Haz finalizado, lo haz hecho muy bien !";
    time.textContent = `${timeConteo} segundos`;
};
if(calificacion == "hacerlo"){
    qual.textContent = "Haz finalizado, puedes hacerlo mejor ! ";
    time.textContent = `${timeConteo} segundos`;
};
