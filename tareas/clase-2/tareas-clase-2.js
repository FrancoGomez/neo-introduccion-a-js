// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.
// TAREA: Creemos 2 funciones más: dividir y multiplicar.

const primerNumero = Number(prompt("Elegi el primer numero"))
const operador = prompt("Elige la operacion, dependiendo de si queres sumar(+), restar(-), multiplicar(*) o dividir(/)")
const segundoNumero = Number(prompt("Elegi el segundo numero"))

const sumarDosNumeros = (primerNumero, segundoNumero) => {
    return primerNumero + segundoNumero
}

const restarDosNumeros = (primerNumero, segundoNumero) => {
    return primerNumero - segundoNumero
}

const multiplicarDosNumeros = (primerNumero, segundoNumero) => {
    return primerNumero * segundoNumero
}

const dividirDosNumeros = (primerNumero, segundoNumero) => {
    return primerNumero / segundoNumero
}

if (operador === "+") {
    alert(sumarDosNumeros(primerNumero, segundoNumero))
} else if (operador === "-") {
    alert(restarDosNumeros(primerNumero, segundoNumero))
} else if (operador === "*") {
    alert(multiplicarDosNumeros(primerNumero, segundoNumero))
} else if (operador === "/") {
    alert(dividirDosNumeros(primerNumero, segundoNumero))
} else {
    alert("No comprendi que tipo de operacion queres realizar.")
}

