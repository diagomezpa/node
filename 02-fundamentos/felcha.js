// let saludar = () => 'hola mundo ';


//console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracióna',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`
    }


};
console.log(deadpool.getNombre());