function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const incluiLayout = document.querySelector("#layout-sim").checked;


    let preco = formato - retanglar * 60;
    if (temJS) preco += 15;
    if (incluiLayout) preco += qtde * 5;
    let preco = formato * 60;
    if (temJS) preco += 15;
    if (incluiLayout) preco += qtde * 5;


    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(3)}`;
}
