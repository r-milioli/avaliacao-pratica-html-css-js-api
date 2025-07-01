// Função para carregar e exibir produtos
async function carregarProdutos() {
    try {
        // Busca os dados do arquivo JSON
        const response = await fetch('produtos.json');
        const data = await response.json();
        
        // Pega o container onde os produtos serão inseridos
        const container = document.getElementById('produtos-container');
        
        // Limpa o container
        container.innerHTML = '';
        
        // Cria cada produto dinamicamente
        data.produtos.forEach(produto => {
            const produtoDiv = criarProdutoHTML(produto);
            container.appendChild(produtoDiv);
        });
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        document.getElementById('produtos-container').innerHTML = 
            '<p>Erro ao carregar produtos. Tente novamente mais tarde.</p>';
    }
}

// Função para criar o HTML de cada produto
function criarProdutoHTML(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';
    produtoDiv.setAttribute('data-categoria', produto.categoria);
    
    produtoDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='img/placeholder.jpg'">
        <h3>${produto.nome}</h3>
        <h4>R$ ${produto.preco.toFixed(2).replace('.', ',')}</h4>
        <p>${produto.descricao}</p>
        <button class="btn-produto" onclick="comprarProduto(${produto.id})">Comprar</button>
    `;
    
    return produtoDiv;
}

// Função para lidar com a compra (exemplo)
function comprarProduto(id) {
    alert(`Produto ${id} adicionado ao carrinho!`);
    // Aqui você pode implementar a lógica real de compra
}

// Função para filtrar produtos por categoria (bônus)
function filtrarPorCategoria(categoria) {
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        if (categoria === 'todos' || produto.getAttribute('data-categoria') === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Carrega os produtos quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', carregarProdutos);