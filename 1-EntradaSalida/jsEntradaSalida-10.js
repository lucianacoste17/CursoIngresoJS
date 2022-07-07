/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
 {
	let importe;
	let Resultado;

	importe  = document.getElementById('txtIdImporte').value;
	importe  = parseInt(importe);
	Resultado = document.getElementById('txtIdResultado').value;
	Resultado  = parseInt(Resultado);
	Resultado = importe - (importe * 0.25);
	alert(" El resultado es  : " + Resultado);
 }