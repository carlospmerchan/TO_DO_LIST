//----JS-------


let form = document.querySelector("#btn_add");

form.addEventListener("click", (e) => {
    
    let porHacer = document.querySelector("#tarea");
    console.log(porHacer.value);
    let laLista = document.querySelector("#tareasList");
    laLista.innerHTML+=`<li class="item">${porHacer.value}<button class="btn eliminar"><img class="delete" src="assets/images/trash_icon.svg" alt="trash icon"></button></li>`;
    porHacer.value = '';
});
