# language: pt

Funcionalidade: Realizar o login do usuário a fim de obter autenticação
  Como um usuário da aplicação me leva ai 
  Gostaria de me autenticar no sistema
  Para que possa acessar as funcionalidades disponíveis no me leva ai 

Cenário: Login de usuário 
  Dado que eu insira o telefone: '123456789' e a senha: '123456'
  Quando eu fizer uma requisição de Login 
  Então o retorno deverá ser um json, com as informações do usuário e um token para autenticação

