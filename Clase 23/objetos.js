let auto = {
  color: "verde",
  marca: "fiat",
  modelo: "bravo",
  año: 2008,
  potencia: "130bhp",
};

let camioneta = ["verde", "fiat", "bravo"];
let autos = [234, true, "modelo", undefined,];
console.log(auto)
auto.kilometraje = 3000;
console.log(auto)
auto.color = "rojo";
delete auto.marca;

// for (var llave in auto) {
//   if (auto.hasOwnProperty(llave))           {
//     console.log(auto[llave])
//   }
// }

let products = [
  { 
    id: 1232,
    name: "Leche",
    price: 120,
    categories: ["familiar", "comida"],
  },
  { 
    id: 1232,
    name: "Arroz",
    price: 80,
    categories: ["familiar", "comida"]
  },
  { 
    id: 3442,
    name: "Lavadora",
    price: 7800,
    categories: ["electrodomésticos"] 
  },
];

for (let i = 0; i < products.length; i++) {
  console.group(products[i].name)
  console.log(`id: ${products[i].id}`)
  console.log(`Precio: $${products[i].price}`)
  console.log(`Categorias: ${products[i].categories[0]}`)
  console.groupEnd()
}

