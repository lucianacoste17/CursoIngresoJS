/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{	//declaro variables let
    let precioUno;
	let precioDos;
	let precioTres;
    precioUno  = document.getElementById('txtIdPrecioUno').value;
	precioUno  = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos  = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres  = parseInt(precioTres);
    resultado = (precioUno + precioDos + precioTres);
    alert( resultado);


}
function Promedio () 

{   
    let precioUno;
	let precioDos;
	let precioTres;
    cantidad_productos=3;
    precioUno  = document.getElementById('txtIdPrecioUno').value;
	precioUno  = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos  = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres  = parseInt(precioTres);
    resultado = precioUno + precioDos + precioTres / cantidad_productos;
    alert(resultado);
	
}


function PrecioFinal () 
{  
    let precioUno;
	let precioDos;
	let precioTres;
    precioUno  = document.getElementById('txtIdPrecioUno').value;
	precioUno  = parseInt(precioUno);
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos  = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres  = parseInt(precioTres);
    resultado = (precioUno + precioDos + precioTres) ;
    precioFinal= resultado + ( resultado * 0.21);
    alert( precioFinal);
	
}