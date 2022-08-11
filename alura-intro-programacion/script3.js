function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}

var numeroPensado = Math.round(Math.random()*10);

var intentos = 3;

var contador = 1;

while(contador <= intentos){
    var numeroLanzado = parseInt(prompt("ingrese un numero entre 0 y 10"));

    if(numeroLanzado==numeroPensado){
      alert("usted acerto");
      break
    }

    else{
       alert("usted no acerto,siga probando ")
       contador ++
    }
};

if(numeroLanzado==numeroPensado){
    imprimir("usted acerto en el " + contador + "º intento.");
  }

  else{
    imprimir("usted no acerto,el numero pensado era " + numeroPensado)

  }
