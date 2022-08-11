//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $form = document.querySelector("form")
const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total")
const $mostrarResutado = document.querySelector("#mostar-resultado")

$calcularTiempoTotal.onclick = () => {
 imprimirResultado(devolverTiempoTotal())
}

const devolverTiempoEn = (tipo) => {
    let tiempoTotal = 0

    document.querySelectorAll(`form input.${tipo}`).forEach(input => {
        tiempoTotal += Number(input.value)
    })

    return tiempoTotal
}

const devolverTiempoTotal = () => {
    let horasBrutas = devolverTiempoEn("horas")
    let minutosBrutos = devolverTiempoEn("minutos")
    let segundosBrutos = devolverTiempoEn("segundos")

    let segundosNetos = segundosBrutos % 60
    let minutosNetos = minutosBrutos % 60 + Math.floor(segundosBrutos / 60)
    let horasNetas = horasBrutas + Math.floor(minutosBrutos / 60)

    return `Resultado: ${horasNetas} horas, ${minutosNetos} minutos y ${segundosNetos} segundos.`
}

const imprimirResultado = (resultado) => {
    $mostrarResutado.textContent = resultado
}