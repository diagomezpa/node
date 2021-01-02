//const multiplicar = require('./multiplicar/muiltiplicar')
const { crearArchivo } = require('./multiplicar/muiltiplicar')
let base = 18;


crearArchivo(base).then(archivo => console.log(`Archivo creado : ${ archivo}`))
    .catch(e => console.log(e));