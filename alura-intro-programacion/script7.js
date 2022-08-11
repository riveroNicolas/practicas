function saltarLinea(){
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
}


var lineasdeseadas = parseInt(prompt("¿Cuantas lineas de estrellas queres dibujar?"));

var estrellasDeseadas = parseInt(prompt("¿Cuantas estrellas por linea?"));

for(var lineas =1; lineas<=lineasdeseadas; lineas++){
    for(var estrellas =1; estrellas<=estrellasDeseadas; estrellas++){
        imprimir("*");
    }
    
    saltarLinea();
}