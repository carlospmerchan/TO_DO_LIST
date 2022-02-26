//----JS-------

// Añadir tareas

let form = document.querySelector("#btn_suma");

form.addEventListener("click", (e) => {

    let porHacer = document.querySelector("#tarea");
    console.log(porHacer.value);




    if (porHacer.value == false) {
        alert("Nos ha introducido ninguna tarea");
        return;
    };


    let laLista = document.querySelector("#tareasList");
    laLista.innerHTML += `<li class="item">
        <div class="item_text">${porHacer.value}</div>
        <button class="btn_resta"><img class="delete" src="assets/images/restar.svg" alt="eliminar"></button>
    </li>`;

    porHacer.value = '';


    

    // Restar tareas

    let quitar = document.querySelector(".delete");

    quitar.addEventListener('click', (e) => {
        borro = e.target;

        let subo_uno = borro.parentNode;

        let subo_dos = subo_uno.parentNode;

        let subo_tres = subo_dos.parentNode;

        subo_tres.removeChild(subo_dos);

    });





});



