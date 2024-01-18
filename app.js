let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo;

nuevoJuego();

asignarTextoElemento("h1", "Juego del número secreto");

function intentoDeUsuario() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  numeroDeUsuario == numeroSecreto? asignarTextoElemento("p", "Acertaste el número en "+intentos+" intento/os") : asignarTextoElemento("p", "No acertaste, el número secreto es "+(numeroDeUsuario>numeroSecreto? "menor": "mayor")), intentos++;
  limpiarCaja();
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
  let numeroAleatorio = (Math.floor(Math.random() * 10) + 1);
  if (listaNumerosSorteados.length != numeroMaximo) {
    if(listaNumerosSorteados.includes(numeroAleatorio)){
      return generarNumeroSecreto();
    }
    else{
      listaNumerosSorteados.push(numeroAleatorio);
      return numeroAleatorio;
    }  
  }else{
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  }
  
}

function limpiarCaja(){
  document.querySelector("#valorUsuario").value = "";
}

function nuevoJuego() {
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  limpiarCaja();
}