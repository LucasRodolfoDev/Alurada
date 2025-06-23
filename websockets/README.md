# AluraDocs

AluraDocs é uma aplicação web de edição colaborativa de documentos em tempo real, utilizando Node.js, Express, Socket.IO e MongoDB.

## Funcionalidades

- Criação, listagem e exclusão de documentos.
- Edição colaborativa em tempo real: múltiplos usuários podem editar o mesmo documento simultaneamente.
- Persistência dos documentos em banco de dados MongoDB.
- Interface web simples e intuitiva.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, Socket.IO, MongoDB
- **Frontend:** HTML, CSS (Bootstrap), JavaScript
- **Outros:** Nodemon (desenvolvimento)

## Como funciona

- O servidor Express serve os arquivos estáticos do frontend e gerencia a comunicação WebSocket via Socket.IO.
- O backend manipula eventos de criação, seleção, edição e exclusão de documentos, sincronizando as alterações entre todos os clientes conectados.
- O MongoDB armazena os documentos, permitindo persistência e consulta eficiente.

## Estrutura do Projeto

```
websockets/
├── public/                # Frontend (HTML, JS)
│   ├── index.html         # Página inicial (lista e cria documentos)
│   ├── documento.html     # Página de edição de documento
│   ├── index.js           # Lógica da página inicial
│   ├── documento.js       # Lógica da página de edição
│   ├── socket-front-index.js        # Comunicação WebSocket (index)
│   └── socket-front-documento.js    # Comunicação WebSocket (documento)
├── src/                   # Backend (Node.js)
│   ├── servidor.js        # Inicialização do servidor Express/Socket.IO
│   ├── socket-back.js     # Lógica dos eventos WebSocket
│   ├── documentosDb.js    # Operações com MongoDB
│   └── dbConnect.js       # Conexão com o banco de dados
├── mongo_scripts/         # Scripts auxiliares para MongoDB
├── package.json
└── README.md
```

## Como rodar o projeto

1. **Pré-requisitos:**
   - Node.js e npm instalados
   - MongoDB rodando localmente

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Observações

- O banco de dados utilizado é o `alura-websockets`, coleção `documentos`.
- O projeto utiliza WebSockets para garantir atualização em tempo real entre todos os clientes conectados ao mesmo documento.
- Para ambiente de produção, ajuste as variáveis de conexão do MongoDB conforme necessário.

