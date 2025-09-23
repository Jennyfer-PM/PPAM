const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre, edad, direccion: {ciudad, pais}} = persona;
console.log("Me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.direccion.ciudad);