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

### 7. API Node.js com Express - Parte 2
**Diretório:** `api-node-express-2`  
**Descrição:**  
Este projeto implementa uma API RESTful mais avançada utilizando Node.js e Express, focando em boas práticas de desenvolvimento e organização do código. O projeto inclui configuração de ESLint para padronização do código e utiliza Postman para testes da API.  
**Arquivos principais:**  
- `server.js`: Ponto de entrada da aplicação.  
- `src/`: Diretório contendo a estrutura organizada do projeto.  
- `.eslintrc.json`: Configurações do ESLint para padronização do código.  
- `Alura-NodeJS.postman_collection.json`: Coleção de requisições para testes da API.  
**Dependências principais:**  
- Express.js  
- ESLint  
- Dotenv  
- Nodemon (para desenvolvimento)  
**Como executar:**  
1. Certifique-se de ter o Node.js instalado.  
2. Instale as dependências com `npm install`.  
3. Configure as variáveis de ambiente no arquivo `.env`.  
4. Execute o servidor com `npm run dev`.  
5. Utilize a coleção do Postman para testar os endpoints da API.

### 8. JavaScript Assíncrono
**Diretório:** `javascript-assincrono`  
**Descrição:**  
Este diretório contém exemplos e exercícios práticos sobre programação assíncrona em JavaScript, abordando conceitos como Promises, async/await, callbacks e manipulação de eventos assíncronos. Os exemplos demonstram como trabalhar com operações assíncronas de forma eficiente e organizada.  
**Tópicos abordados:**  
- Promises e suas características  
- Async/await para código assíncrono mais limpo  
- Callbacks e suas limitações  
- Manipulação de erros em operações assíncronas  
- Event Loop e sua importância  
**Como executar:**  
Os exemplos podem ser executados em um ambiente Node.js ou no navegador, dependendo do contexto do exercício.

### 9. Node.js com Sequelize
**Diretório:** `node-sequelize`  
**Descrição:**  
Este projeto implementa uma API RESTful para um sistema de cursos e matrículas, utilizando Node.js, Express e Sequelize como ORM. O projeto demonstra a implementação de um sistema completo com relacionamentos entre entidades e operações CRUD.  
**Arquivos principais:**  
- `src/`: Estrutura organizada do projeto
  - `controllers/`: Controladores para cada entidade
  - `database/`: Configurações do banco de dados
  - `models/`: Modelos Sequelize (Pessoa, Categoria, Curso, Matricula)
  - `routes/`: Rotas da API
  - `services/`: Lógica de negócios
  - `utils/`: Utilitários e helpers
- `Alura-Sequelize.postman_collection.json`: Coleção de requisições para testes
- `.sequelizerc`: Configuração do Sequelize CLI
- `Modelo Entidade Relacionamento - MER.png`: Diagrama do banco de dados

**Funcionalidades implementadas:**
- CRUD completo para Pessoas, Categorias, Cursos e Matrículas
- Relacionamentos entre entidades
- Validações de dados
- Migrations para controle de versão do banco
- Seeds para dados iniciais

**Dependências principais:**  
- Express.js
- Sequelize
- SQLite3
- Nodemon (desenvolvimento)
- ESLint

**Como executar:**  
1. Instale as dependências com `npm install`
2. Execute as migrações com `npx sequelize-cli db:migrate`
3. (Opcional) Execute os seeds com `npx sequelize-cli db:seed:all`
4. Inicie o servidor com `npm run dev`
5. Utilize a coleção do Postman para testar os endpoints

**Endpoints disponíveis:**
- `/pessoas`: CRUD de pessoas
- `/categorias`: CRUD de categorias
- `/cursos`: CRUD de cursos
- `/matriculas`: CRUD de matrículas

### 10. AluraDocs - Editor Colaborativo (WebSockets)
**Diretório:** `websockets`  
**Descrição:**  
Este projeto implementa um editor de documentos colaborativo em tempo real utilizando WebSockets (Socket.IO). Permite que múltiplos usuários editem o mesmo documento simultaneamente com sincronização instantânea das alterações.  
**Funcionalidades principais:**  
- Criação, listagem e exclusão de documentos
- Edição colaborativa em tempo real
- Sincronização automática entre todos os usuários conectados
- Persistência dos documentos no MongoDB
- Interface web simples e intuitiva

**Tecnologias utilizadas:**  
- **Backend:** Node.js, Express, Socket.IO, MongoDB
- **Frontend:** HTML, CSS (Bootstrap), JavaScript
- **Desenvolvimento:** Nodemon

**Estrutura do projeto:**  
- `public/`: Frontend com páginas HTML e JavaScript
- `src/`: Backend com servidor Express e lógica WebSocket
- `mongo_scripts/`: Scripts auxiliares para MongoDB

**Como executar:**  
1. Certifique-se de ter Node.js e MongoDB instalados
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm run dev`
4. Acesse `http://localhost:3000` no navegador

**Dependências principais:**  
- Express.js
- Socket.IO
- MongoDB
- Dotenv
- Nodemon (desenvolvimento)

### 11. AluraDocs - Sistema Completo com Autenticação
**Diretório:** `alura-docs`  
**Descrição:**  
Versão avançada do editor colaborativo com sistema completo de autenticação de usuários. Este projeto expande as funcionalidades do editor básico, adicionando login, cadastro, JWT e gerenciamento de usuários conectados.  
**Funcionalidades principais:**  
- Sistema de autenticação com JWT
- Cadastro e login de usuários
- Editor colaborativo em tempo real
- Lista de usuários conectados ao documento
- Gerenciamento completo de documentos
- Interface responsiva com Bootstrap 5
- Criptografia de senhas com bcrypt

**Tecnologias utilizadas:**  
- **Backend:** Node.js, Express, Socket.IO, MongoDB, JWT, bcrypt
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5
- **Segurança:** JWT para autenticação, bcrypt para senhas

**Estrutura do projeto:**  
- `public/`: Frontend organizado por funcionalidades (login, cadastro, documento)
- `servidor/`: Backend com middlewares, eventos Socket.IO e utilitários
- `mongo_scripts/`: Scripts para MongoDB

**Funcionalidades de segurança:**  
- Senhas criptografadas com bcrypt
- Autenticação baseada em JWT
- Middleware de autorização para rotas protegidas
- Validação de entrada de dados

**Como executar:**  
1. Certifique-se de ter Node.js e MongoDB instalados
2. Instale as dependências com `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   MONGODB_URI=sua_uri_do_mongodb
   JWT_SECRET=seu_jwt_secret
   ```
4. Inicie o servidor com `npm run dev`
5. Acesse `http://localhost:3000` no navegador

**Dependências principais:**  
- Express.js
- Socket.IO
- MongoDB
- jsonwebtoken
- bcrypt
- Dotenv
- Nodemon (desenvolvimento)

**Banco de dados:**  
- Coleção `usuarios`: Informações dos usuários
- Coleção `documentos`: Documentos criados pelos usuários

### 12. Autenticação e Teste de Segurança com Node.js
**Diretório:** `autenticacao-teste-seguranca-nodejs`
**Descrição:**
Este projeto explora técnicas de autenticação e segurança em aplicações Node.js, incluindo testes de segurança e validação de dados.
**Arquivos principais:**
- `server.js`: Configuração do servidor.
- `src/`: Implementação das funcionalidades de autenticação.
- `populate.sql`: Script para popular o banco de dados.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Configure as variáveis de ambiente no arquivo `.env`.
3. Execute o servidor com `npm start`.

### 13. Criptografia e Tokens JWT
**Diretório:** `criptografia-tokens-jwt`
**Descrição:**
Este projeto demonstra técnicas de criptografia, geração de tokens JWT e segurança de dados em aplicações web.
**Arquivos principais:**
- `hash/`: Exemplos de hashing.
- `token/`: Implementação de geração e validação de tokens JWT.
- `cifra/`: Técnicas de cifragem.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Execute os scripts individualmente para explorar as técnicas.

### 14. Curso Node.js com OAuth
**Diretório:** `curso-node-oauth`
**Descrição:**
Este projeto implementa autenticação OAuth em aplicações Node.js, integrando com provedores como GitHub.
**Arquivos principais:**
- `app.js`: Configuração do servidor.
- `passport-config.js`: Configuração do Passport para OAuth.
- `routes/`: Rotas de autenticação e APIs.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Configure as variáveis de ambiente no arquivo `.env`.
3. Execute o servidor com `npm start`.

### 15. Iniciando com TypeScript
**Diretório:** `iniciando-typescript`
**Descrição:**
Este projeto introduz o uso de TypeScript em aplicações Node.js, com exemplos de tipos, interfaces e classes.
**Arquivos principais:**
- `server.ts`: Código principal do servidor.
- `tsconfig.json`: Configuração do TypeScript.
- `src/`: Implementação de funcionalidades.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Compile o código com `tsc`.
3. Execute o servidor com `node build/server.js`.

### 16. MongoDB
**Diretório:** `mongodb`
**Descrição:**
Este projeto configura um ambiente de banco de dados MongoDB com suporte a Docker Compose.
**Arquivos principais:**
- `docker-compose.yml`: Configuração de serviços MongoDB.
- `data/`: Diretório para persistência de dados.
**Como executar:**
1. Execute `docker-compose up` para iniciar os serviços.
2. Acesse o MongoDB através do cliente configurado.

### 17. Testes com Node.js
**Diretório:** `nodejs-testes`
**Descrição:**
Este projeto explora boas práticas de testes em aplicações Node.js, incluindo testes unitários e de integração.
**Arquivos principais:**
- `server.js`: Configuração do servidor.
- `src/`: Implementação de funcionalidades e testes.
- `populate.sql`: Script para popular o banco de dados.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Execute os testes com `npm test`.

### 18. PostgreSQL
**Diretório:** `postgresql`
**Descrição:**
Este projeto configura um ambiente de banco de dados PostgreSQL com suporte a Docker Compose.
**Arquivos principais:**
- `docker-compose.yml`: Configuração de serviços PostgreSQL.
- `docker/`: Scripts auxiliares.
**Como executar:**
1. Execute `docker-compose up` para iniciar os serviços.
2. Acesse o PostgreSQL através do cliente configurado.

### 19. Segurança com Node.js
**Diretório:** `seguranca-nodejs`
**Descrição:**
Este projeto explora técnicas de segurança em aplicações Node.js, incluindo autenticação e proteção de dados.
**Arquivos principais:**
- `api/`: Implementação de APIs seguras.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Execute o servidor com `npm start`.

### 20. Documentação com Swagger
**Diretório:** `swagger-documentation`
**Descrição:**
Este projeto implementa documentação de APIs utilizando Swagger.
**Arquivos principais:**
- `tsconfig.json`: Configuração do TypeScript.
- `src/`: Implementação das APIs e documentação.
**Como executar:**
1. Instale as dependências com `npm install`.
2. Execute o servidor com `npm start`.
3. Acesse a documentação em `http://localhost:3000/api-docs`.

### 21. WordPress com MySQL
**Diretório:** `wordpress-mysql`
**Descrição:**
Este projeto configura um ambiente WordPress com suporte a banco de dados MySQL utilizando Docker Compose.
**Arquivos principais:**
- `docker-compose.yml`: Configuração de serviços WordPress e MySQL.
**Como executar:**
1. Execute `docker-compose up` para iniciar os serviços.
2. Acesse o WordPress em `http://localhost`.

