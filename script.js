let itensNoCarrinho = 0;

function adicionarItem() {
  itensNoCarrinho++;
  document.getElementById("itens-no-carrinho").textContent = itensNoCarrinho;
}
let carrinho = [];
let total = 0;

function adicionarItem(preco) {
  carrinho.push(preco);

  // Atualize a lista de itens no carrinho
  let carrinhoHTML = "";
  for (let i = 0; i < carrinho.length; i++) {
    carrinhoHTML += "<li>R$ " + carrinho[i] + "</li>";
  }
  document.getElementById("carrinho").innerHTML = carrinhoHTML;

  // Calcule o preço total do pedido
  total += preco;
  document.getElementById("total").textContent = total;
}

function enviarPedido() {
  let mensagem = "Pedido:";
  for (let i = 0; i < carrinho.length; i++) {
    mensagem += "%0A- Item " + (i+1) + ": R$ " + carrinho[i];
  }
  mensagem += "%0A%0ATotal: R$ " + total;

  let link = "https://wa.me/+5583988905279?text=" + mensagem;
  window.location.href = link;
}
