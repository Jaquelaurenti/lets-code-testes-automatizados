// primeira coisa importar o index
const index = require('../index');

// describe: é a descrição do conteúdo que será testado

describe('Aplicando os testes em index.JS', () => {
  // iniciando os testes

  test('Aplicar a função de soma e obter 15', () => {
    const result = index.soma(10,5);
    // dentro do expect eu coloco meu objeto que será inspecionado an comparação
    expect(result).toEqual(15);
  });

  test('Aplicar a função de divisão e obter 5', () => {
    const result = index.dividir(10,2);
    expect(result).toEqual(5)
  });

  test('Aplicar a função de divisão e e obter que não é permitido dividir por 0', () => {
    const result = index.dividir(10,0);
    expect(result).toEqual('Não é possível dividir por 0')
  });


  // CONSTRUIR Substração, MULTIPLICAO 

})