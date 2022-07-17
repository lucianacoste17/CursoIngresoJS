/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let CantidadLamp;
    let PrecioLapara;
    let Descuento;
    let Marca;

    CantidadLamp = document.getElementById("txtIdCantidad").value;
    Descuento    = document.getElementById("txtIdprecioDescuento").value;
    Marca        =  document.getElementById("Marca").value;
    CantidadLamp = parseInt(CantidadLamp);
    Descuento    = parseInt(Descuento);
    PrecioLapara = 36;

/*Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30% */
	if 
    (CantidadLamp == 5 )
     {  
        if (Marca == "ArgentinaLuz")  
        {   
            Descuento = PrecioLapara - (PrecioLapara * 0.4);
        }
        else 
       { 
            Descuento = PrecioLapara - (PrecioLapara * 0.3);
       }
     } 
       
/*Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20% */
    if 
    (CantidadLamp == 4 )
    {  
      if (Marca == "ArgentinaLuz" || "FelipeLamparas")  
        {   
            Descuento = PrecioLapara - (PrecioLapara * 0.25);
        }
        else 
    { 
            Descuento = PrecioLapara - (PrecioLapara * 0.2);
    }
     }  
    

/*Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento 
es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%*/
    if 
    (CantidadLamp == 3)
    
        if (Marca == "ArgentinaLuz" )
      {   
            Descuento = PrecioLapara - (PrecioLapara * 0.15);
      }
        if 
        ( Marca == "FelipeLamparas" )
      {   
            Descuento = PrecioLapara - (PrecioLapara * 0.10);
      }
    else 
    { 
            Descuento = PrecioLapara - (PrecioLapara * 0.5);
    }
    

alert(Descuento);
}
 
