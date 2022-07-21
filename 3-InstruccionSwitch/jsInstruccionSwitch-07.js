/*Al selecionar un destino , indicar el punto cardinal 
de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */

function mostrar()
{   
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{   case "Bariloche":
		  mensaje = "Sur";
		break;
		case "Cataratas":
	      mensaje = "Este";
		break;
		case "Mar del plata":
		  mensaje = "Este de bs as";
		break;
		case "Ushuaia":
		  mensaje = "Sur";
		break;
	}
alert(mensaje);


}//FIN DE LA FUNCIÓN