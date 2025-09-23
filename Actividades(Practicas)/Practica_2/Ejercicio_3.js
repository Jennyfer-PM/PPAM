const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

const nombre = personas.find(personas => personas.nombre === "Luis");

console.log(nombre);

personas.forEach(persona => {
    console.log(persona.nombre + " " + persona.edad);
})

const suma = personas.map(personas => personas.edad).reduce((acumulador, edad) => acumulador + edad, 0);

console.log(suma);