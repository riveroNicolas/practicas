function saltarLinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}

var numero = parseInt(prompt("ingrese el numero a multiplicar"));
var multiplicador = 1

imprimir("con while");
while(multiplicador <= 10){
    imprimir(numero + " * " + multiplicador + " = " + (numero * multiplicador))
    multiplicador += 1
    // tambien se puede decir multiplicador ++
};

imprimir("con for");
for(var multiplicador = 1;multiplicador <= 10;multiplicador += 1){
    imprimir(numero + " * " + multiplicador + " = " + (numero * multiplicador))
};