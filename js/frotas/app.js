(function(){
  var app = angular.module("frota", []);

  app.controller("FrotaController", function(){
    this.products = frota;
  });

  app.controller("CarroController", function(){
    this.carro = {};

    this.addCarro = function(frota){
      frota.products.push(this.carro);
      this.carro = {};
    };
  })

  var frota = [
    {
      "combustivel": "Flex",
      "imagem": null,
      "marca": "Volkswagem",
      "modelo": "Gol",
      "placa": "FFF­5498",
      "cor": "Vermelho"
    },
    {
      "combustivel": "Gasolina",
      "imagem": null,
      "marca": "Volkswagem",
      "modelo": "Fox",
      "placa": "FOX­4125",
      "cor": null
    },
    {
      "combustivel": "Alcool",
      "imagem": "http://img.estadao.com.br/wp/jornal-do-carro/files/2012/08/FUSCA-1.jpg",
      "marca": "Volkswagen",
      "modelo": "Fusca",
      "placa": "PAI­4121",
      "cor": "Azul"
    }
  ]
})();
