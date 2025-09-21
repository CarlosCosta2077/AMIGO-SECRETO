let amigos = []

function adicionarAmigo () {
    let inputAmigo = document.getElementById ("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo === "") {
        alert ("Por favor, insira o nome corretamente!");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();

    exibirAmigos();
}

function exibirAmigos () {    
    let textoAmigos = document.getElementById("listaAmigos");
    textoAmigos.innerHTML = "";

    amigos.forEach(amigo => {
    let paragrafo = document.createElement ("p");
        paragrafo.textContent = amigo;
        textoAmigos.appendChild(paragrafo);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert ("Adicione mais de um amigo para sortear!");
        return;
    }

    let escolhidoAmigo = Math.floor(Math.random() * amigos.length);
    let sorteadoAmigo = amigos[escolhidoAmigo];
    let resultadoAmigo = document.getElementById("resultado");
    resultadoAmigo.textContent = `O amigo secreto sorteado foi ${sorteadoAmigo}`
}