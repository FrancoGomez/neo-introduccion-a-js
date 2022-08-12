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

const $menorSalario = document.querySelector("#menor-salario");
const $mayorSalario = document.querySelector("#mayor-salario");
const $promedioSalario = document.querySelector("#promedio-salario");
const $promedioSalarioMensual = document.querySelector(
    "#promedio-salario-mensual"
);

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
        const $div = document.createElement("div");
        $div.className = "input-grupo-familiar";
        $div.style.margin = "10px 0";

        const $inputEdad = document.createElement("input");
        $inputEdad.setAttribute("type", "number");
        $inputEdad.setAttribute("placeholder", "Ingresa la edad del familiar");
        $inputEdad.className = "input-edad";
        $inputEdad.style.marginRight = "10px";

        const $inputSalario = document.createElement("input");
        $inputSalario.setAttribute("type", "number");
        $inputSalario.setAttribute(
            "placeholder",
            "Ingresa el salario del familiar"
        );
        $inputSalario.className = "input-salario oculto";
        $inputSalario.style.marginRight = "10px";

        const $inputAgregarSalario = document.createElement("input");
        $inputAgregarSalario.setAttribute("type", "button");
        $inputAgregarSalario.setAttribute("value", "Agregar salario");
        $inputAgregarSalario.style.marginRight = "10px";
        $inputAgregarSalario.onclick = () =>
            agregarSalario(
                $inputSalario,
                $inputAgregarSalario,
                $inputQuitarSalario
            );

        const $inputQuitarSalario = document.createElement("input");
        $inputQuitarSalario.setAttribute("type", "button");
        $inputQuitarSalario.setAttribute("value", "Quitar salario");
        $inputQuitarSalario.className = "oculto";
        $inputQuitarSalario.style.marginRight = "10px";
        $inputQuitarSalario.onclick = () =>
            quitarSalario(
                $inputSalario,
                $inputAgregarSalario,
                $inputQuitarSalario
            );

        $div.appendChild($inputEdad);
        $div.appendChild($inputSalario);
        $div.appendChild($inputAgregarSalario);
        $div.appendChild($inputQuitarSalario);

        $form.appendChild($div);
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
    $promedio.textContent = `La edad promedio es de: ${calcularPromedio(
        $arrayEdades
    )}`;

    const $arraySalarios = document.querySelectorAll("form .input-salario");

    $menorSalario.textContent = `El menor salario es de: ${calcularMenor(
        $arraySalarios
    )}`;
    $mayorSalario.textContent = `El mayor salario es de: ${calcularMayor(
        $arraySalarios
    )}`;
    $promedioSalario.textContent = `El salario promedio es de: ${calcularPromedio(
        $arraySalarios
    )}`;
    $promedioSalarioMensual.textContent = `El salario mensual promedio es de: ${calcularSalarioPromedioMensual(
        $arraySalarios
    )}`;
};

const calcularMenor = (array) => {
    let menor = Number(array[0].value);

    array.forEach((input) => {
        if (Number(input.value) < menor && Number(input.value) !== 0) {
            menor = Number(input.value);
        }
    });

    return menor;
};

const calcularMayor = (array) => {
    let mayor = Number(array[0].value);

    array.forEach((input) => {
        if (Number(input.value) > mayor && Number(input.value) !== 0) {
            mayor = Number(input.value);
        }
    });

    return mayor;
};

const calcularPromedio = (array) => {
    let resultado = 0;
    let contador = 0;

    array.forEach((input) => {
        if (Number(input.value) !== 0) {
            resultado += Number(input.value);
            contador++;
        }
    });

    return resultado / contador;
};

const agregarSalario = (
    $inputSalario,
    $inputAgregarSalario,
    $inputQuitarSalario
) => {
    $inputSalario.className = $inputSalario.className.replace(" oculto", "");
    $inputQuitarSalario.className = $inputQuitarSalario.className.replace(
        "oculto",
        ""
    );
    $inputAgregarSalario.className += " oculto";
};

const quitarSalario = (
    $inputSalario,
    $inputAgregarSalario,
    $inputQuitarSalario
) => {
    $inputAgregarSalario.className = $inputAgregarSalario.className.replace(
        " oculto",
        ""
    );
    $inputSalario.className += " oculto";
    $inputQuitarSalario.className += " oculto";
};

const calcularSalarioPromedioMensual = (array) => {
    const MESES_EN_ANIO = 12;
    let resultado = 0;
    let contador = 0;

    array.forEach((input) => {
        if (Number(input.value) !== 0) {
            resultado += Number(input.value);
            contador++;
        }
    });

    return resultado / MESES_EN_ANIO / contador;
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
