/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    let Largo;
    let Ancho;
    let CantiAlamb = 3;

        Largo  = document.getElementById('txtIdLargo').value;
        Ancho  = document.getElementById('txtIdAncho').value;
        Largo  = parseInt(Largo);
        Ancho  = parseInt(Ancho);
        Acomprar = ((Largo + Ancho ) *2) * CantiAlamb ;
        alert( "Cantidad de alambre a comprar es " + Acomprar + " metros de alambre");


}

function Circulo () 
{  
    let Radio;
    let CantiAlamb = 3;
        
        Radio = document.getElementById('txtIdRadio').value;
        Radio = parseInt(Radio);
        Acomprar = Radio * CantiAlamb;
        alert( "Cantidad de alambre a comprar es " + Acomprar + " metros de alambre");

	
}

function Materiales () 
{
    let Largo;
    let Ancho;
    let Cemento     = 1/2;
    let Cal         = 1/3;
    var AcomprarCemento;

        Largo  = document.getElementById('txtIdLargo').value;
        Ancho  = document.getElementById('txtIdAncho').value;
        Radio  = document.getElementById('txtIdRadio').value;
        Largo  = parseInt(Largo);
        Ancho  = parseInt(Ancho);
        Radio  = parseInt(Radio);

        AcomprarCemento = (Largo * Cemento) + (Ancho * Cemento)  + (Radio * Cemento);
        AcomprarCal     = (Largo * Cal) + (Ancho * Cal)  + (Radio * Cal);
        AcomprarCemento = Math.round(AcomprarCemento) ;
        AcomprarCal     =  Math.round(AcomprarCal) ;
        alert("Se deben comprar " + AcomprarCemento + " bolsas de cemento y " +
        + AcomprarCal + " bolsas de cal " );
    } 