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



    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {

        throw new Error(`El empleado con id ${ id } no existe`);
    } else {

        return empleadoDB;
    }


}

let getsalario = async(empleado) => {


    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });

    }

}

let getTnformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getsalario(empleado);

    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`
}

getTnformacion(1).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));