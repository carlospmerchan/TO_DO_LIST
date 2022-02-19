//----JS-------


let form = document.querySelector("#btn_suma");

form.addEventListener("click", (e) => {
    
    let porHacer = document.querySelector("#tarea");
    let laLista = document.querySelector("#tareasList");
    laLista.innerHTML+=`<li class="item">${porHacer.value}<button class="btn_resta"><img class="delete" src="assets/images/trash_icon.svg" alt="trash icon"></button></li>`;
    porHacer.value = '';
});
