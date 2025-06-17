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
├── utils/         # Utilitários e helpers
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
- `GET /pessoas` - Lista todas as pessoas ativas
- `GET /pessoas/todos` - Lista todas as pessoas (ativas e inativas)
- `GET /pessoas/:id` - Obtém uma pessoa específica
- `POST /pessoas` - Cria uma nova pessoa
  ```json
  {
    "cpf": "98765432109",
    "nome": "Matheus Ramos",
    "email": "matheuscarino@gmail.com",
    "ativo": true,
    "role": "estudante"
  }
  ```
- `PUT /pessoas/:id` - Atualiza uma pessoa
  ```json
  {
    "cpf": "12345678901",
    "nome": "Lucas Rodolfo",
    "email": "lrodolfo30@gmail.com"
  }
  ```
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
- `GET /pessoas/:id/matriculas` - Lista matrículas ativas de uma pessoa
- `GET /pessoas/:id/matriculas/todos` - Lista todas as matrículas de uma pessoa
- `GET /pessoas/:id/matriculas/:matriculaId` - Obtém uma matrícula específica de uma pessoa
- `POST /pessoas/:id/matriculas` - Cria uma nova matrícula para uma pessoa
- `PUT /pessoas/:id/matriculas/:matriculaId` - Atualiza uma matrícula específica
- `DELETE /pessoas/:id/matriculas/:matriculaId` - Remove uma matrícula específica

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

Você pode utilizar a coleção do Postman incluída no projeto (`Alura-Sequelize.postman_collection.json`) para testar todos os endpoints da API. A coleção contém exemplos de requisições para todos os endpoints disponíveis.

## Dependências Principais

- Express.js
- Sequelize
- SQLite3
- Nodemon (desenvolvimento)
- ESLint