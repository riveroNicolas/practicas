function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}

var anhoMundial = 1930;
var limite =parseInt(prompt("ingrese el año limite para calcular"))

 while( anhoMundial <= limite){
    imprimir("hubo mundial de la fifa en el año " + anhoMundial);
    anhoMundial = anhoMundial + 4
};

imprimir("fin")


