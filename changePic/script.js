function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector("#profile")
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")

    var registro = new Date();

    dt = formatarData(registro)

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg"); 
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightgreen";
        btn.style.borderColor = "lightgreen";
    }else{
        imagem.setAttribute("src", "../changePic/imagem/sapo.jpg");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightpink";
        btn.style.borderColor = "lightpink";
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}