var botaoAdicionar= document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
var xhr= new XMLHttpRequest();

xhr.open("Get," "https://api-pacientes.herokuapp.com/paciente");

});