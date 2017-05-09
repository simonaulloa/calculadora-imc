
var x = prompt("datos para imc:");
 
  alert("aleta de mensaje");

  
  function calcularPeso(){//desde aqui es el codigo de anisen
  	var altura=document.getElementById("valoraltura").value;
  	var peso=document.getElementById("valorpeso").value;
  	var guardar=document.getElementById("guardar");
  	var resultado=peso/Math.pow(altura,2);
    alert(resultado);
  };//hasta aqui :)
  