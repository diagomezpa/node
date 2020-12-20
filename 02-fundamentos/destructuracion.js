let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracióna',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`
    }


};

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primernombre, apellido, poder } = deadpool

console.log(primernombre, apellido, poder);