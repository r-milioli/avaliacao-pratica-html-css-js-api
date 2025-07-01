# 🛒 Smart Shopping - E-commerce Website

![Smart Shopping Logo](img/logo.png)

Um website de e-commerce moderno e responsivo desenvolvido com tecnologias web fundamentais (HTML5, CSS3 e JavaScript puro), demonstrando as melhores práticas de desenvolvimento front-end.

## 🎯 Objetivo do Site

O **Smart Shopping** é uma plataforma de e-commerce criada para demonstrar o desenvolvimento de um website completo utilizando apenas tecnologias web nativas. O projeto simula uma loja online real com funcionalidades de:

- **Catálogo de produtos dinâmico** consumindo dados JSON
- **Experiência de usuário moderna** com sliders interativos
- **Formulário de contato inteligente** com integração de APIs externas
- **Design responsivo** adaptável a diferentes dispositivos
- **Navegação intuitiva** com páginas institucionais completas

## 💻 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização avançada com Grid, Flexbox e animações
- **JavaScript ES6+** - Funcionalidades interativas e consumo de APIs

### Funcionalidades Avançadas
- **CSS Grid & Flexbox** - Layout responsivo moderno
- **Media Queries** - Design mobile-first
- **Fetch API** - Consumo de dados JSON e APIs externas
- **LocalStorage** - Persistência de dados no navegador
- **Slider/Carousel** - Componentes interativos customizados

### Ferramentas de Desenvolvimento
- **Live Server** - Servidor local para desenvolvimento
- **Git** - Controle de versão
- **JSON** - Estrutura de dados para produtos

## 👥 Integrantes do Projeto

| Nome Completo | Função | Responsabilidades |
|---------------|--------|-------------------|
| **2°SGT Milioli - 2° Jonathan** | **Desenvolvedor Full-Stack Frontend** | Desenvolvimento HTML, CSS, JavaScript, integração APIs, design responsivo |
| **2°SGT Milioli - 2° Jonathan** | **UI/UX Designer** | Criação do layout, experiência do usuário, identidade visual |
| **2°SGT Milioli - 2° Jonathan** | **Gerente de Projeto** | Planejamento, documentação, controle de qualidade |

*Substitua os nomes pelos integrantes reais do seu projeto*

## 🔌 APIs Integradas

### ViaCEP - Consulta de Endereços
- **Endpoint:** `https://viacep.com.br/ws/{cep}/json/`
- **Funcionalidade:** Preenchimento automático de endereço no formulário de contato
- **Implementação:** JavaScript com Fetch API
- **Validação:** CEP brasileiro com 8 dígitos

```javascript
// Exemplo de uso da API ViaCEP
async function buscarCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
}
```

### JSON Local - Catálogo de Produtos
- **Arquivo:** `produtos.json`
- **Funcionalidade:** Carregamento dinâmico do catálogo de produtos
- **Estrutura:** Array de objetos com id, nome, preço, descrição e imagem

## 🚀 Etapas do Desenvolvimento

### 1. **Planejamento e Estrutura**
- [x] Definição da arquitetura do projeto
- [x] Criação da estrutura de pastas
- [x] Wireframes e mockups das páginas

### 2. **Desenvolvimento da Landing Page**
- [x] Header com navegação responsiva
- [x] Hero section com slider automático
- [x] Seção de produtos dinâmica
- [x] Rodapé completo com informações de contato

### 3. **Páginas Institucionais**
- [x] Página "Sobre" com conteúdo institucional
- [x] Slider de imagens da empresa
- [x] Página "Contato" com formulário funcional

### 4. **Integração de APIs**
- [x] Integração com API ViaCEP
- [x] Consumo de arquivo JSON local
- [x] Tratamento de erros e validações

### 5. **Responsividade e Performance**
- [x] Design responsivo para mobile/tablet/desktop
- [x] Otimização de imagens
- [x] Testes em diferentes dispositivos

### 6. **Finalização e Documentação**
- [x] Documentação completa (README)
- [x] Comentários no código
- [x] Testes finais de funcionalidade

## 🏃‍♂️ Como Executar o Projeto Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Extensão Live Server (para VS Code)

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/smart-shopping.git
cd smart-shopping
```

2. **Abra o projeto no VS Code:**
```bash
code .
```

3. **Instale a extensão Live Server:**
- Abra o VS Code
- Vá em Extensions (Ctrl+Shift+X)
- Pesquise por "Live Server"
- Instale a extensão do Ritwick Dey

4. **Execute o projeto:**
- Clique com botão direito no arquivo `index.html`
- Selecione "Open with Live Server"
- O site abrirá automaticamente no navegador

### URLs Locais
- **Home:** `http://127.0.0.1:5500/index.html`
- **Sobre:** `http://127.0.0.1:5500/sobre.html`
- **Contato:** `http://127.0.0.1:5500/contato.html`

## 📁 Estrutura do Projeto

```
smart-shopping/
├── 📄 index.html          # Página principal
├── 📄 sobre.html          # Página institucional
├── 📄 contato.html        # Página de contato
├── 📄 index.css           # Estilos principais
├── 📄 sobre.css           # Estilos da página sobre
├── 📄 contato.css         # Estilos da página contato
├── 📄 produtos.js         # JavaScript principal
├── 📄 contato.js          # JavaScript do formulário
├── 📄 produtos.json       # Dados dos produtos
├── 📄 README.md           # Documentação
└── 📁 img/                # Imagens do projeto
    ├── 📄 logo.png        # Logotipo da empresa
    ├── 📁 banner/         # Imagens do slider principal
    ├── 📁 empresa/        # Imagens institucionais
    └── 📁 imgProduto/     # Imagens dos produtos
```

## ⚡ Funcionalidades Principais

### 🏠 Página Home
- **Slider Hero** com 4 imagens e navegação automática/manual
- **Catálogo dinâmico** carregado via JSON
- **Cards de produtos** com botão de compra
- **Navegação responsiva** com indicador de página ativa

### ℹ️ Página Sobre
- **Conteúdo institucional** completo
- **Slider de imagens** da empresa
- **Missão, visão e valores** organizados
- **Call-to-action** para conversão

### 📞 Página Contato
- **Formulário inteligente** com validações
- **Integração ViaCEP** para busca automática de endereço
- **Campos obrigatórios** com feedback visual
- **Responsividade total** em dispositivos móveis

## 🎨 Design e UX

### Paleta de Cores
- **Primária:** #e1a543 (Dourado)
- **Secundária:** #a1cee4 (Azul claro)
- **Texto:** #333333 (Cinza escuro)
- **Background:** #ffffff (Branco)

### Tipografia
- **Fonte principal:** Arial, sans-serif
- **Tamanhos responsivos:** rem e viewport units
- **Hierarquia clara:** H1, H2, H3 bem definidos

## 📱 Responsividade

### Breakpoints
- **Mobile:** até 768px
- **Tablet:** 769px - 1024px  
- **Desktop:** 1025px+

### Adaptações Mobile
- Menu hambúrguer para navegação
- Slider com altura reduzida
- Grid de produtos em coluna única
- Formulários otimizados para touch

## 🧪 Testes Realizados

- ✅ Navegação entre páginas
- ✅ Funcionamento dos sliders
- ✅ Integração com API ViaCEP
- ✅ Carregamento de produtos via JSON
- ✅ Responsividade em diferentes dispositivos
- ✅ Validação de formulários
- ✅ Performance de carregamento

## 🚀 Melhorias Futuras

- [ ] Sistema de carrinho de compras
- [ ] Integração com payment gateway
- [ ] Sistema de login/cadastro
- [ ] Filtros de produtos avançados
- [ ] Avaliações e comentários
- [ ] Chat online com suporte
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email:** contato@smartshopping.com
- **Telefone:** (11) 9999-9999
- **Endereço:** São Paulo, SP
- **Website:** [Smart Shopping](https://smart-shopping.vercel.app)

---

**Desenvolvido com ❤️ para demonstrar as melhores práticas de desenvolvimento web frontend**
