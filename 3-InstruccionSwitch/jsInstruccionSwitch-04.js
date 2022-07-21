/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()

{   
	var mesDelAño
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//fuente de cant dias wikipedia..
	switch(mesDelAño)
	{   case "Abril":
        case "Junio":
		case "Septiembre":
		case "Noviembre":
          mensaje = "Este mes tiene 30 dias ";
		break;
		case "Febrero":
		  mensaje = "Este mes tiene 28 dias";
		break;
		default:
		  mensaje = "Este mes tiene 31 dias";
	
	}
 alert(mensaje);



}//FIN DE LA FUNCIÓN

