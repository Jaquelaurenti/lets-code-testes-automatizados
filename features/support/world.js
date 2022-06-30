// vamos configurar todos os arquivos que vao sustentar os nossos testes

const { setWorldConstructor } = require('cucumber'); //utilizado para armazenar nossa classe construtora
const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

class CustomWorld {
  constructor() {
    // User
    this.name = ''
    this.password = ''
    this.email = ''
    this.telephone = ''
    this.response = ''

    // Vehicle
    // Rides

  }
  // Funções auxiliares
  setToUser(name, password, email, telephone) {
    this.name = name
    this.password = password
    this.email = email
    this.telephone = telephone
  }
  async postUser(path) {
    const data = {
      name: this.name,
      email: this.email,
      telephone: this.telephone,
      password: this.password
    }
    console.log("Estou aqui dentro do postUser");
    const response = await api.post(path, data);
    this.response = response.data;
    console.log(this.response);
  }
}

setWorldConstructor(CustomWorld);