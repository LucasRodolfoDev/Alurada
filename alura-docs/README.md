# AluraDocs 📝

Um editor de documentos colaborativo em tempo real desenvolvido com Node.js, Socket.IO e MongoDB. Permite que múltiplos usuários editem documentos simultaneamente com sincronização em tempo real.

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Sistema de login e cadastro com JWT
- **Editor Colaborativo**: Múltiplos usuários podem editar o mesmo documento simultaneamente
- **Sincronização em Tempo Real**: Alterações são refletidas instantaneamente para todos os usuários conectados
- **Lista de Usuários Conectados**: Visualização de quem está editando o documento
- **Gerenciamento de Documentos**: Criar, editar e excluir documentos
- **Interface Responsiva**: Design moderno com Bootstrap 5

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Socket.IO** - Comunicação em tempo real
- **MongoDB** - Banco de dados NoSQL
- **JWT** - Autenticação de usuários
- **bcrypt** - Criptografia de senhas

### Frontend
- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização
- **JavaScript (ES6+)** - Lógica do cliente
- **Bootstrap 5** - Framework CSS
- **Socket.IO Client** - Cliente para comunicação em tempo real

## 📁 Estrutura do Projeto

```
alura-docs/
├── public/                     # Arquivos estáticos (frontend)
│   ├── index.html             # Página principal
│   ├── login/                 # Páginas de autenticação
│   ├── cadastro/              # Páginas de cadastro
│   ├── documento/             # Editor de documentos
│   └── utils/                 # Utilitários do frontend
├── servidor/                  # Código do servidor
│   ├── db/                    # Configuração do banco de dados
│   ├── middlewares/           # Middlewares de autenticação
│   ├── registrarEventos/      # Eventos do Socket.IO
│   ├── utils/                 # Utilitários do backend
│   ├── servidor.js            # Configuração do servidor Express
│   └── socket-back.js         # Configuração do Socket.IO
├── mongo_scripts/             # Scripts do MongoDB
└── package.json               # Dependências do projeto
```

## ⚙️ Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MongoDB (local ou MongoDB Atlas)
- npm ou yarn

### Passos para Instalação

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   MONGODB_URI=sua_uri_do_mongodb
   JWT_SECRET=seu_jwt_secret
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador e acesse: `http://localhost:3000`

## 🎯 Como Usar

1. **Cadastro/Login**: Acesse a aplicação e faça login ou cadastre-se
2. **Criar Documento**: Na página principal, digite o nome do documento e clique em "Adicionar documento"
3. **Editar Documento**: Clique no documento desejado para abrir o editor
4. **Colaboração**: Múltiplos usuários podem editar simultaneamente
5. **Visualizar Usuários**: Veja quem está conectado no painel lateral

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento com nodemon
- `npm test` - Executa os testes (não implementado)

## 📊 Banco de Dados

O projeto utiliza MongoDB com duas coleções principais:

- **usuarios**: Armazena informações dos usuários (nome, senha hash, etc.)
- **documentos**: Armazena os documentos criados pelos usuários

## 🔐 Segurança

- Senhas são criptografadas usando bcrypt
- Autenticação baseada em JWT
- Middleware de autorização para rotas protegidas
- Validação de entrada de dados
