let marca = prompt("Ingresa la marca del producto que deseas: Motorola o Kenwood ");
    marca = marca.toUpperCase();
    console.log("marca: "+ marca);
tipo = prompt("Que tipo de radio deseas: Analogo o Digital? ");
    tipo = tipo.toUpperCase();
    console.log("tipo: " + tipo);
if ((marca=="MOTOROLA")&&(tipo=="ANALOGO")){
    modelo = prompt("Ingresa el modelo del producto que deseas: DEP450 ó TK3230 ");
}else 
    if ((marca=="MOTOROLA")&&(tipo=="DIGITAL")){
        modelo = prompt("Ingresa el modelo del producto que deseas: DEP850 ó DEP570 "); 
    }else 
        if ((marca=="KENWOOD")&&(tipo=="ANALOGO")){
            modelo = prompt("Ingresa el modelo del producto que deseas: PKT23 Ó TK3200 "); 
        } else
            if ((marca=="KENWOOD")&&(tipo=="DIGITAL")){  
            modelo = prompt("Ingresa el modelo del producto que deseas: NX1200 ó NX5300");
            }
            else {
                console.log("El radio no existe");
            }

modelo = modelo.toUpperCase();            
console.log("modelo: " + modelo);


// Constructor de objetos cuando tenemos que realizar varios objetos con las mismas propiedades, es decir varias personas
function radio(descripcion, precio){
    this.descripcion = descripcion;
    this.precio = precio;
    console.log("Descripción: " + descripcion);
    console.log("precio:         $ " + precio);
    impuesto = precio * 0.21;
    console.log("21% IVA:        $ " + impuesto);
    descuento = precio * 0.1;
    console.log("10% Descuento:  $ " + descuento);
    let total = precio + impuesto - descuento;
    console.log ("Total:          $ " + total);
    }

    switch (modelo){
        case "DEP450": 
            const DEP450 = new radio("Radio portátil análogo Motorola DEP450", 2500);
            break;
        case "TK3230": 
            const TK3230 = new radio("Radio portátil análogo Motorola TK3230", 3400);
            break;
        case "DEP850": 
            const DEP850 = new radio("Radio portátil digital Motorola DEP850", 4800);
            break;
        case "DEP570": 
            const DEP570 = new radio("Radio portátil digital Motorola DEP570", 5720);
            break;
        case "PKT23":
            const PKT23 = new radio("Radio portátil análogo Kenwood PKT23", 5200);
            break;
        case "TK3200":
            const TK3200 = new radio("Radio portátil análogo Kenwood TK3200", 3850);
            break;
        case "NX1200":
            const NX1200 = new radio("Radio portátil digital Kenwood NX1200", 3020);
            break;
        case "NX5300":
            const NX5300 = new radio("Radio portátil digital Kenwood NX5300", 8500);
            break;
        default:
            console.log("El producto no existe");
    }








