"use strict";
class DatosBasicos {
    constructor(name, desc, createdAt, createdBy) {
        this.name = name;
        this.desc = desc;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    get fullYear() {
        return this.createdAt.getFullYear();
    }
    get fullDesc() {
        return this.name + ' - ' + this.desc;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, desc, createdAt, createdBy) {
        super(name, desc, createdAt, createdBy);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Producto: ' + super.fullDesc;
    }
    guardar() {
        console.log('Guardando producto');
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, createdAt, createdBy) {
        super(name, desc, createdAt, createdBy);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDesc() {
        return 'Categoria: ' + super.fullDesc;
    }
    guardar() {
        console.log('Guardando categoria');
    }
}
let producto1 = new Producto(100, 1, 'Iphone', 'Iphone 12', new Date(), 1);
let categoria = new Categoria('Celulares', 'Celulares de ultima generacion', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDesc);
