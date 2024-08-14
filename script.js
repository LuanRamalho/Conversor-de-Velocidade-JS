function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    let resultado;

    if (unidadeOrigem === "kmh" && unidadeDestino === "ms") {
        resultado = valor * 0.277778;
    } else if (unidadeOrigem === "kmh" && unidadeDestino === "mph") {
        resultado = valor * 0.621371;
    } else if (unidadeOrigem === "ms" && unidadeDestino === "kmh") {
        resultado = valor * 3.6;
    } else if (unidadeOrigem === "ms" && unidadeDestino === "mph") {
        resultado = valor * 2.23694;
    } else if (unidadeOrigem === "mph" && unidadeDestino === "kmh") {
        resultado = valor * 1.60934;
    } else if (unidadeOrigem === "mph" && unidadeDestino === "ms") {
        resultado = valor * 0.44704;
    } else {
        resultado = valor; // Mesma unidade
    }

    document.getElementById('resultado').innerHTML = `${valor} ${unidadeOrigem} equivalem a ${resultado.toFixed(3)} ${unidadeDestino}`;
}
