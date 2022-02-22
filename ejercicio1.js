const form = document.getElementById("formulario");



form.addEventListener( "submit", function ( event ) {
    
    event.preventDefault();
    limpiarErrores();

    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    
    // Metodo test
    let resultado = validaForm(nombre,asunto,mensaje)

    if(resultado == true) {
        exito();
    }

 
})

function limpiarErrores () {

    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";

};

function exito() {
    document.querySelector(".resultadoExitoso").innerHTML = "Mensaje enviado con éxito !!!";
};

function validaForm(nombre,asunto,mensaje) {
    let pasoValidacion = true;

    //validadamos el nombre con metodo test
    let validacionNombre = /[a-zA-Z]/gim;
    if ( validacionNombre.test(nombre)==false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un Nombre válido.";
        pasoValidacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    if ( validacionAsunto.test(asunto)==false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un Asunto válido.";
        pasoValidacion = false;
    }

    let validacionMensaje = /[a-zA-Z]/gim;
    if ( validacionMensaje.test(mensaje)==false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un Mensaje válido.";
        pasoValidacion = false;
    }
    return pasoValidacion;
};