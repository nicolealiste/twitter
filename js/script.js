function agregar(){
//si deseamos eliminar la llamada onclick="agregar del #boton"
/*window.onload= function(){
	document.getElementById('boton').addEventListener('click', agregar);
}*/

//recuperar el texto ingresado en textarea y lo limpio
var tareas= document.getElementById('tarea').value;
document.getElementById('tarea').value='';

//indicamos donde van a estar las tareas que recupere de textarea
var cont= document.getElementById('contenedor');

//creamos nuestros nuevos nodos elementos
var nuevasTareas= document.createElement('div');
var textoNuevaTarea= document.createTextNode('tareas');
var elementoContenedor= document.createElement('span');

//asignamos padres a nodos creados
elementoContenedor.appendChild(textoNuevaTarea);
nuevasTareas.appendChild(elementoContenedor);
cont.appendChild(nuevasTareas);

//creamos checkbox e iconos, les asignamos atributos y clases
var chck= document.createElement('input');
chck.type= 'checkbox';
chck.setAttribute('class','check');
var basura= document.createElement('span');
basura.classList.add('fa','fa-trash-o');
var cora= document.createElement('span');
cora.classList.add('fa','fa-heart');

//asignamos padres a nodos creados
nuevasTareas.appendChild(chck);
nuevasTareas.appendChild(basura);
nuevasTareas.appendChild(cora);

//agregamos un evento al hacer click, para que elimine o agregue tachado al elementoContenedor
chck.addEventListener('click', function(){
	elementoContenedor.classList.toggle('tachado');
})

//removemos el icono basurero al hacerle click sobre el
basura.addEventListener('click', function(){
	cont.removeChild(nuevasTareas);
})

//creamos funcion click para el corazon y asignamos clase red de css
cora.addEventListener('click', function(){
	cora.classList.toggle('red');
})

//valida que textarea no este vacía al presionar aceptar
if(tareas == null || tareas.length == 0){
	alert('¡Error! Debe ingresar tarea');
	return false;
}
}







