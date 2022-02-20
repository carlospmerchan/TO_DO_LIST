//----JS-------


let form = document.querySelector("#btn_suma");

form.addEventListener("click", (e) => {
    
    let porHacer = document.querySelector("#tarea");
    console.log(porHacer.value);
    
    if (porHacer.value == false) {
        alert("Nos ha introducido ninguna tarea");
        return;
    };

    let laLista = document.querySelector("#tareasList");
    laLista.innerHTML+=`<li class="item">
        <div class="item_text">${porHacer.value}</div>
        <button class="btn_resta"><img class="delete" src="assets/images/restar.svg" alt="eliminar"></button>
    </li>`;
    porHacer.value = '';
    
});







