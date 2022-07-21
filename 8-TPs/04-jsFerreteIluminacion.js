/*4.

TP FERRETE ILUMINAVION (IF/SWITCH);

4.  Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio() {



  var cantidadDeLamparas;
  var precioPorLampara;
  var descuento;
  var marca;
  var resultado;
  var precioFinal;
  var ingresosBrutos;
  var impuesto;
  var texto;
  var precioConImpuesto;
  var SinDescuento;
  EstadiaBase           = 35;
  DescuentoCuarenta     = EstadiaBase - (EstadiaBase * 0.40);
  DescuentoTreinta      = EstadiaBase - (EstadiaBase * 0.30);
  DescuentoVeinticinco  = EstadiaBase - (EstadiaBase * 0.25)
  DescuentoVeinte       = EstadiaBase - (EstadiaBase * 0.20);
  DescuentoQuince       = EstadiaBase - (EstadiaBase * 0.15);
  DescuentoCincuenta    = EstadiaBase - (EstadiaBase * 0.50);
  DescuentoCinco        = EstadiaBase - (EstadiaBase * 0.5);

  cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
  cantidadDeLamparas = parseInt(cantidadDeLamparas);
  marca = document.getElementById("Marca").value;
  resultado = cantidadDeLamparas * precioPorLampara;


    
	switch  (marca) 
    {       
         case "ArgentinaLuz":
        {    
            switch(cantidadDeLamparas)
           {   case 1:
                 mensaje = precioPorLampara
               break;
               case 2:
                mensaje = precioPorLampara * 2 ;
               break;
               case  3:
                mensaje =("Precio Final " + DescuentoQuince);
               break;
               case 4:
                mensaje =("Precio Final " + DescuentoVeinticinco);
                break;
               case 5:
                mensaje =("Precio Final " + DescuentoCuarenta);
                break;
               default:
                mensaje = ("Precio Final " + DescuentoCincuenta);
          } 
        }
      } 

      switch  (marca) 
      {        case "FelipeLamparas":
          {    switch(cantidadDeLamparas)
             {   case 1:
                   mensaje = precioPorLampara
                 break;
                 case 2:
                  mensaje = precioPorLampara * 2 ;
                 break;
                 case  3:
                  mensaje =("Precio Final " + DescuentoCinco);
                 break;
                 case 4:
                  mensaje =("Precio Final " + DescuentoVeinticinco);
                  break;
                 case 5:
                  mensaje =("Precio Final " + DescuentoTreinta);
                  break;
                 default:
                  mensaje = ("Precio Final " + DescuentoCincuenta);
            } 
          }
        } 

        switch  (marca) 
      {        case "JeLuz":
               case "HazIluminacion":
               case "Osram":
          {    switch(cantidadDeLamparas)
             {   
                 case  3:
                  mensaje =("Precio Final " + DescuentoQuince);
                 break;
                 case 4:
                  mensaje =("Precio Final " + DescuentoVeinte);
                  break;
                 case 5:
                  mensaje =("Precio Final " + DescuentoTreinta);
                  break;
                 default:
                  mensaje = ("Precio Final " + DescuentoCincuenta);
            } 
          }
        }

alert(mensaje)
    }