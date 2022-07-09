/*
Realizar el algoritmo que pida los datos necesarios para un triángulo 
equilátero por prompt y que muestre el perímetro por alert.*/
    //declaro variable de entrada
    //si es un valor int casteo
    //calculos de lo que se pida 
    //muestro resultado por alert 
function mostrar()
{
    let LadoEquilatero;
    let IngresePerimetro;
    let Perimetro;

    IngresePerimetro   = prompt ("Ingrese lado");
    IngresePerimetro   = parseInt(IngresePerimetro);
    Perimetro          = IngresePerimetro * 3;

    alert("El perimetro del triangulo es " + Perimetro );
}
