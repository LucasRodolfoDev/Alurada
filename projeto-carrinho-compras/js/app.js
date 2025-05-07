// Array to store cart items
let carrinho = [];

// Function to add products to cart
function adicionar() {
    const produtoSelect = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotal = document.getElementById('valor-total');

    // Get selected product and quantity
    const produtoTexto = produtoSelect.value;
    const quantidade = parseInt(quantidadeInput.value);

    // Validate quantity
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    // Extract product name and price
    const [nome, precoTexto] = produtoTexto.split(' - ');
    const preco = parseInt(precoTexto.replace('R$', ''));

    // Add to cart array
    carrinho.push({
        nome,
        quantidade,
        preco
    });

    // Update cart display
    atualizarCarrinho();
}

// Function to update cart display
function atualizarCarrinho() {
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotal = document.getElementById('valor-total');

    // Clear current display
    listaProdutos.innerHTML = '';

    // Calculate total
    let total = 0;

    // Add each product to display
    carrinho.forEach(item => {
        const produtoElement = document.createElement('section');
        produtoElement.className = 'carrinho__produtos__produto';
        produtoElement.innerHTML = `
            <span class="texto-azul">${item.quantidade}x</span> ${item.nome} 
            <span class="texto-azul">R$${item.preco}</span>
        `;
        listaProdutos.appendChild(produtoElement);

        total += item.quantidade * item.preco;
    });

    // Update total
    valorTotal.textContent = `R$${total}`;
}

// Function to clear cart
function limpar() {
    carrinho = [];
    atualizarCarrinho();
}
