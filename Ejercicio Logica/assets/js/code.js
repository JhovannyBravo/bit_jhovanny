function sumatoria() {
    let nuemroUsuario = document.getElementById('nuemroUsuario').value
    let resultado = 0
    for (iterador = 0; iterador <= nuemroUsuario; iterador++) {
        resultado = resultado + iterador
        console.log(resultado)
    }
    document.getElementById('resultado').innerHTML = resultado
}

function multiplicar() {
    let numeroSolicitado = document.getElementById("numero").value
    let cantidad = document.getElementById("hasta_cuanto").value
    let tablacompleta = document.getElementById("tabla_multiplicar")
    for (let x = 0; x <= cantidad; x++) {
        console.log('tabla_multiplicar')
        tablacompleta.innerHTML += `${x} x ${numeroSolicitado} = ${numeroSolicitado * x} <br>`

    }
}

function validar() {
    let numeroVerificar = document.getElementById('numeroVerificar').value
    let verificar = 0
    if (numeroVerificar % 2 == 0) {
        let resul = document.getElementById('resul')
        resul.innerHTML = " " + "Par";
    } else {
        resul.innerHTML = " " + "Impar";
    }
}

function validacion() {
    let menorMayorEdad = document.getElementById('Edad').value
    let genero = document.getElementById('Genero')
    let reclamar = document.getElementById('reclamar')
    if (menorMayorEdad <= 10) {
        reclamar.innerHTML = " " + "reclama un jugo"
    } else if (menorMayorEdad >= 18){
        reclamar.innerHTML = " " + "reclama una cerveza"
    }else if(menorMayorEdad >= 10 && menorMayorEdad <= 18){
        alert('lo siento, no recibes nada')
    }let reclamar2 = document.getElementById('reclamar2')
    if (genero.value == 'Hombre') {
        reclamar2.innerHTML = " Una porcion de pizza tres carnes";
    } else if (genero.value == "Mujer") {
        reclamar2.innerHTML = " Una porcion de pizza Hawaiana";}}



function descuento() {
    let promedio = document.getElementById("promedio").value
    let valorMatricula = 1000000
    let Matricula1 = document.getElementById("Matricula")
    if (promedio <= 2.9) {
        Matricula1.innerHTML = " " + "1000000" +  " " + "No tienes descuento"
    } else if (promedio > 3 && promedio <= 4) {
        Matricula1.innerHTML = (" " + valorMatricula*.95)
    } else {
        Matricula1.innerHTML = (" " + valorMatricula*.5)
    }
} 






