// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/* let nombreUsuario = prompt("Cual es tu nombre")
const MI_NOMBRE = "Franco"
const NOMBRE_AMIGA = "Karol"

if (nombreUsuario.toLowerCase() === MI_NOMBRE.toLowerCase()) {
    alert("Hola, Tocayo! Yo tambien me llamo " + MI_NOMBRE)
} else if (nombreUsuario.toLowerCase() === NOMBRE_AMIGA.toLowerCase()) {
    alert("Hola " + nombreUsuario + "! Te llamas igual que mi amiga")
} else {
    alert("Hola " + nombreUsuario)
} */

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
let edadUsuario = Number(prompt("Cual es tu edad?"))
const MI_EDAD = 23

if (edadUsuario < MI_EDAD) {
    alert("Sos mas joven que yo")
} else if (edadUsuario === MI_EDAD) {
    alert("Tenemos la misma edad")
} else if (edadUsuario > MI_EDAD) {
    alert("Soy mas joven que vos")
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.