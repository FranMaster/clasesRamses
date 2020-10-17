
document.getElementById('btnEnviar')
        .addEventListener('click',mostrarNombre);

function mostrarNombre(){
   document.getElementById('container').style.backgroundColor='white';
   document.getElementById('container').style.color='black';
   var nombreIngresado= document.getElementById('Nombre').value;
   document.getElementById('texto').innerHTML=nombreIngresado;
}

