/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{    
    let Fahrenheit;
    let TempIngresada;
    let ConversionTemp;
    
    
    Fahrenheit      = prompt("Ingrese Temperatura");
    TempIngresada   = document.getElementById('txtIdTemperatura').value;
    TempIngresada   = parseInt(TempIngresada);
    ConversionTemp  = (TempIngresada - 32 ) * 5/9 ;
    alert( TempIngresada + " Son " + ConversionTemp + " Centigrados");
}

function CentigradosFahrenheit () 
{    
        let Centigrados;
        let TempIngresada;
        let ConversionTemp;
        
        
        Centigrados     = prompt("Ingrese Temperatura");
        TempIngresada   = document.getElementById('txtIdTemperatura').value;
        TempIngresada   = parseInt(TempIngresada);
        ConversionTemp  = (1.8 * TempIngresada) + 32 ;
        alert( TempIngresada + "centigrados son " + ConversionTemp + " grados Fahrenheit") ;
	
} 
