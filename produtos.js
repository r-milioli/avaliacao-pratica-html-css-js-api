// Carregar produtos do JSON
async function carregarProdutos() {
    try {
        // Buscar o JSON
        const response = await fetch('produtos.json');
        const data = await response.json();
        
        // Pegar o container
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';
        
        // Criar cada produto
        data.produtos.forEach(produto => {
            const div = document.createElement('div');
            div.className = 'produto';
            
            div.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">R$ ${produto.preco}</p>
                <p>${produto.descricao}</p>
                <button onclick="comprar('${produto.nome}')">Comprar</button>
            `;
            
            container.appendChild(div);
        });
        
    } catch (error) {
        document.getElementById('produtos-container').innerHTML = 
            '<p>Erro: Use um servidor local para carregar o JSON!</p>';
    }
}

// Função comprar
function comprar(nome) {
    alert('Produto ' + nome + ' adicionado!');
}


//============================================================================================================

// Variáveis do Slider
let slideIndex = 1;
let autoSlideTimer;

// Função para mudar slide (botões anterior/próximo)
function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

// Função para ir para slide específico (dots)
function slideAtual(n) {
    mostrarSlide(slideIndex = n);
}

// Função principal do slider
function mostrarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Remove classe ativo de todos
    slides.forEach(slide => slide.classList.remove('ativo'));
    dots.forEach(dot => dot.classList.remove('ativo'));
    
    // Adiciona classe ativo ao slide atual
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('ativo');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('ativo');
    }
}

// Função para slider automático
function iniciarSliderAutomatico() {
    autoSlideTimer = setInterval(() => {
        slideIndex++;
        mostrarSlide(slideIndex);
    }, 5000); // Muda a cada 5 segundos
}

// Parar slider automático
function pararSliderAutomatico() {
    clearInterval(autoSlideTimer);
}

// Inicializar slider quando carregar a página
function iniciarSlider() {
    mostrarSlide(slideIndex);
    iniciarSliderAutomatico();
    
    // Pausa o slider quando passa o mouse
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', pararSliderAutomatico);
        hero.addEventListener('mouseleave', iniciarSliderAutomatico);
    }
}

//==================================================================================================

// Slider Institucional da Página Sobre
let slideAtualIndex = 1;

function mudarSlideSobre(n) {
    mostrarSlideSobre(slideAtualIndex += n);
}

function slideAtualSobre(n) {
    mostrarSlideSobre(slideAtualIndex = n);
}

function mostrarSlideSobre(n) {
    let slides = document.getElementsByClassName("slide-sobre");
    let dots = document.getElementsByClassName("dot-sobre");
    
    if (n > slides.length) {slideAtualIndex = 1}
    if (n < 1) {slideAtualIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    if (slides[slideAtualIndex-1]) {
        slides[slideAtualIndex-1].classList.add("active");
    }
    if (dots[slideAtualIndex-1]) {
        dots[slideAtualIndex-1].classList.add("active");
    }
}

// Auto slide para o slider institucional
function autoSlideSobre() {
    if (document.getElementsByClassName("slide-sobre").length > 0) {
        slideAtualIndex++;
        mostrarSlideSobre(slideAtualIndex);
    }
}

// Iniciar auto slide quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Auto slide a cada 6 segundos apenas se estiver na página sobre
    if (document.getElementsByClassName("slide-sobre").length > 0) {
        setInterval(autoSlideSobre, 6000);
    }
});

//==================================================================================================

// Função para redes sociais
function abrirRedeSocial(rede) {
    switch(rede) {
        case 'facebook':
            alert('Redirecionando para Facebook!');
            // window.open('https://facebook.com/smartshopping', '_blank');
            break;
        case 'instagram':
            alert('Redirecionando para Instagram!');
            // window.open('https://instagram.com/smartshopping', '_blank');
            break;
        case 'whatsapp':
            alert('Abrindo WhatsApp: (11) 9999-9999');
            // window.open('https://wa.me/5511999999999', '_blank');
            break;
    }
}

// Carregar quando a página abrir
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos();
    iniciarSlider();
});