/**
 * Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
 */
 function mostrar()
 {
	 let number;
	 let max=0;
	 let min=11;
	 number = Math.floor(Math.random() * (max - min) + min);
 
	 alert(number);	
 
 }//FIN DE LA FUNCIÓN
 
 