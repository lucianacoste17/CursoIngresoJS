
/*A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos 
y el promedio de peso xx ".*/

   //declaro variable de entrada
    //si es un valor int casteo
    //calculos de lo que se pida 
    //muestro resultado por alert 
function mostrar()
{
    let NombreNovia;
    let NombreNovio;
    let PesoNovia;
    let PesoNovio;
    let SumaPeso;
    let PromedioPeso;
    
        NombreNovia  = prompt("Nombre Novia") ;
        PesoNovia    = prompt( NombreNovia + " Ingrese su peso en kg") ;
        NombreNovio  = prompt("Nombre Novio") ;
        PesoNovio    = prompt( NombreNovio  + " Ingrese su peso en kg") ;
        PesoNovia    = parseInt(PesoNovia);
        PesoNovio    = parseInt(PesoNovio);
        SumaPeso     = PesoNovia + PesoNovio;
        PromedioPeso = SumaPeso / 2 ;

    alert (
        "Ustedes se llaman "  + NombreNovia  + " y "  + NombreNovio +
        " Pesan "             + PesoNovia    + " y "  + PesoNovio   + " kgs " +
        " que sumados son "   + SumaPeso     +
        " y el promedio de su peso es "  + PromedioPeso 
         ) ;
  
}
