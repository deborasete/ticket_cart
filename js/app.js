function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
  
    if (tipo == 'pista') {
        comprarPista(qtd);
    } else if (tipo == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo: Pista');
    } else {
        let totalQtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = totalQtdPista;
        alert('Compra realizada com sucesso!');              
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo: Superior');
    } else {
       let totalQtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = totalQtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo: Inferior');
    } else {
        let totalQtdInferior = qtdInferior - qtd
        document.getElementById('qtd-inferior').textContent = totalQtdInferior;
        alert('Compra realizada com sucesso!');
    }
}



