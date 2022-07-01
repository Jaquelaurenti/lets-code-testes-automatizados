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

    // Vehicle
    this.licensePlate = ''
    this.model = ''
    this.status = ''
    // Rides
    // Aux
    this.response = ''
    this.token = ''

  }
  // Funções auxiliares
  setToUser(name, password, email, telephone) {
    this.name = name
    this.password = password
    this.email = email
    this.telephone = telephone
  }
  setToLogin(telephone, password) {
    this.telephone = telephone
    this.password = password
  }
  setToVehicle(model, licensePlate, status) {
    this.model = model
    this.licensePlate = licensePlate
    this.status = status
  }
  async post(path, data, isAutenticated = false) {
    let response;

    if(isAutenticated) {
      const headers = {
        'x-access-token': this.token
      }
      console.log("estou aqui");
      console.log(this.token)
      console.log(path)
      console.log(data)
      response =  await api.post(path, data, { header: headers});
      this.response = response.data;
      console.log(response)
    }
    else {
      response = await api.post(path, data);
      // Essa condição só vai acontecer somente quando a rota for a de loigin
      if(response.data.token) {
        this.token = response.data.token
      }
      this.response = response.data
    }    
  }
}

setWorldConstructor(CustomWorld);