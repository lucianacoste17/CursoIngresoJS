/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{  
		//numero >=1 && numero <= 10
let number;
let max=1;
let min=11;
number = Math.floor(Math.random() * (max - min) + min);
	
 if (number == 9 || number == 10)
	 {
       mensaje = (number + " EXCELENTE");
	 }
	 else if (number > 4)
	    {
		   mensaje = ( number +" APROBÓ");
	    }
 else 
	 {
		mensaje = (number + " Vamos, la proxima se puede");
	 }
	 
alert (mensaje);

}//FIN DE LA FUNCIÓN