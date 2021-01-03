const fs = require('fs');
const color = require('colors');

const { Module } = require('module');

let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {

        console.log(`${base } * ${ i} = ${base *i}\n`.green);
    }

}

let crearArchivo = (base, limite = 10) => {

    if (!Number(base)) {
        reject('la base ingresada no es un numero');
        return;
    }
    let data = '';
    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {

            data += `${base } * ${ i} = ${base *i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        });


    });
}

module.exports = {

    crearArchivo,
    listarTabla
}