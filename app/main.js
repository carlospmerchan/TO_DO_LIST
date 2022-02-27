//----JS-------

    // Añadir tareas

    let form = document.querySelector("#btn_suma");

    form.addEventListener("click", (e) => {

        let porHacer = document.querySelector("#tarea");
        console.log(porHacer.value);


        // Avisar de que no se ha introducido ninguna tarea

        if (porHacer.value == false) {
            alert("Nos ha introducido ninguna tarea");
            return;
        };


     
        // Pintar tareas

        let laLista = document.querySelector("#tareasList");

        // Borrar tarea de ejemplo al introducir mi primer item

        let sampleado = laLista.querySelector(".sample");
        console.log(sampleado);
        sampleado.classList.add('oculto');
     

        
        laLista.innerHTML += `<li class="item">
            <div class="item_text">${porHacer.value}</div>
            <button class="btn_resta"><img class="delete" src="assets/images/restar.svg" alt="eliminar"></button>
        </li>`;

        porHacer.value = '';
    

    // Restar tareas
    // Restar tareas

    let quitar = document.querySelectorAll(".delete");

    for (let i=0 ; i < quitar.length; i++) {

 

    quitar[i].addEventListener('click', (e) => {

        borro = e.target;

        let subo_uno = borro.parentNode;

        let subo_dos = subo_uno.parentNode;

        let subo_tres = subo_dos.parentNode;

        subo_tres.removeChild(subo_dos);

    });


}


});









