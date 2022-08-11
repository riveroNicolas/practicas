// var titulo = document.querySelector("h1");
// titulo.textContent = "prueba de cambio de titulo" 




var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ;i<pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");

    var peso=tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    
    var altura=tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");
    
    
    
    var pesoEsValido= validarPeso(peso);
    var alturaEsValida= validarAltura(altura);
    
    if(!pesoEsValido){
        pesoEsValido= false
        tdIMC.textContent = "peso incorrecto"
        paciente.classList.add("paciente-incorrecto")
    };
    
    if(!alturaEsValida){
        alturaEsValida= false
        tdIMC.textContent = "altura incorrecta"
        paciente.classList.add("paciente-incorrecto")
    
    };
    
    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);

    }
    
}

function calcularIMC(peso,altura){
    var imc = peso /(altura*altura);
    // return tdIMC.textContent = imc.toFixed(2);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if(peso>=0 && peso<=1000){
    return true
    } else {
    return false
    }
}

function validarAltura(altura){
    if(altura>=0 && altura<=3.00){
    return true
    } else {
    return false
    }
}
