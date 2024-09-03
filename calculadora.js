console.log("Running calculadora.js")
function calcularHipotenusa(a,b){
    let resultado = Math.sqrt(a**2+b**2)
    return resultado
}
botonCalcular.addEventListener("click", function(){
    let ladoA = document.getElementById("ladoA").value
    let ladoB = document.getElementById("ladoB").value
    let texto = document.getElementById("texto")
    texto.innerText = `La hipotenusa es de: ${calcularHipotenusa(ladoA,ladoB).toFixed(3)}`


}) //acordarse de })
