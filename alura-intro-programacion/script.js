

function saltoDeLinea(){
    document.write("<br>");
    document.write("<br>");
 }

alert("la edad es...")


var anho=2022;

document.write("La edad es...<br>");
document.write(20/4);
document.write(" años"+"de edad<br>");

document.write("la edad es " + (20/4/2));

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Juan tiene " + (anho-2000) + " años");
document.write("<br>");
document.write("Ramiro tiene " + (anho-2002) + " años");
document.write("<br>");
document.write("Pedro tiene " + (anho-1998) + " años");
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("cambiando el valor de la variable");
document.write("<br>");

anho=2023;

document.write("Juan tiene " + (anho-2000) + " años");
document.write("<br>");
document.write("Ramiro tiene " + (anho-2002) + " años");
document.write("<br>");
document.write("Pedro tiene " + (anho-1998) + " años");
document.write("<br>");

var edadRamiro= 23;
var edadPedro= 21;
var edadJuan= 25;


saltoDeLinea();
saltoDeLinea();
var saltarLinea="<br><br><br>";

promedio= (edadRamiro+edadPedro+edadJuan)/3;
document.write(saltarLinea);

document.write(saltarLinea);

document.write("la edad promedio es " + Math.round(promedio));

document.write(saltarLinea);


// imc

pesoCarlos = 71
alturaCarlos = 1.72
imcCarlos = pesoCarlos/(alturaCarlos * alturaCarlos)

document.write(" el imc es " + imcCarlos)

function CalcularImc(peso,altura){
   imc= peso/(altura * altura)
   return imc
}

//
// otra forma mejor Seria 
// function CalcularImc(peso,altura){
//     return peso/(altura * altura)
//  }

saltoDeLinea();
imcAna= CalcularImc(72, 1.55)

document.write(" el imc de Ana es " + imcAna)

var pesoPropio=prompt("informe su peso")
var alturaPropio=prompt("informe su altura")

imcPropio= CalcularImc(pesoPropio, alturaPropio)
saltoDeLinea();
document.write(" Tu imc  es " + imcPropio)
document.write(saltarLinea);

if (imcPropio < 18.5){
  document.write("abajo de lo recomendado")
  document.write(saltarLinea);
};

if (imcPropio >= 18.5){
   if(imcPropio < 25){
      document.write("dentro de lo recomendado")
      document.write(saltarLinea);
   }
};

if (imcPropio > 25){
   if(imcPropio < 30){
      document.write("considerado sobrepeso")
      document.write(saltarLinea);
   }
};

if (imcPropio >= 30){
   document.write("considerado obesidad");
   document.write(saltarLinea);
};