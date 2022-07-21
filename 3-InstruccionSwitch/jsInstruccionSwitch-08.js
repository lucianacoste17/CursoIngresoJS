/*Al seleccionar un destino informar si hace FRIO o C
ALOR en ese destino*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{   
		case "Bariloche":
	    case "Ushuaia": 
		  mensaje = "FRIO";
		break;
		default:
		  mensaje = "CALOR";
		  
	}
alert(mensaje);

}//FIN DE LA FUNCIÓN