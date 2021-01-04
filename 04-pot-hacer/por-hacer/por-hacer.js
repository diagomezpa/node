const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            throw new Error('No se pudo guardar ', err);
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {

        listadoPorHacer = [];
    }


}

/*
version de Diego
const borrar = (descripcion) => {
    cargarDB();
    console.log("descrip " + descripcion);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        console.log(listadoPorHacer.splice(index, 1));
        listadoPorHacer = listadoPorHacer.splice(index, 1);

        guardarDB();
        return true;
    } else {

        return false;
    }

}
*/
// profesor 
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    }


}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {

        return false;
    }

}

const getListado = () => {
    cargarDB();
    let lista = listadoPorHacer;
    return lista;
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {

        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar

}