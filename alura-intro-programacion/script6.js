function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}


 var numeroMiembros = parseInt(prompt("ingrese la cantidad de miembros de su familia"));

var contador =1;

var edadTotal = 0;

while(contador <= numeroMiembros){
    edad=parseInt(prompt("ingrese la edad de un familiar"))
    contador ++
    edadTotal += edad
};

imprimir("La media de edades entre los " + numeroMiembros + " miembros de la familia es " + edadTotal/numeroMiembros)

// var edadPadre = parseInt(prompt("cual es la edad del padre"));

// var edadMadre = parseInt(prompt("cual es la edad de la madre"));

// var edadHijo = parseInt(prompt("cual es la edad del hijo"));

// var edadHija = parseInt(prompt("cual es la edad de la hija"));


// var mediaDeEdades = (edadPadre + edadMadre + edadHijo + edadHija )/4;

// imprimir("La media de la edad es " + mediaDeEdades);