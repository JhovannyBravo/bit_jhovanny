function registro() {
    let iniciarSesion = document.getElementById("tipoUsuario").value

    if (iniciarSesion =="") {
        console.log('Porfavor seleccione una Opción')
        let Ingreso = document.getElementById("Ingresar")
        Ingreso.innerHTML ='seleccione una opcion'
    }

}