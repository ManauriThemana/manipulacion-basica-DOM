// console.log("Hello world");

// // let parrafo1 = document.getElementsByClassName("parrafo1");
// // let parrafo2 = document.getElementById("parrafo");

// const h1 = document.querySelector("p");
// const h2 = document.querySelector("#parrafo2");
// const h3 = document.querySelector("input");

// console.log(h2.value);


// console.log(
//    { h1,
//     h2,
//     h3,}
// );

// h1.innerHTML ="Hola Mundo con js"

// const img = document.createElement("img");
// img.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXuyHOHp5au5KRZ-pjO-c7MGAf3freZB0iA&usqp=CAU")

// h1.append(img);


// de aqui en adelante con los inputs

const input1 = document.querySelector("#calculo1");
const form = document.querySelector("#form");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultadoP = document.querySelector("#resultado")

// btn.addEventListener("click", btnOnClick)
// function btnOnClick(){

//     const suma = parseInt(input1.value) + parseInt(input2.value);
//     resultadoP.innerText = "resultado " +  suma;

// }


// aqui estamos con funciones que trabajan para el formulario


form.addEventListener("submit", sumarInputValues)

function sumarInputValues(event){
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    resultadoP.innerText = "resultado " +  suma;

}






