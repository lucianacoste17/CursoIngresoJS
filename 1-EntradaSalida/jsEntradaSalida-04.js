/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var data; 
	data = prompt("Ingrese sus datos");
	document.getElementById('txtIdNombre').value=data ;
	alert(data)
}