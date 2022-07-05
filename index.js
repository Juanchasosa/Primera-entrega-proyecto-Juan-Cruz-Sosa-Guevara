const productos = [];

class Producto{
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

productos.push(new Producto ("Televisor Samsumg", 40999, "asdwdfefad"));
productos.push(new Producto ("Televisor Philco", 41999, "asdwdfefad"));
productos.push(new Producto ("Televisor Hitachi", 42999, "asdwdfefad"));
productos.push(new Producto ("Televisor Samsumg 2", 30999, "asdwdfefad"));
productos.push(new Producto ("Televisor Sony", 45999, "asdwdfefad"));
productos.push(new Producto ("Samsumg galaxy", 50999, "asdwdfefad"));
productos.push(new Producto ("Samsumg a62", 40000, "asdwdfefad"));
productos.push(new Producto ("Samsumg note", 60000, "asdwdfefad"));
productos.push(new Producto ("Samsumg s22", 23000, "asdwdfefad"));
productos.push(new Producto ("Samsumg fold", 320000, "asdwdfefad"));
productos.push(new Producto ("Samsumg flip", 245000, "asdwdfefad"));
productos.push(new Producto ("Ps5", 30000, "asdwdfefad"));
productos.push(new Producto ("Microondas", 24000, "asdwdfefad"));
productos.push(new Producto ("Lavarropas", 24000, "asdwdfefad"));
productos.push(new Producto ("Notebook", 24000, "asdwdfefad"));
productos.push(new Producto ("Tablet", 24000, "asdwdfefad"));
productos.push(new Producto ("Horno", 24000, "asdwdfefad"));


let container = document.getElementById("container");

let busqueda = prompt("El producto que está buscando");
const capitalize = busqueda.charAt(0).toUpperCase() + busqueda.slice(1).toLowerCase();
let filtrados = productos.filter(elemento => elemento.nombre.includes(capitalize));
let menorAMayor = filtrados.sort ((a, b) => a.precio - b.precio);

for (const producto of menorAMayor) {
    let items = document.createElement("div");
    items.innerHTML = `<h2>${producto.nombre}</2>
                        <p>Precio: ${producto.precio}</p>
                        <img src= ${producto.img}>`;

    container.append(items);
    
}
