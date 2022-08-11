var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar")

    var paciente= capturarDatosPaciente(form);
    console.log(paciente)

    var errores= validarPaciente(paciente);

    if(errores.length > 0){
        exhibirMensajesErrores(errores)
        return;
    }

    
    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = ""



})

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = contruirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){
    
    // capturando los datos del formulario

    var paciente ={
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function contruirTr(paciente){
        // creando los tds y un tr
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

    
    
    
        // asignacion al tr de los Td y a la tabla el tr
        pacienteTr.appendChild(contruirTd(paciente.nombre,"info-nombre"));
        pacienteTr.appendChild(contruirTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(contruirTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(contruirTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(contruirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function contruirTd(dato,clase){
    var td= document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }

    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }

    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }

    if(paciente.gordura.length == 0){
        errores.push("El % de gordura no puede estar vacio");
    }

    if(!validarPeso(paciente.peso)){
        errores.push("el peso es incorrecto");
    }

    if(!validarAltura(paciente.altura)){
        errores.push("la altura es incorrecta");
    }
    
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-errores");
    ul.innerHTML = ""

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

}