function carregar() {
    var text = window.document.getElementById('msg'); 
    var foto = window.document.getElementById('imagem'); 
    var hora = 16;
    text.innerHTML = "<h3>São exatamente " + (hora) + " horas</h3>";       
    if (hora>=5 && hora<12){
        //Bom dia!
        foto.src="imagens/manha.jpg";
        document.body.style.background = "rgb(190, 167, 102)";
    } else if (hora>=12 && hora<18){
        //Boa Tarde
        foto.src="imagens/tarde.jpg";
        document.body.style.background = "rgb(204, 80, 31)";
    } else {
        //Boa Noite
        foto.src="imagens/noite.jpg";
        document.body.style.background = "rgb(20, 19, 19)";
    }
}