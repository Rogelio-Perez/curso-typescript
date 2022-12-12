abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected createdAt: Date,
    protected createdBy: number
  ) {}

  get fullYear() {
    return this.createdAt.getFullYear()
  }

  get fullDesc() {
    return this.name + ' - ' + this.desc
  }

  abstract guardar(): void;
  
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    createdAt: Date,
    createdBy: number
  ) {
    super(name, desc, createdAt, createdBy)
  }

  override get fullDesc() {
    return 'Producto: ' + super.fullDesc
  }

  guardar(): void {
      console.log('Guardando producto')
  }
  
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = []
  constructor(name: string, desc: string, createdAt: Date, createdBy: number) {
    super(name, desc, createdAt, createdBy)
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto)
  }

  override get fullDesc() {
    return 'Categoria: ' + super.fullDesc
  }

  guardar(): void {
      console.log('Guardando categoria')
  }
}

let producto1 = new Producto(100, 1, 'Iphone', 'Iphone 12', new Date(), 1)
let categoria = new Categoria('Celulares', 'Celulares de ultima generacion', new Date(), 1)

categoria.agregarProducto(producto1)

console.log(producto1.fullDesc)
