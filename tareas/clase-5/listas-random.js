//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaRandom = document.querySelectorAll("#lista-random > li")
const $promedio = document.querySelector("#promedio")
const $menor = document.querySelector("#menor")
const $mayor = document.querySelector("#mayor")
const $masRepetido = document.querySelector("#mas-repetido")

const imprimirResultados = () => {
    $promedio.textContent = `El numero mas repetido es: ${calcularPromedio($listaRandom)}`
    $menor.textContent = `El menor numero es: ${obtenerElMenor($listaRandom)}`
    $mayor.textContent = `El mayor numero es: ${obtenerElMayor($listaRandom)}`
    $masRepetido.textContent = `El numero mas repetido es: ${obtenerMasRepetido($listaRandom)}`
}

const calcularPromedio = (array) => {
    let resultado = 0

    array.forEach(item => {
        resultado += Number(item.textContent)
    });

    return resultado / array.length
}

const obtenerElMenor = (array) => {
    let numeroMenor = Number(array[0].textContent)

    array.forEach(item => {
        if (numeroMenor > Number(item.textContent)) {
            numeroMenor = Number(item.textContent)
        }
    });

    return numeroMenor
}

const obtenerElMayor = (array) => {
    let numeroMayor = Number(array[0].textContent)

    array.forEach(item => {
        if (numeroMayor < Number(item.textContent)) {
            numeroMayor = Number(item.textContent)
        }
    });

    return numeroMayor
}

const obtenerMasRepetido = (array) => {
    let masRepetido = array[1].textContent
    let recuentoNumerosRepetidos = {}

    array.forEach(item => {
       if(recuentoNumerosRepetidos[`${item.textContent}`]) {
        recuentoNumerosRepetidos[`${item.textContent}`] += 1
       } else {
        recuentoNumerosRepetidos[`${item.textContent}`] = 1
       }
    });

    for (const [key, value] of Object.entries(recuentoNumerosRepetidos)) {
        if (value > recuentoNumerosRepetidos[masRepetido]) {
            masRepetido = key
        }
    }

    return masRepetido
}

imprimirResultados()