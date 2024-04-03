function suma(numero1, numero2) {
    return numero1 + numero2;
}

var resultado = suma(22, 45); 
console.log(resultado);

    function sumar() {
      var numero1 = parseFloat(document.getElementById('numero1').value);
      var numero2 = parseFloat(document.getElementById('numero2').value);
      var resultado = numero1 + numero2;
      document.getElementById('resultado').innerText = "El resultado es: " + resultado;
    }
    function resta() {
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        var resultado = numero1 - numero2;
        document.getElementById('resultado').innerText = "El resultado es: " + resultado;
      }
      function multiplica() {
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        var resultado = numero1 * numero2;
        document.getElementById('resultado').innerText = "El resultado es: " + resultado;
      }
      function dividir() {
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        var resultado = numero1 / numero2;
        document.getElementById('resultado').innerText = "El resultado es: " + resultado;
      }
  
  