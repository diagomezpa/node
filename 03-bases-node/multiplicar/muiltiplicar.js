const fs = require('fs');
const { Module } = require('module');


let crearArchivo = (base) => {

    if (!Number(base)) {
        reject('la base ingresada no es un numero');
        return;
    }
    let data = '';
    return new Promise((resolve, reject) => {

        for (let i = 1; i <= 10; i++) {

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

    crearArchivo
}