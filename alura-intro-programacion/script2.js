function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}

var victorias = parseInt(prompt("¿Cuantas victorias tuvo tu equipo?"));

var empates = parseInt(prompt("¿Cuantas empates tuvo tu equipo?"));

var puntosTotal = victorias * 3 + empates;

var anhoPasado = 28

imprimir("el total de puntos del equipo es: " +  puntosTotal);

if (puntosTotal > anhoPasado){
    imprimir("el equipo esta mejor que el año pasado");
}
else if(puntosTotal < anhoPasado){
    imprimir("el equipo esta peor que el año pasado");
}

else{
    imprimir("el equipo esta igual que el año pasado");
}