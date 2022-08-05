// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
/* let anioActual = prompt("Cual es el año actual?")
let anioNacimiento = prompt("En que año naciste?")

const calcularEdad = (anioActual, anioNacimiento) => {
    return anioActual - anioNacimiento
}

alert("Tenes " + calcularEdad(anioActual, anioNacimiento) + " años :)") */


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.\
/* let salarioAnual = prompt("Cual es tu salario anual?")

const calcularSalarioMensual = (salarioAnual) => {
    const MESES_EN_ANIO = 12

    return salarioAnual / MESES_EN_ANIO
}

alert("Tu salario mensual es de: $" + calcularSalarioMensual(salarioAnual)) */

let salarioMensual = prompt("Cual es tu salario mensual?")

const calcularSalarioAnual = (salarioMensual) => {
    const MESES_EN_ANIO = 12

    return salarioMensual * MESES_EN_ANIO
}

alert("Tu salario anual es de: $" + calcularSalarioAnual(salarioMensual))

let salarioAnualUsuario = calcularSalarioAnual(salarioMensual)

const calcularSalarioSemanal = (salarioAnual) => {
    const SEMANAS_EN_ANIO = 52

    return salarioAnual / SEMANAS_EN_ANIO
}

alert("Tu salario semanal es de: $" + calcularSalarioSemanal(salarioAnualUsuario))

let diasTrabajadosPorAnio = prompt("Cuantas dias trabajas por año, aproximadamente?")

const calcularSalarioDiario = (salarioAnual, diasTrabajadosPorAnio) => {
    return salarioAnual / diasTrabajadosPorAnio
}

alert("Tu salario diario es de: $" + calcularSalarioDiario(salarioAnualUsuario, diasTrabajadosPorAnio))

let horasTrabajadasPorDia = prompt("Cuantas horas soles trabajar por dia?")

const calcularSalarioPorHora = (salarioAnual, diasTrabajadosPorAnio, horasTrabajadasPorDia) => {
    return salarioAnual / (diasTrabajadosPorAnio * horasTrabajadasPorDia)
}

alert("Tu salario por hora es de: $" + calcularSalarioPorHora(salarioAnualUsuario, diasTrabajadosPorAnio, horasTrabajadasPorDia))