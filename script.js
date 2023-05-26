/*carrinho*/

  // Array para armazenar os itens no carrinho
  var carrinho = [];

  // Função para adicionar um item ao carrinho
  function adicionarAoCarrinho(item) {
    carrinho.push(item);
    atualizarCarrinho();
  }

  // Função para atualizar o carrinho e exibir os itens e o total
  function atualizarCarrinho() {
    var carrinhoElemento = document.getElementById("carrinho");
    var totalElemento = document.getElementById("total");

    // Limpar o conteúdo anterior do carrinho
    carrinhoElemento.innerHTML = "";
    
    // Adicionar cada item do carrinho ao elemento HTML
    carrinho.forEach(function(item) {
      var itemElemento = document.createElement("li");
      itemElemento.textContent = item;
      carrinhoElemento.appendChild(itemElemento);
    });

    // Calcular o total
    var total = carrinho.length * 5; // Supondo que cada item custa R$ 5,00
    totalElemento.textContent = "Total: R$ " + total.toFixed(2);
  }


