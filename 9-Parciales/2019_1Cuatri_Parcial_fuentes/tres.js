    
    
   /* Pedir por prompt el precio 
    y el porcentaje de descuento, 
    mostrar el precio final con descuento por id.*/
    //declaro variable de entrada
    //si es un valor int casteo
    //calculos de lo que se pida 
    //muestro resultado por alert 

function mostrar()
{
   let PrecioProducto ;
   let PorcentajeDesc ;
   let CalculoDesc    ;

    PrecioProducto = prompt ("Ingrese el precio");
    PorcentajeDesc = prompt ("Ingrese porcentaje");
    PrecioProducto = parseInt(PrecioProducto);
    PorcentajeDesc = parseInt(PorcentajeDesc);
    CalculoDesc    = PrecioProducto - ( PrecioProducto * (PorcentajeDesc / 100 ) );
    document.getElementById('elPrecioFinal').value = CalculoDesc;


}
