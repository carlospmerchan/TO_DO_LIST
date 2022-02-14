//----JS-------


let form = document.querySelector("#agregar");

form.addEventListener("submit", (e) => {
    let porHacer = document.querySelector("#tarea");
    console.log(porHacer.value);
    let laLista = document.querySelector("#tareasList");
    laLista.innerHTML=`<li class="item">${porHacer.value}<button class="btn eliminar">Eliminar</button></li>`;

});
























// // Definir un array

// let porHacer = ['Escribir un libro','Plantar un árbol','Tener un hijo','Aprobar el LAB'];

// // Aplicarlo a una lista

// let laLista = document.querySelector("#tareasList");

// let contador = 0;
// let longitud = porHacer.length

// while (contador <= longitud) {
//     laLista.innerHTML=`<li class="item">${porHacer[contador]}<button class="btn eliminar">Eliminar</button></li>`;
//     contador++;
//     return;
//     console.log(contador);
// }


 
// Definir un array

// let porHacer = ['Escribir un libro','Plantar un árbol','Tener un hijo','Aprobar el LAB'];

// Aplicarlo a una lista

// let laLista = document.querySelector("#tareasList");
// let recados = porHacer[1];
// laLista.innerHTML=`<li class="item">${recados}<button class="btn eliminar">Eliminar</button></li>`;





// let form = document.querySelector("#agregar");

// form.addEventListener("submit", (e) => {
//     let porHacer = document.querySelector("#tarea");
//     console.log(porHacer.value);
//     let laLista = document.querySelector("#tareasList");
//     let li = document.createElement('li');
//     li.textContent = porHacer.value; 
//     laLista.appendChild(li);

// });
