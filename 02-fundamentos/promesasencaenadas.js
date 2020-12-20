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

let getEmpleado = (id) => {


    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {

            reject(`El empleado con id ${ id } no existe`);
        } else {

            resolve(empleadoDB);
        }

    });
}

let getsalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });

        }
    });
}

getEmpleado(10).then(empleado => {

    return getSalario(empleado);
}).then(resp => {

    console.log(`El salario e ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});