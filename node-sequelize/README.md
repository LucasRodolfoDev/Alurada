# API Node.js com Sequelize

Este projeto implementa uma API RESTful para um sistema de cursos e matrículas, utilizando Node.js, Express e Sequelize como ORM.

## Estrutura do Projeto

```
src/
├── controllers/    # Controladores da aplicação
├── database/      # Configurações do banco de dados
├── models/        # Modelos Sequelize
├── routes/        # Rotas da API
├── services/      # Serviços da aplicação
└── app.js         # Configuração do Express
```

## Modelos

### Pessoa
- **Atributos:**
  - nome: string
  - email: string
  - cpf: string
  - ativo: boolean
  - role: string

### Categoria
- **Atributos:**
  - titulo: string

### Curso
- **Atributos:**
  - titulo: string
  - descricao: string
  - data_inicio: dateonly

### Matricula
- **Atributos:**
  - status: string

## Endpoints da API

### Pessoas
- `GET /pessoas` - Lista todas as pessoas
- `GET /pessoas/:id` - Obtém uma pessoa específica
- `POST /pessoas` - Cria uma nova pessoa
- `PUT /pessoas/:id` - Atualiza uma pessoa
- `DELETE /pessoas/:id` - Remove uma pessoa

### Categorias
- `GET /categorias` - Lista todas as categorias
- `GET /categorias/:id` - Obtém uma categoria específica
- `POST /categorias` - Cria uma nova categoria
- `PUT /categorias/:id` - Atualiza uma categoria
- `DELETE /categorias/:id` - Remove uma categoria

### Cursos
- `GET /cursos` - Lista todos os cursos
- `GET /cursos/:id` - Obtém um curso específico
- `POST /cursos` - Cria um novo curso
- `PUT /cursos/:id` - Atualiza um curso
- `DELETE /cursos/:id` - Remove um curso

### Matrículas
- `GET /matriculas` - Lista todas as matrículas
- `GET /matriculas/:id` - Obtém uma matrícula específica
- `POST /matriculas` - Cria uma nova matrícula
- `PUT /matriculas/:id` - Atualiza uma matrícula
- `DELETE /matriculas/:id` - Remove uma matrícula

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute as migrações:
```bash
npx sequelize-cli db:migrate
```

3. (Opcional) Execute os seeds:
```bash
npx sequelize-cli db:seed:all
```

4. Inicie o servidor:
```bash
npm run dev
```

## Testando a API

Você pode utilizar a coleção do Postman incluída no projeto (`Alura-Sequelize.postman_collection.json`) para testar todos os endpoints da API.

## Dependências Principais

- Express.js
- Sequelize
- SQLite3
- Dotenv
- Nodemon (desenvolvimento)
- ESLint