"use strict";
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = 'Tyrannosaurus';
let extintos = true;
function extincion(config) {
    return config;
}
let autos = ['Ford', 'Chevrolet', 'Toyota'];
let nums = [1, 2, 3, 4, 5];
let checks = [];
let nums2 = [];
let tupla = [1, ['Jhon', 'Doe']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const var1 = Talla.Grande;
console.log(var1);
const estado = 2;
const objeto = {
    id: 1,
    name: 'Jhon',
    age: 30,
    talla: Talla.Grande,
    direccion: {
        numero: 123,
        calle: 'Calle 123',
        pais: 'Colombia',
    },
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'Puedes pasar';
    return 'No puedes pasar';
};
function validaEdad(edad, msg = 'Chancho') {
    if (edad > 17)
        return `Puedes ingresar ${msg}`;
    return 'No puedes ingresar';
}
validaEdad(18);
