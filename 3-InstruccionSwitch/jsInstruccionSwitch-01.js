/*
Enero
 Mostrar información
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{  
	//tomo el mes
   var mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{   case "Enero":
		  mensaje = "que comiences bien el año!!!";
		break;
		case "Marzo":
	      mensaje = "a clases!!!";
		break;
		case "Julio":
		  mensaje = "se vienen las vacaciones!!!";
		break;
		case "Diciembre":
		  mensaje = "Felices fiesta!!!.";
		break;
		default:
		  mensaje = "No aplica Mes";
	}
alert(mensaje);


}//FIN DE LA FUNCIÓN