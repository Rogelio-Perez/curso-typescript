"use strict";
class Caballo {
    constructor() {
        this.name = 'Sanson';
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'Hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Piggy';
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'Oink';
    }
}
class Perro {
    constructor() {
        this.name = 'Firulais';
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'Guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
diccionarioUsuarios['a1'] = 'usuario 2';
console.log(diccionarioUsuarios);
