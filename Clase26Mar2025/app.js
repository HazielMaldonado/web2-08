let tareas = [];

function mostrarMenu() {
    return parseInt( prompt(
        "Opciones disponibles:\n" +
        "1. Agregar tarea \n" +
        "2. Ver todas las tareas\n" +
        "3. Marcar tarea como completada \n" +
        "4. Salir \n"+
        "Elige una opcion"
    ));
}

function iniciarPrograma (){
    let continuar = true;
        while(continuar){

            let opcion = mostrarMenu();
            switch (opcion) {
                case 1:
                    agregarTarea();
                    break;
                case 2:
                    verTarea();
                    break;
                case 3:
                    marcarTareasCompletada();
                    break;
                case 4:
                    alert("Saliendo del programa");
                    continuar = false;
                    break;
                default:
                    alert("Opcion no valida. Intenta de nuevo");

        }
    }
    alert("Programa terminado");

}
function agregarTarea(){
    let nombre = prompt ("Introduce el nombre de la tarea: ");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

function marcarTareasCompletada() {
    let numero = parseInt(prompt("Introduce el numero de la tarea a marcar como completada: "));
    if (numero > 0 && numero <= tareas.length){
        tareas[numero-1].completado = true;
        alert(`La tarea: "${tareas[numero-1].nombre}" ha sido completada`);

    }else {
        alert("Numero de tarea invalido");
    }
}


//iniciar programa
iniciarPrograma()
