const color = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea of listado) {

            console.log('=======por hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("=======================".green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(argv.descripcion);
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('COmando no es reconocido.');
        break;

}