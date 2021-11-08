# Desafio Angular

Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.0.1.

## Development server

Rode `npm install` e `npm start` para rodar o servidor. Navegue para `http://localhost:4200/`. 

## Testes unitários

Rode `npm test` para executar os testes unitários.


## Dados de Teste

Como não há back-end, os dados foram "mockados" no associado.service.ts para utilização de dados de exemplo, e são eles:

```javascript
[
      {'cpf' : '01505078170', 'nome' : 'Fabio Alves', 'situacao' : true, 'conta_aplicacao': '5554854-4', 'conta_corrente' : '77842-9'},
      {'cpf' : '01505078171','nome' : 'João Marcos', 'situacao' : true, 'conta_aplicacao': '55552232-4', 'conta_corrente' : '77845-8'},
      {'cpf' : '01505078172','nome' : 'Pedro Miguel', 'situacao' : false, 'conta_aplicacao': '5554932-4', 'conta_corrente' : '77846-8'},
]
```

Utilize os CPF's dos dados acima para executar buscar o associado.
