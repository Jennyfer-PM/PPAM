const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

const nombre = personas.find(persona => personas.nombre === "Luis");

console.log(nombre);