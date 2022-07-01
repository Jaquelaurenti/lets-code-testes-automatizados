// vou armazenar todos os steps dos cenários de cada testes que eu for criar

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('que o usuario tenha informado nome: {string}, telefone: {string}, email: {string} e senha:{string}', function (name, telephone, email, password) {
  return this.setToUser(name, password, email, telephone);
});

When('ele clicar no botão cadastrar', async function () {
  const data = {
    name: this.name, 
    password: this.password,
    email: this.email,
    telephone: this.telephone
  }
  return await this.post('/user', data);
});

Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado', function () {
  expect(this.response.name).to.eql('Teste Cucumber');
  expect(this.response.telephone).to.eql('123456789');
  expect(this.response.email).to.eql('teste@bdd.com');

});

// Logar o usuário na aplicação
Given('que eu insira o telefone: {string} e a senha: {string}', function (telephone, password) {
 // seta os valores recebidos
  return this.setToLogin(telephone, password);
});

When('eu fizer uma requisição de Login', async function () {
  // precisamos implementar o post de login
  const data = {
    telephone: this.telephone,
    password: this.password
  }
  const path = "/user/login";
  return await this.post(path, data);
  
});

Then('o retorno deverá ser um json, com as informações do usuário e um token para autenticação', function () {
  // comparar o que foi recebido no post com o que o teste espera
  expect(this.response.user.name).to.eql('Teste Cucumber');
  expect(this.response.user.telephone).to.eql('123456789');
  expect(this.response.user.email).to.eql('teste@bdd.com');  
  expect(this.response).to.have.property('token');
});

// Cadastro de Veículo
Given('que eu atenticado com o telefone: {string} e a senha: {string} informo o modelo: {string} e a placa: {string} e o status: {string}', async function (telephone, password, model, licensePlate, status) {
  // primeiro eu faço o login a fim de me autenticar na aplicação
  // preciso instanciar o login
  this.setToLogin(telephone, password)
  // preciso chamar um post para fazer o login
  // precisamos implementar o post de login
  const data = {
    telephone: this.telephone,
    password: this.password
  }
  const path = "/user/login";
  await this.post(path, data);
  // instancio o meu veículo
  return this.setToVehicle(model, licensePlate, status);

});

When('eu fizer uma requisição para cadastrar o veículo', async function () {
  // aciono o post de veículo
  const data = {
    model: this.model,
    licensePlate: this.licensePlate,
    status: this.status
  }
  return await this.post('/vehicle', data, true);
});

Then('o retorno deverá ser um json, com as informações do veículo que foram inseridas na base.', function () {
  expect(this.response.licensePlate).to.eql('xpt-0022');
  expect(this.response.model).to.eql('Cruze');
  expect(this.response.status).to.eql('available');
});

