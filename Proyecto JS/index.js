alert ("bienvenido.. Seleccione el producto que desea agregar al carrito")

let producto = "0";
const PBuscapina = 200;
const PBayaspirina = 300;
const PActron = 600;
const PAlgodon = 300;
const Pcuritas = 100;

let Buscapina = 0;
let Bayaspirina = 0;
let Actron = 0;
let Algodon = 0;
let curitas = 0;
let total = 0;


producto = prompt ( "elija una opcion : 1 Buscapina, 2 Bayaspirina, 3 Actron, 4 Algodon, 5 curitas, 0 Finalizar)");
    while (producto != 0){ 
       cantidad = prompt ("Elija la cantidad de productos")
        

        switch (producto){

            case "1":
                total = total + (PBuscapina * cantidad );
                    break;
            case "2":
                total = total + (PBuscapina * cantidad);
                    ;     
                    break;
            case "3":
                total = total + (PActron * cantidad);
                    break;
            case "4":
                total = total + (PAlgodon * cantidad);
                    break;
            case "5":
                total = total + (Pcuritas * cantidad);
                    break;
        }
producto = prompt ( "elija una opcion : 1 Buscapina), 2 Bayaspirina), 3 Actron), 4 Algodon), 5 curitas), 0 Finalizar)");
        

    }

alert ('total =' + total);
let medioPago = prompt ("elija medio de pago : 1 efectivo, 2 tarjeta");
if (medioPago == 1){
    alert  ("compra finalizada: total = $" + total);
}
else if (medioPago == 2) {
let recargo = total * 0.10; 
    alert ("el pago con tarjeta tiene un recargo del 10%")
    alert ("el total de su compra es =" + (total + recargo));
}
else {
    alert ("medio de pago no valido");
}