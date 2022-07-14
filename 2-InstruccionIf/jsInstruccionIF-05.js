/**
 Al ingresar una edad solo debemos informar si la persona NO es adolescente.
 */


 function mostrar()
 { 
	 let edad;
	 edad= document.getElementById("txtIdEdad").value;
	 edad= parseInt(edad);
 
	 if( edad >= 23)
 
	 { 
	   alert("Usted no es  adolescente");
	 }
	 
 }