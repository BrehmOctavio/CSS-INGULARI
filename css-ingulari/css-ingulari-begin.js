//CRONO

const crono = document.querySelector(".crono");
const toggleOnCrono = document.querySelector(".toggle-on-crono");
const toggleOffCrono = document.querySelector(".toggle-off-crono");
const divCrono = document.querySelector(".div-crono");
const triangle3 = document.querySelector(".triangle-3");
let segundos = 0;

const conteoCrono = setInterval(() => {
        segundos += 1;
        crono.textContent = `${segundos} s`;
    }, 1000);



//VARIABLES

const res1 = document.querySelector(".first-response");
const res2 = document.querySelector(".second-response");
const img = document.querySelector(".img");
const test = document.querySelector(".test");
const next = document.querySelector(".next");
const form = document.querySelector(".form");
const backL = document.querySelector(".back-l");
let levelText = document.querySelector(".text-l")
const nextL = document.querySelector(".next-l");
const back = document.querySelector(".back");
const alertBox = document.querySelector(".alert");
const y = document.querySelector(".y");
const n = document.querySelector(".n");
const error = document.querySelector(".error");
const divSetting = document.querySelector(".div-setting");
const setOn = document.querySelector(".set-on");
const setOff = document.querySelector(".set-off");
const toggleOn = document.querySelector(".toggle-on");
const toggleOff = document.querySelector(".toggle-off");
const infoDiv = document.querySelector(".info");
let firstLine = document.querySelector(".first-line");
let conteo = 0;
let conteoAll = 1;
let imgTitle = document.querySelector(".img-title"); 
const font = document.querySelector(".FONT");
const divLevel = document.querySelector(".level");
const planeta2 = document.querySelector(".planeta2");
const repeat = document.querySelector(".repeat");


// COMPROBATION-GAME

const moonPlanet = ()=>{
    divLevel.style.backgroundImage = "./assets/tierra.png";
    img.setAttribute("src","./assets/luna.png");
};


const testLevel1 = ()=>{
    if(res1.value == "height:400px;" & res2.value == "width:400px;"){
        img.style.height = "400px";
        img.style.width = "400px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

        
    }
    if(res1.value == "height: 400px;" & res2.value == "width: 400px;"){
        img.style.height = "400px";
        img.style.width = "400px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;


    }
};


const testLevel2 = ()=>{
    if(res1.value == "margin-bottom:200px;" & res2.value == "margin-left:200px;"){
        img.style.marginBottom = "200px";
        img.style.marginLeft = "200px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

        
    }
    if(res1.value == "margin-bottom: 200px;" & res2.value == "margin-left: 200px;"){
        img.style.marginBottom = "200px";
        img.style.marginLeft = "200px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};


const testLevel3 = ()=>{
    if(res1.value == "transform:rotate(180deg);" || res1.value == "transform: rotate(180deg);"){
        img.style.transform = "rotate(180deg)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "transform:rotate(180deg);" || res2.value == "transform: rotate(180deg);"){
        img.style.transform = "rotate(180deg)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel4 = ()=>{

    if(res1.value == `background-image:url(./assets/fondo-estrellas.jpg);` & res2.value == "background-size:cover;"){
        divLevel.style.backgroundImage= "url(./assets/fondo-estrellas.jpg)";
        divLevel.style.backgroundSize = "cover";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

        
    }
    if(res1.value == `background-image: url(./assets/fondo-estrellas.jpg);` & res2.value == "background-size: cover;"){
        divLevel.style.backgroundImage= "url(./assets/fondo-estrellas.jpg)";
        divLevel.style.backgroundSize = "cover";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel5 = ()=>{
    if(res1.value == "opacity: 0.5;" || res1.value == "opacity:0.5;"){
        img.style.opacity = "0.5";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "opacity: 0.5;" || res2.value =="opacity:0.5;"){
        img.style.opacity = "0.5";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel6 = ()=>{
    if(res1.value == "transform: translateX(100px);" || res1.value == "transform:translateX(100px);"){
        img.style.transform = "translateX(100px)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "transform: translateX(100px);" || res2.value == "transform:translateX(100px);"){
        img.style.transform = "translateX(100px)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel7 = ()=>{
    if(res1.value == "transform: translateY(-100px);" || res1.value == "transform:translateY(-100px);"){
        img.style.transform = "translateY(-100px)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "transform: translateY(-100px);" || res2.value == "transform:translateY(-100px);"){
        img.style.transform = "translateY(-100px)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel8 = ()=>{
    if(res1.value == "border-radius: 100%;" || res1.value == "border-radius:100%;"){
        img.style.borderRadius = "100%";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "border-radius: 100%;" || res2.value == "border-radius:100%;"){
        img.style.borderRadius = "100%";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel9 = ()=>{
    if(res1.value == "filter: drop-shadow(0px 0px 10px aqua);" || res1.value == "filter:drop-shadow(0px 0px 10px aqua);"){
        img.style.filter = "drop-shadow(0px 0px 10px aqua)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "filter: drop-shadow(0px 0px 10px aqua);" || res2.value == "filter:drop-shadow(0px 0px 10px aqua);"){
        img.style.filter = "drop-shadow(0px 0px 10px aqua)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel10 = ()=>{
    if(res1.value == "display: flex;" || res2.value == "flex-direction: column;"){
        divLevel.style.display = "flex";
        divLevel.style.flexDirection = "column";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res1.value == "display:flex;" || res2.value == "flex-direction:column;"){
        divLevel.style.display = "flex";
        divLevel.style.flexDirection = "column";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel11 = ()=>{
    if(res1.value == "filter: invert(2);" || res1.value == "filter:invert(2);"){
        img.style.filter = "invert(2)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "filter: invert(2);" || res2.value == "filter:invert(2);"){
        img.style.filter = "invert(2)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel12 = ()=>{
    if(res1.value == "z-index: 2;" || res1.value == "z-index:2;"){
        img.setAttribute("src","./assets/planeta.png");
        divLevel.style.backgroundImage = "url(./assets/luna.png)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "z-index: 2;" || res2.value == "z-index:2;"){
        img.setAttribute("src","./assets/planeta.png");
        divLevel.style.backgroundImage = "url(./assets/luna.png)";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel13 = ()=>{
    if(res1.value == "font-size: 90px;" || res2.value == "font-size: 90px;"){
        font.style.fontSize = "90px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res1.value == "font-size:90px;" || res2.value == "font-size:90px;"){
        font.style.fontSize = "90px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel14 = ()=>{
    if(res1.value == "font-family: sans-serif;" || res1.value == "font-family:sans-serif;"){
        font.style.fontFamily = "sans-serif";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "font-family: sans-serif;" || res2.value == "font-family:sans-serif;"){
        font.style.fontFamily = "sans-serif";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel15 = ()=>{
    if(res1.value == "font-weight: bolder;" || res1.value == "font-weight:bolder;"){
        font.style.fontWeight = "bolder";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "font-weight: bolder;" || res2.value == "font-weight:bolder;"){
        font.style.fontWeight = "bolder";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel16 = ()=>{
    if(res1.value == "color: orange;" || res1.value == "color:orange;"){
        font.style.color = "orange";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "color: orange;" || res2.value == "color:orange;"){
        font.style.color = "orange";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel17 = ()=>{
    if(res1.value == "letter-spacing: 10px;" || res1.value == "letter-spacing:10px;"){
        font.style.letterSpacing = "10px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "letter-spacing: 10px;" || res2.value == "letter-spacing:10px;"){
        font.style.letterSpacing = "10px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel18 = ()=>{
    if(res1.value == "display: none;" || res1.value == "display:none;"){
        img.style.display = "none";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

    if(res2.value == "display: none;" || res2.value == "display:none;"){
        img.style.display = "none";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Nivel ${conteo} de 20`;

    }

};

const testLevel19 = ()=>{
    if(res1.value == "display: block;" || res1.value == "display:block;"){
        img.style.display = "block";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Último nivel`;

    }

    if(res2.value == "display: block;" || res2.value == "display:block;"){
        img.style.display = "block";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;
        levelText.textContent = `Último nivel`;

    }

};

const testLevel20 = ()=>{
        if(res1.value == "height:500px;" & res2.value == "width:500px;"){

        clearInterval(conteoCrono);

        if(crono <= 150){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","excelente");
        };
        if(crono >= 150){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","bien");
        };
        if(crono >= 250){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","hacerlo");
        };

        img.style.height = "500px";
        img.style.width = "500px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;

        next.style.display = "none";
        repeat.style.display = "block";

        setTimeout(() => {
            window.open("./finish.html");
        },2500);
        
    }
    if(res1.value == "height: 500px;" & res2.value == "width: 500px;"){

        clearInterval(conteoCrono);

        if(segundos <= 150){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","excelente");
            localStorage.setItem("time",segundos);
        };
        if(segundos >= 150){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","bien");
            localStorage.setItem("time",segundos);
        };
        if(segundos >= 250){
            levelText.textContent = "-";
            localStorage.setItem("calificacion","hacerlo");
            localStorage.setItem("time",segundos);
        };

        img.style.height = "500px";
        img.style.width = "500px";
        next.style.display = "block";
        test.style.display = "none";
        conteo++;
        conteoAll++;

        next.style.display = "none";
        repeat.style.display = "block";

        setTimeout(() => {
            window.open("./finish.html");
        },2500);

    }
};


    repeat.addEventListener("click",()=>{
        window.location.reload();
    });

//--------------------------------------------------------------------------------------------------------------------------------


//TEST

test.addEventListener("click",()=>{
    switch(conteo){
        case 1: testLevel1();
        break;
        case 2: testLevel2();
        break;
        case 3: testLevel3();
        break;
        case 4: testLevel4();
        break;
        case 5: testLevel5();
        break;
        case 6: testLevel6();
        break;
        case 7: testLevel7();
        break;
        case 8: testLevel8();
        break;
        case 9: testLevel9();
        break;
        case 10: testLevel10();
        break;
        case 11: testLevel11();
        break;
        case 12: testLevel12();
        break;
        case 13: testLevel13();
        break;
        case 14: testLevel14();
        break;
        case 15: testLevel15();
        break;
        case 16: testLevel16();
        break;
        case 17: testLevel17();
        break;
        case 18: testLevel18();
        break;
        case 19: testLevel19();
        break;
        case 20: testLevel20();
        break;
    };
});


const resetIMG = ()=>{
    img.style.padding = "0px";
    img.style.margin = "0px";
    img.style.height = "300px";
    img.style.width = "300px";
    img.style.transform = "rotate(0px)";
    img.style.opacity = "10";
    img.style.transform = "translateX(0px)";
    img.style.transform = "translateY(0px)";
    img.style.borderRadius = "0px";
    img.style.border = "0px";
    img.style.filter = "invert(0)";
    divLevel.style.backgroundColor = "none";
    planeta2.style.display = "none";
};


next.addEventListener("click",()=>{
    next.style.display = "none";
    test.style.display = "block";
    form.reset();
    resetIMG();


    //IMG A FONT

    const background = ()=>{
        divLevel.style.backgroundImage = "none";
    };

    const planetMoon = ()=>{
        divLevel.style.backgroundImage = "./assets/luna.png";
        img.setAttribute("src","./assets/tierra.png");
    };

    const imgFont = ()=>{
        img.style.display = "none";
        font.style.display = "block";
    };

    const fontImg = ()=>{
        img.style.display = "block";
        font.style.display = "none";
    };

    if(conteoAll == 13){
        imgFont();
        divLevel.style.backgroundImage = "none";
    };

    const resetIMGMeteoro = ()=>{
        img.style.width = "300px";
        img.style.height = "31px";
    };
    
    if(conteoAll == 10){
        divLevel.style.flexDirection = "row";
        planeta2.style.display = "block";
        img.style.height = "140px";
        img.style.width = "140px";
    };

    if(conteoAll == 20){
        img.style.height = "10px";
        img.style.width = "10px";
    }

    if(conteoAll == 12){
        divLevel.style.backgroundImage = "url(./assets/planeta.png)";
        img.setAttribute("src","./assets/luna.png");
    }

    switch(conteoAll){
        case 5: background();
        case 6: resetIMGMeteoro();
        case 8: resetIMG();
        case 12: planetMoon();
        case 18: fontImg();
    }

    //IMG

    switch(conteoAll){
        case 1: img.setAttribute("src","./assets/planeta.png");
        break;
        case 2: img.setAttribute("src","./assets/luna.png");
        break;
        case 3: img.setAttribute("src","./assets/planeta2.png");
        break;
        case 4: img.setAttribute("src","./assets/planeta3.png");
        break;
        case 5: img.setAttribute("src","./assets/estrella.png");
        break;
        case 6: img.setAttribute("src","./assets/meteroro1.png");
        break;
        case 7: img.setAttribute("src","./assets/meteroro1.png");
        break;
        case 8: img.setAttribute("src","./assets/planisferio.jpg");
        break;
        case 9: img.setAttribute("src","./assets/planeta.png");
        break;
        case 10: img.setAttribute("src","./assets/planeta.png");
        break;
        case 11: img.setAttribute("src","./assets/estrella.png");
        break;
        case 12: img.setAttribute("src","./assets/luna.png");
        break;
        //13--
        //14--
        //15--
        //16--
        //17--
        case 18: img.setAttribute("src","./assets/gargantua.png");
        break;
        case 19: img.setAttribute("src","./assets/marte.png");
        break;
        case 20: img.setAttribute("src","./assets/planeta.png");
        break;
    };

    //ID=""

    switch(conteoAll){
        case 1: imgTitle.textContent = `id="planeta"`;
        break;
        case 2: imgTitle.textContent = `id="luna"`;
        break;
        case 3: imgTitle.textContent = `id="planeta"`;
        break;
        case 4: imgTitle.textContent = `id="planeta"`;
        break;
        case 5: imgTitle.textContent = `id="estrella"`;
        break;
        case 6: imgTitle.textContent = `id="meteoro"`;
        break;
        case 7: imgTitle.textContent = `id="meteoro"`;
        break;
        case 8: imgTitle.textContent = `id="tierra"`;
        break;
        case 9: imgTitle.textContent = `id="tierra"`;
        break;
        case 10: imgTitle.textContent = `id="fondo"`;
        break;
        case 11: imgTitle.textContent = `id="estrella"`;
        break;
        case 12: imgTitle.textContent = `id="luna"`;
        break;
        case 13: imgTitle.textContent = `id="saturno"`;
        break;
        case 14: imgTitle.textContent = `id="saturno"`;
        break;
        case 15: imgTitle.textContent = `id="saturno"`;
        break;
        case 16: imgTitle.textContent = `id="saturno"`;
        break;
        case 17: imgTitle.textContent = `id="saturno"`;
        break;
        case 18: imgTitle.textContent = `id="gargantua"`;
        break;
        case 19: imgTitle.textContent = `id="marte"`;
        break;
        case 20: imgTitle.textContent = `id="tierra"`;
        break;
    };
    switch(conteoAll){
        case 1: firstLine.textContent = ` #planeta {`;
        break;
        case 2: firstLine.textContent = ` #luna {`;
        break;
        case 3: firstLine.textContent = ` #planeta {`;
        break;
        case 4: firstLine.textContent = ` #planeta {`;
        break;
        case 5: firstLine.textContent = ` #estrella {`;
        break;
        case 6: firstLine.textContent = ` #meteoro {`;
        break;
        case 7: firstLine.textContent = ` #meteoro {`;
        break;
        case 8: firstLine.textContent = ` #tierra {`;
        break;
        case 9: firstLine.textContent = ` #tierra {`;
        break;
        case 10: firstLine.textContent = ` #planetas {`;
        break;
        case 11: firstLine.textContent = ` #estrella {`;
        break;
        case 12: firstLine.textContent = ` #luna {`;
        break;
        case 13: firstLine.textContent = ` #saturno {`;
        break;
        case 14: firstLine.textContent = ` #saturno {`;
        break;
        case 15: firstLine.textContent = ` #saturno {`;
        break;
        case 16: firstLine.textContent = ` #saturno {`;
        break;
        case 17: firstLine.textContent = ` #saturno {`;
        break;
        case 18: firstLine.textContent = ` #gargantua {`;
        break;
        case 19: firstLine.textContent = ` #marte {`;
        break;
        case 20: firstLine.textContent = ` #tierra {`;
        break;
    };

    //TITLE

    switch(conteoAll){
        case 1: question.textContent = `Agranda el planeta !`;
        break;
        case 2: question.textContent = `Añade un margen para mover la luna !`;
        break;
        case 3: question.textContent = `Rota el planeta !`;
        break;
        case 4: question.textContent = `Añade un fondo de estrellas !`;
        break;
        case 5: question.textContent = `Añade un opacity !`;
        break;
        case 6: question.textContent = `Modifica su ubicación !`;
        break;
        case 7: question.textContent = `Modifica su ubicación !`;
        break;
        case 8: question.textContent = `Modifica su radio !`;
        break;
        case 9: question.textContent = `Añade una sombra !`;
        break;
        case 10: question.textContent = `Modifica la dirección !`;
        break;
        case 11: question.textContent = `Añade un filtro !`;
        break;
        case 12: question.textContent = `Modifica su capa !`;
        break;
        case 13: question.textContent = `Agranda el texto !`;
        break;
        case 14: question.textContent = `Cambia el tipo de fuente !`;
        break;
        case 15: question.textContent = `Cambia el peso de la texto !`;
        break;
        case 16: question.textContent = `Cambia el color del texto !`;
        break;
        case 17: question.textContent = `Agrega un espacio entre letras !`;
        break;
        case 18: question.textContent = `Edita la visibilidad !`;
        break;
        case 19: question.textContent = `Edita la visibilidad !`;
        break;
        case 20: question.textContent = `Agranda nuestro hogar !`;
        break;
    };

    //Subtitle

    switch(conteoAll){
        case 1: require.textContent = `Utiliza las propiedades height y width, la cual agranda un elemento, y ponlo a 400px`;
        break;
        case 2: require.textContent = `Utiliza las propiedades margin-bottom y margin-left, la cual añade un margen y ponlo a 200px`;
        break;
        case 3: require.textContent = `Utiliza la propiedad transform: rotate, la cual rota un elemento y rotalo a 180 grados`;
        break;
        case 4: require.textContent = `Utiliza la propiedad background-image (agrega una imagen) y background-size (modifica su talla)`;
        break;
        case 5: require.textContent = `Utiliza la propiedad opacity (agrega una opacidad) para darle una opacidad a la estrella`;
        break;
        case 6: require.textContent = `Utiliza la propiedad transform: translateX() (translada un elemento horizontalmente) para modificar la orbita del meteoro`;
        break;
        case 7: require.textContent = `Utiliza la propiedad transform: translateY() (translada un elemento veticalmente) para modificar la orbita del meteoro`;
        break;
        case 8: require.textContent = `Utiliza la propiedad border-radius (modifica el radio) para crear la forma redonda de la tierra`;
        break;
        case 9: require.textContent = `Utiliza la propiedad filter (modifica la imagen) y drop-shadow (agrega sombra) para crear la capa de ozono de la tierra`;
        break;
        case 10: require.textContent = `Utiliza la propiedad diplay y flex-direction para cambiar la dirección de los planetas`;
        break;
        case 11: require.textContent = `Utiliza la propiedad filter (modifica la imagen) para invertir una estrella amarilla a azul`;
        break;
        case 12: require.textContent = `Utiliza la propiedad z-index (modifica la posición en altura) y pone la luna atras de la tierra`;
        break;
        case 13: require.textContent = `Utiliza la propiedad font-size para agrandar el nombre`;
        break;
        case 14: require.textContent = `Utiliza la propiedad font-family para cambiar la fuente del nombre`;
        break;
        case 15: require.textContent = `Utiliza la propiedad font-weight para cambiar el peso del nombre`;
        break;
        case 16: require.textContent = `Utiliza la propiedad color para cambiar el color del nombre`;
        break;
        case 17: require.textContent = `Utiliza la propiedad letter-spacing para agregar un espacio entre letras al nombre`;
        break;
        case 18: require.textContent = `Utiliza la propiedad display para editar la visibiliad de gargantua`;
        break;
        case 19: require.textContent = `Utiliza la propiedad display para editar la visibiliad del planeta`;
        break;
        case 20: require.textContent = `Utiliza las propiedades height y width para agrandar el planeta tierra a 500px.`;
        break;
    };

    //Li

    switch(conteoAll){
        case 1: li1.textContent = `height: 400px;`;
        break;
        case 2: li1.textContent = `margin-bottom: 200px;`;
        break;
        case 3: li1.textContent = `transform: rotate(180deg);`;
        break;
        case 4: li1.textContent = `background-image: url(./assets/fondo-estrellas.jpg);`;
        break;
        case 5: li1.textContent = `opacity: 0.5;`;
        break;
        case 6: li1.textContent = `transform: translateX(100px);`;
        break;
        case 7: li1.textContent = `transform: translateY(-100px);`;
        break;
        case 8: li1.textContent = `border-radius: 100%;`;
        break;
        case 9: li1.textContent = `filter: drop-shadow(0px 0px 10px aqua);`;
        break;
        case 10: li1.textContent = `display: flex;`;
        break;
        case 11: li1.textContent = `filter: invert(2);`;
        break;
        case 12: li1.textContent = `z-index: 2;`;
        break;
        case 13: li1.textContent = `font-size: 90px;`;
        break;
        case 14: li1.textContent = `font-family: sans-serif;`;
        break;
        case 15: li1.textContent = `font-weight: bolder;`;
        break;
        case 16: li1.textContent = `color: orange;`;
        break;
        case 17: li1.textContent = `letter-spacing: 10px;`;
        break;
        case 18: li1.textContent = `display: none;`;
        break;
        case 19: li1.textContent = `display: block;`;
        break;
        case 20: li1.textContent = `height: 500px;`;
        break;
    }
    switch(conteoAll){
        case 1: li2.textContent = `width: 400px;`;
        break;
        case 2: li2.textContent = `margin-left: 200px;`;
        break;
        case 3: li2.textContent = `-`;
        break;
        case 4: li2.textContent = `background-size: cover;`;
        break;
        case 5: li2.textContent = `-`;
        break;
        case 6: li2.textContent = `-`;
        break;
        case 7: li2.textContent = `-`;
        break;
        case 8: li2.textContent = `-`;
        break;
        case 9: li2.textContent = `-`;
        break;
        case 10: li2.textContent = `flex-direction: column;`;
        break;
        case 11: li2.textContent = `-`;
        break;
        case 12: li2.textContent = `-`;
        break;
        case 13: li2.textContent = `-`;
        break;
        case 14: li2.textContent = `-`;
        break;
        case 15: li2.textContent = `-`;
        break;
        case 16: li2.textContent = `-`;
        break;
        case 17: li2.textContent = `-`;
        break;
        case 18: li2.textContent = `-`;
        break;
        case 19: li2.textContent = `-`;
        break;
        case 20: li2.textContent = `width: 500px;`;
        break;
    };

    
});


//EXIT-question

back.addEventListener("click",()=>{
    alertBox.style.display = "block";
});

n.addEventListener("click",()=>{
    alertBox.style.display = "none";
});


//LEVEL-count

conteo += 1; 

nextL.addEventListener("click",()=>{
    conteo++;
    levelText.textContent = `Nivel ${conteo} de 35`;
});

backL.addEventListener("click",()=>{
    if(conteo > 1){
        conteo--;
        levelText.textContent = `Nivel ${conteo} de 35`;
    }
});

//SETTINGS

const transitionLine = document.querySelector(".transition-line"); 
const require = document.querySelector(".require");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const question = document.querySelector(".question");

setOn.addEventListener("click",()=>{
    divSetting.style.display = "none";
    setOn.style.display = "none";
    setOff.style.display = "block";
});

setOff.addEventListener("click",()=>{
    divSetting.style.display = "block";
    setOn.style.display = "block";
    setOff.style.display = "none";
});

toggleOff.addEventListener("click",()=>{
    toggleOff.style.display = "none";
    toggleOn.style.display = "block";
    img.style.transition = "all 0s";
    transitionLine.style.color = "rgb(79, 79, 79)";
});

toggleOn.addEventListener("click",()=>{
    toggleOff.style.display = "block";
    toggleOn.style.display = "none";
    img.style.transition = "all 1.5s";
    transitionLine.style.color = "white";
});

toggleOffCrono.addEventListener("click",()=>{
    crono.style.opacity = "0";
    toggleOffCrono.style.display = "none";
    toggleOnCrono.style.display = "block";

});

toggleOnCrono.addEventListener("click",()=>{
    crono.style.opacity = "10";
    toggleOnCrono.style.display = "none";
    toggleOffCrono.style.display = "block";
});


crono.addEventListener("mouseenter",()=>{
    divCrono.style.opacity = "10";
    triangle3.style.opacity = "10";
});

crono.addEventListener("mouseleave",()=>{
    divCrono.style.opacity = "0";
    triangle3.style.opacity = "0";
});