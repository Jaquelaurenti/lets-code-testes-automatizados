# language: pt

Funcionalidade: Cadastrar Veículo
  Eu como usuário da aplicação me leva ai 
  Gostaria de cadastrar um veículo no sistema
  Para que eu possa utilizá-lo em corridas

Cenario: Cadastrar veículo na base
  Dado que eu atenticado com o telefone: '123456789' e a senha: '123456' informo o modelo: 'Cruze' e a placa: 'xpt-0022' e o status: 'available'
  Quando eu fizer uma requisição para cadastrar o veículo
  Então o retorno deverá ser um json, com as informações do veículo que foram inseridas na base.
