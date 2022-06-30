// vou armazenar todos os steps dos cenários de cada testes que eu for criar

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('que o usuario tenha informado nome: {string}, telefone: {string}, email: {string} e senha:{string}', function (name, telephone, email, password) {
  return this.setToUser(name, password, email, telephone);
});

When('ele clicar no botão cadastrar', async function () {
  return await this.postUser('/user')
});

Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado', function () {
  expect(this.response.name).to.eql('Teste Cucumber');
  expect(this.response.telephone).to.eql('123456789');
  expect(this.response.email).to.eql('teste@bdd.com');

});