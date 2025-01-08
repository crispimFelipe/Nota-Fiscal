
function calcularImpostos(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNotaFiscal() {
    let valorVenda = parseFloat(document.getElementById('valorVenda').value);
    let itens = document.getElementById('itens').value;
    let irpf = parseFloat(document.getElementById('irpf').value);
    let pis = parseFloat(document.getElementById('pis').value);
    let cofins = parseFloat(document.getElementById('cofins').value);
    let inss = parseFloat(document.getElementById('inss').value);
    let issqn = parseFloat(document.getElementById('issqn').value);

    let valorIRPF = calcularImpostos(valorVenda, irpf);
    let valorPIS = calcularImpostos(valorVenda, pis);
    let valorCOFINS = calcularImpostos(valorVenda, cofins);
    let valorINSS = calcularImpostos(valorVenda, inss);
    let valorISSQN = calcularImpostos(valorVenda, issqn);

    let totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    let valorTotal = valorVenda + totalImpostos;

    let notaFiscal = `
        <p>Valor da Venda: R$ ${valorVenda.toFixed(2)}</p>
        <p>Itens Vendidos: ${itens}</p>
        <p>IRPF: R$ ${valorIRPF.toFixed(2)}</p>
        <p>PIS: R$ ${valorPIS.toFixed(2)}</p>
        <p>COFINS: R$ ${valorCOFINS.toFixed(2)}</p>
        <p>INSS: R$ ${valorINSS.toFixed(2)}</p>
        <p>ISSQN: R$ ${valorISSQN.toFixed(2)}</p>
        <p>Total de Impostos: R$ ${totalImpostos.toFixed(2)}</p>
        <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
