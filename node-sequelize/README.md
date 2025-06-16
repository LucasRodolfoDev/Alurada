## NODE-SEQUELIZE

## Instalar Sequelize
```
$ 
```

## Gerando o modelo Pessoa
```
$ npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string
```

## Gerando o modelo Categoria
```
$ npx sequelize-cli model:generate --name Categoria --attributes titulo:string
```

## Gerando o modelo Curso
```
$ npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly
```

## Gerando o modelo Matricula
```
$ npx sequelize-cli model:generate --name Matricula --attributes status:string
```

## 
```
$ npx sequelize-cli db:migrate
```

## 
```
$ npx sequelize-cli seed:generate --name demo-pessoa
```


## 
```
$ npx sequelize-cli db:seed:all
```

