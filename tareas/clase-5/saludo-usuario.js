//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $saludoBienvenida = document.querySelector("#saludo-bienvenida");
const $informacionUsuario = document.querySelector("#informacion-usuario");

const $primerNombre = document.querySelector("#primer-nombre");
const $segundoNombre = document.querySelector("#segundo-nombre");
const $primerApellido = document.querySelector("#primer-apellido");
const $segundoApellido = document.querySelector("#segundo-apellido");
const $edad = document.querySelector("#edad");

const $mostrarInformacion = document.querySelector("#mostrar-informacion");

$mostrarInformacion.onclick = () => {
    saludarUsuario();
    mostrarDatosUsuario();
};

const saludarUsuario = () => {
    $saludoBienvenida.textContent = `Bienvenido ${$primerNombre.value}!`;
};

const mostrarDatosUsuario = () => {
    $informacionUsuario.textContent = `Nombre: ${$primerNombre.value} ${$segundoNombre.value} ${$primerApellido.value} ${$segundoApellido.value}. Edad: ${$edad.value} años.`;
};
