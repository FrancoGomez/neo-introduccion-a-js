/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $form = document.querySelector("form");
const $integrantesFamiliares = document.querySelector(
    "#integrantes-familiares"
);
const $aceptar = document.querySelector("#aceptar");
const $reiniciar = document.querySelector("#reiniciar");

const $menor = document.querySelector("#menor");
const $mayor = document.querySelector("#mayor");
const $promedio = document.querySelector("#promedio");

$aceptar.onclick = () => {
    let numeroInegrantes = obtenerNumeroInegrantes();
    if (!numeroInegrantes) return;

    crearIntegrantes(numeroInegrantes);
    activarBoton($reiniciar);
    deshabilitarBoton($aceptar);
};

$reiniciar.onclick = () => {
    borrarIntegrantes();
    deshabilitarBoton($reiniciar);
    activarBoton($aceptar);
};

const obtenerNumeroInegrantes = () => {
    return Number($integrantesFamiliares.value);
};

const crearIntegrantes = (numeroInegrantes) => {
    for (let i = 0; i < numeroInegrantes; i++) {
        const $input = document.createElement("input");
        $input.setAttribute("type", "number");
        $input.setAttribute("placeholder", "Ingresa la edad del familiar");
        $input.style.display = "block";
        $input.style.margin = "10px 0";
        $input.className = "input-grupo-familiar input-edad";

        $form.appendChild($input);
    }

    crearBotonFinalizar();
};

const crearBotonFinalizar = () => {
    const $finalizar = document.createElement("input");
    $finalizar.setAttribute("type", "button");
    $finalizar.setAttribute("value", "Finalizar");
    $finalizar.setAttribute("id", "finalizar");
    $finalizar.className = "input-grupo-familiar";

    $finalizar.onclick = () => imprimirResultados();

    $form.appendChild($finalizar);
};

const borrarIntegrantes = () => {
    document.querySelectorAll("form .input-grupo-familiar").forEach((input) => {
        input.remove();
    });
};

const activarBoton = (tipo) => {
    tipo.disabled = false;
};

const deshabilitarBoton = (tipo) => {
    tipo.disabled = true;
};

const imprimirResultados = () => {
    const $arrayEdades = document.querySelectorAll("form .input-edad");

    $menor.textContent = `La menor edad es de: ${calcularMenor($arrayEdades)}`;
    $mayor.textContent = `La mayor edad es de: ${calcularMayor($arrayEdades)}`;
    $promedio.textContent = `La edad promedio es de: ${calcularPromedio($arrayEdades)}`;
};

const calcularMenor = (array) => {
    let menor = Number(array[0].value);

    array.forEach((input) => {
        if (Number(input.value) < menor) {
            menor = Number(input.value);
        }
    });

    return menor;
};

const calcularMayor = (array) => {
    let mayor = Number(array[0].value);

    array.forEach((input) => {
        if (Number(input.value) > mayor) {
            mayor = Number(input.value);
        }
    });

    return mayor;
};

const calcularPromedio = (array) => {
    let resultado = 0;

    array.forEach((input) => {
        resultado += Number(input.value);
    });

    return resultado / array.length;
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
