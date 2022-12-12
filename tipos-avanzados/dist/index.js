"use strict";
let puntaje = 98;
puntaje = 'hola mundo';
let animal = { id: 1, estado: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
sumaDos(5);
const product = {
    createdAt: '',
    modifiedAt: '',
    name: '',
};
const nDeFibo = 2;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return { id: 1, name: 'John', createdAt: new Date() };
}
const user = getUser(1);
console.log('Usuario: ', user === null || user === void 0 ? void 0 : user.createdAt);
