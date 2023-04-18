//Tipos de datos boolean (true, False)
var bandera = false;
console.log(typeof bandera);

//Tipos de dato funcion 
function miFuncion(){

}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una funcion
class Personas{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}
console.log(typeof Personas);

// Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);