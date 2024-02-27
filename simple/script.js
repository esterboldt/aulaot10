function calcular(){
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    var res = document.getElementById("res")

    if(isNaN(n1) && isNaN(n2)){
        alert("Digite números válidos")
        return;
    }

    res.innerHTML = n1 + n2

}

function media(){
    var n1 = document.getElementById("nota1").valueAsNumber;
    var n2 = document.getElementById("nota2").valueAsNumber;
    var n3 = document.getElementById("nota3").valueAsNumber;
    var res = document.getElementById("resposta");
    res.textContent = ((n1 + n2 + n3) / 3).toFixed(2)
    
}