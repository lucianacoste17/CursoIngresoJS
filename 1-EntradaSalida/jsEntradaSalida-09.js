/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
 {
	let sueldo;
	let Resultado;

	sueldo  = document.getElementById('txtIdSueldo').value;
	sueldo  = parseInt(sueldo);
	Resultado = document.getElementById('txtIdResultado').value;
	Resultado  = parseInt(Resultado);
	Resultado = sueldo + (sueldo * 0.10);
	
	alert(" El resultado es  : " + Resultado); 
 }


