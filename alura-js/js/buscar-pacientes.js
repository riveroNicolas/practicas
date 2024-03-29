var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("buscando"); 
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status ==200){
            errorAjax.classList.add("invisible")
            var respuesta = xhr.responseText;
            console.log(respuesta)
            console.log(typeof respuesta)
    
            var pacientes = JSON.parse(respuesta);
            console.log(pacientes);
            console.log(typeof pacientes)
    
            pacientes.forEach(function(paciente){
            adicionarPacienteEnLaTabla(paciente);
            });
        }else{
            errorAjax.classList.remove("invisible")
            console.log(xhr.status)
            console.log(xhr.responseText)
        }

        

    });
    xhr.send()

});

