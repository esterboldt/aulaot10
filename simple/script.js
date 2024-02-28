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
    var res = (n1 + n2 + n3) / 3

    if(res >= 7){
        mediatexto.innerHTML = res.tofixed(2)
        mediatextol.style.color = "green"
    } else {
        mediatexto.innerHTML = res.tofixed(2)
        mediatextol.style.color = "red"
    }
    
}

function contar(){
    const num = ($("#numeroInput").val());
    
    if(isNaN(num)){
        $('#result').text("Por favor, informe um número válido");
        return
    }

    var resultadoStr = ""
    if(num <= 10000){
        for(var cont = 1; cont <= num; cont++){
            resultadoStr = resultadoStr + cont + "<br>";
    }
    $('#result').html(resultadoStr)
    }else{
        $('#result').text("Vai travar se você digitar esse número");

    }
}