// Asyn await  

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Diego');
        }, 3000);
    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre}`;
}

/*
getNombre().then(nombre => {
    console.log(nombre);
})
*/

saludo().then(mensaje => {
    console.log(mensaje);
})