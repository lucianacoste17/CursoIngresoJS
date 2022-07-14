/**
 * Al ingresar una edad debemos informar si la persona es mayor de 
 * edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
 */
 function mostrar()
 { 
	 let edad;
	 edad= document.getElementById("txtIdEdad").value;
	 edad= parseInt(edad);
 
	 if( edad < 13)
 
	 { 
		mensaje = "Usted es un niño";
	 }

	if( edad >= 13 && edad <= 17)
 
	 { 
		mensaje = "Usted es adolescente";
	 }
	 
	 else 
	 { 
		mensaje = "usted ya debe pagar impuestos";
	 }

	 alert(mensaje);
 }