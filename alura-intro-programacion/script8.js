function aleatorio(){
   return Math.round(Math.random()*10);
}

function sortearNumeros(cantidad){
    var secretos =[];
    var contador = 1;
    while(contador <=cantidad){
        var numeroAleatorio = aleatorio();
        var encontrado = false;

        if(numeroAleatorio!=0){
            for(var posicion=0; posicion< secretos.length; posicion++){
                if(numeroAleatorio==secretos[posicion]){
                    encontrado = true;
                }
            }
    
            if(encontrado==false){
                secretos.push(numeroAleatorio);
                contador++;
            } 
        }


    }
    return secretos
}

var secretos = sortearNumeros(4);

// console.log(secretos)

var input = document.querySelector("input");
    // para q cuando inicie el programa ya este el cursor en el input
input.focus();

var button = document.getElementById("verificador");


function verificar(){
    var encontrado = false
    for(var posicion =0; posicion < secretos.length; posicion++){
        if(parseInt(input.value)== secretos[posicion]){
            alert("Usted acertó");
            encontrado=true;
            break;
        }
    }
    if (encontrado==false){
        alert("usted erró");
    }

    input.value= "";
    // para q despues de validar se quede vacio
      input.focus();
}

button.onclick = verificar;