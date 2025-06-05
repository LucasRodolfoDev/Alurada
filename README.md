# Alurada

Este repositório contém a documentação e os projetos desenvolvidos durante os cursos da Alura realizados nos últimos meses. Abaixo, você encontrará uma descrição detalhada de cada projeto/documentação distribuído nos diretórios.

## Projetos

### 1. Projeto Sorteador de Números
**Diretório:** `projeto-sorteador-numeros`  
**Descrição:**  
Este projeto implementa um sorteador de números que permite ao usuário definir a quantidade de números a serem sorteados, bem como o intervalo (de/até). A interface é construída com HTML, CSS e JavaScript, oferecendo uma experiência interativa para o usuário.  
**Arquivos principais:**  
- `index.html`: Estrutura da página com formulário para entrada dos parâmetros de sorteio.  
- `style.css`: Estilização da interface.  
- `app.js`: Lógica de sorteio e interação com o usuário.  
**Como executar:**  
Abra o arquivo `index.html` em um navegador para utilizar o sorteador.

### 2. Projeto Carrinho de Compras
**Diretório:** `projeto-carrinho-compras`  
**Descrição:**  
Este projeto simula um carrinho de compras, onde o usuário pode adicionar produtos, definir quantidades e visualizar o total. A interface é desenvolvida com HTML, CSS e JavaScript, proporcionando uma experiência de compra interativa.  
**Arquivos principais:**  
- `index.html`: Estrutura da página com formulário para adicionar produtos.  
- `style.css`: Estilização da interface.  
- `js/app.js`: Lógica de adição, remoção e cálculo do total do carrinho.  
**Como executar:**  
Abra o arquivo `index.html` em um navegador para interagir com o carrinho de compras.

### 3. Projeto AluGames
**Diretório:** `projeto-alugames`  
**Descrição:**  
Este projeto simula um sistema de aluguel de boardgames, onde o usuário pode visualizar os jogos disponíveis e realizar ações de aluguel/devolução. A interface é construída com HTML, CSS e JavaScript, oferecendo uma experiência interativa para o usuário.  
**Arquivos principais:**  
- `index.html`: Estrutura da página com lista de jogos e botões de ação.  
- `css/main.css`: Estilização da interface.  
- `js/app.js`: Lógica de alteração de status dos jogos (aluguel/devolução).  
**Como executar:**  
Abra o arquivo `index.html` em um navegador para interagir com o sistema de aluguel de boardgames.

### 4. Projeto Interagindo com HTML
**Diretório:** `interagindo_html`  
**Descrição:**  
Este projeto implementa um jogo de adivinhação de números, onde o usuário deve escolher um número entre 1 e 10. A interface é desenvolvida com HTML, CSS e JavaScript, proporcionando uma experiência interativa e divertida.  
**Arquivos principais:**  
- `index.html`: Estrutura da página com formulário para entrada do número.  
- `style.css`: Estilização da interface.  
- `app.js`: Lógica de verificação do chute e reinício do jogo.  
**Como executar:**  
Abra o arquivo `index.html` em um navegador para jogar o jogo de adivinhação.

### 5. Fundamentos de JavaScript
**Diretório:** `fundamentos-js`  
**Descrição:**  
Este diretório contém uma série de atividades e exemplos práticos que cobrem os fundamentos da linguagem JavaScript. Os arquivos abordam tópicos como variáveis, funções, expressões de função, arrow functions, template strings, operadores, condicionais e muito mais.  
**Arquivos principais:**  
- `atividade01.js` até `atividade10.js`: Exercícios práticos sobre variáveis, condicionais e operadores.  
- `expressao-funcao.js`: Exemplos de expressões de função.  
- `arrow-function.js`: Exemplos de arrow functions.  
- `funcoes.js`: Exemplos de funções básicas e hoisting.  
**Como executar:**  
Cada arquivo pode ser executado individualmente em um ambiente Node.js ou em um navegador, dependendo do contexto do exercício.

### 6. Projeto Express com MongoDB
**Diretório:** `express-mongodb`  
**Descrição:**  
Este projeto implementa uma API RESTful utilizando o framework Express.js e o banco de dados MongoDB. A aplicação gerencia uma biblioteca de livros e autores, oferecendo endpoints para listar, cadastrar, atualizar e excluir registros.  
**Arquivos principais:**  
- `server.js`: Ponto de entrada da aplicação, configurando o servidor Express.  
- `src/app.js`: Configuração do app Express e conexão com o banco de dados.  
- `src/config/dbConnect.js`: Configuração da conexão com o MongoDB.  
- `src/models/Livro.js` e `src/models/Autor.js`: Definição dos modelos de dados utilizando Mongoose.  
- `src/routes/livrosRoutes.js` e `src/routes/autoresRoutes.js`: Definição das rotas da API.  
- `src/controllers/livroController.js` e `src/controllers/autorController.js`: Implementação das funcionalidades de CRUD para livros e autores.  
**Dependências principais:**  
- Express.js  
- MongoDB  
- Mongoose  
- Dotenv  
- Nodemon (para desenvolvimento)  
**Como executar:**  
1. Certifique-se de ter o Node.js e o MongoDB instalados.  
2. Instale as dependências com `npm install`.  
3. Configure as variáveis de ambiente (ex: `DB_CONNECTION_STRING`).  
4. Execute o servidor com `npm run dev`.  
5. Acesse a API através dos endpoints definidos (ex: `http://localhost:3000/livros`).

