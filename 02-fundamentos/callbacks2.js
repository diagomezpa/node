let empleados = [{

        id: 1,
        nombre: 'Diego'
    },
    {

        id: 2,
        nombre: 'Carlos'
    },
    {

        id: 3,
        nombre: 'Martha'
    },

];
let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 1,
        salario: 3000
    },

]

let getEmpleado = (id, callback) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            console.log(`El empleado con id ${ id } no existe`);
        } else {

            callback(null, empleadoDB);
        }
    }
    /*

    let getSalario = (nombreempleado, callback) => {// este fue hecho pir mi 

        let empleadoNombre = empleados.find(empleado => empleado.nombre === nombreempleado) // me da el empleado con ese nombre 
        if (!empleadoNombre) {

            console.log(`El empleado con nombre ${ nombreempleado } no existe`);
        } else {
            let empleadoSalario = salarios.find(salario => salario.id === empleadoNombre.id)
            if (!empleadoSalario) {

                console.log(`El empleado ${ empleado } no tiene salario asignado e el sistema `);
            } else {
                let respuesta = {
                    nombre: empleadoNombre.nombre,
                    salario: empleadoSalario.salario

                }

                callback(null, respuesta);

            }

        }


    }
    */

let getSalario = (empleado, callback) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            callback(null, {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })

        }

    }
    /*
    getSalario('Diesgo', (err, empleado) => {
        if (err) {
            return console.log(err);

        } else {
            console.log(empleado);

        }
    });

    */

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);

    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);

    });


});