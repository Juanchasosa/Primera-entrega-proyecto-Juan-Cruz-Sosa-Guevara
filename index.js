class Divisa{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    };
};

const divisas = [];

divisas.push(new Divisa ("Dólar", 160.88));
divisas.push(new Divisa ("Euro", 131.77));
divisas.push(new Divisa ("Real", 23.90));

const comprarMoneda = () => {

    let operacion;
    do{
        operacion = parseInt(prompt("Qúe moneda desea comprar? 1) Dólar 2) Euro 3) Real"));

    switch (operacion) {
        case 1:
            let cantidadDeDolares = parseInt(prompt("Cuántos dólares desea comprar?"));
            let totalDeDolares = cantidadDeDolares * divisas[0].precio;
            alert("El precio total en pesos argentinos es: $" + totalDeDolares);
            break;
        
        case 2:
            let cantidadDeEuros = parseInt(prompt("Cuántos Euros desea comprar?"));
            let totalDeEuros = cantidadDeEuros * divisas[1].precio;
            alert("El precio total en pesos argentinos es: $" + totalDeEuros);
            break;
        
        case 3:
            let cantidadDeReales = parseInt(prompt("Cuántos Reales desea comprar?"));
            let totalDeReales = cantidadDeReales * divisas[2].precio;
            alert("El precio total en pesos argentinos es: $" + totalDeReales);
            break;
        

        default:
            alert ("No ha ingresado un valor correcto");
            operacion = "";
            break;
    };
        
    } while (!operacion);
}

comprarMoneda();

