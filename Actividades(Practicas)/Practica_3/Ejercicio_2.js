function verificarUsuario(usuario){
    const promise = new Promise ((resolve, rejected) => {
        if(usuario == "Admin"){
            resolve ("Acceso aceptado");
        } else {
            rejected ("Acceso denegado")
        }
    });
    return promise;
}

verificarUsuario("admi")
.then(res => console.log(res))
.catch(err => console.error(err));

verificarUsuario("Jessie")
.then(res => console.log(res))
.catch(err => console.error(err));