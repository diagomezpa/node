//const multiplicar = require('./multiplicar/muiltiplicar')

const { crearArchivo, listarTabla } = require('./multiplicar/muiltiplicar')
const argv = require('./config/yargs').argv;
const color = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado : ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no econocido');

}

//let argv = process.argv;
//let parametro = argv[2];
// let base = parametro.split('=')[1]