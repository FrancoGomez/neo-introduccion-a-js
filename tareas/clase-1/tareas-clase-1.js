// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
let anioActual = prompt("Cual es el año actual?")
let anioNacimiento = prompt("En que año naciste?")

const calcularEdad = (anioActual, anioNacimiento) => {
    return anioActual - anioNacimiento
}

alert("Tenes " + calcularEdad(anioActual, anioNacimiento) + " años :)")


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.