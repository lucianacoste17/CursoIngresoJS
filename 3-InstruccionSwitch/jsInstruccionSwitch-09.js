/*una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una 
estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene 
un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 
10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA */

function mostrar()
{
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado  = txtIdDestino.value;
	EstadiaBase           = 15000;
	DescuentoDiez         = EstadiaBase - (EstadiaBase * 0.10);
	AumentoDiez           = EstadiaBase + (EstadiaBase * 0.10);
	DescuentoVeinte       = EstadiaBase - (EstadiaBase * 0.20);
	AumentoVeinte         = EstadiaBase + (EstadiaBase * 0.20);


	switch  (estacionIngresada) 
{        case "Invierno":
	{    switch(destinoIngresado)
	   {   
	       case "Bariloche":
			mensaje = ("Precio Final " + AumentoVeinte);
		   break;
		   case  "Mar del plata":
			mensaje =("Precio Final " + DescuentoVeinte);
		   break;
		   default:
			mensaje = ("Precio Final " + DescuentoDiez);
      } 
	}
  } 
    switch (estacionIngresada) 
     { case "Verano":
        {  switch(destinoIngresado)
		  {
		   case "Bariloche" :
			mensaje = ("Precio Final " + DescuentoVeinte);
		  break;
		  case "Mar del plata":
			mensaje = ("Precio Final " + AumentoVeinte);
		  break;
		  default:
			mensaje = ("Precio Final " + AumentoDiez);
	   }
     }     
   }   
   switch  (estacionIngresada) 
		{ case "Otoño":
		  case "Primavera":
		{ switch(destinoIngresado)
			{ case "Bariloche" :
		    mensaje = "Precio Final " + AumentoDiez;
		  break;
		  case "Cordoba" :
			mensaje = ("Precio Final " + EstadiaBase);
		  default:
			mensaje = "Precio Final " + AumentoDiez;
		}
      } 
	}
alert(mensaje);
}
	
//FIN DE LA FUNCIÓN