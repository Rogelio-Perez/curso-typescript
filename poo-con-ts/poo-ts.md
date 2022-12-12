# Programacion Orientada a Objetos con TypeScript

## Indice

- <a href="#Introducción-a-la-POO">Introducción a la POO</a>
- <a href="#Clases-con-TypeScript">Clases con TypeScript</a>
- <a href="#Control-de-acceso">Control de acceso</a>
- <a href="#Parámetros-opcionales-y-de-solo-lectura">Parámetros opcionales y de solo lectura</a>
- <a href="#Propiedades-por-parámetros">Propiedades por parámetros</a>
- <a href="#Getters-y-setters">Getters y setters</a>
- <a href="#Propiedades-y-métodos-estáticos">Propiedades y métodos estáticos</a>
- <a href="#Herencia">Herencia</a>
- <a href="#Method-override">Method override</a>
- <a href="#Propiedades-protegidas-o-protected">Propiedades protegidas o protected</a>
- <a href="#Clases-y-métodos-abstractos">Clases y métodos abstractos</a>
- <a href="#Interfaces">Interfaces</a>
- <a href="#Index-signature">Index signature</a>

<h2 id="Introducción-a-la-POO">Introducción a la POO</h2>

La programación orientada a objetos es un paradigma de programación que se basa en el concepto de objetos, que son entidades que contienen datos en forma de campos, y código, en forma de procedimientos.

Existen los siguientes paradigmas:

- Programación estructurada
- Programación orientada a objetos
- Programación funcional

Esto es una forma en la que se puede resolver un problema, todas tienen su ventajas y desventajas.

En el caso de la POO se componen de `clases` y `objetos`.

Las clases pueden ser los planos para una casa
El objeto es la casa construida

Las clases se componen de propiedades y metodos

Propiedades: Son variables
Metodos: Son funciones

<h2 id="Clases-con-TypeScript">Clases con TypeScript</h2>

Vamos a ver como crear un clase e instanciarla.

Vamos a crear nuestra primera clase de la siguiente forma:

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  hp: number
}
```

Debemos utilizar la palabra reservada `class` para crear una clase.

Y llamar las clases con `PascalCase` o con `UpperCamelCase`.

Esto nos va a dar un error ya que nos pide un constructor.

El constructor es un metodo especial que se ejecuta cuando se crea una instancia de la clase.

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  hp: number
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this.hp = hp
  }
}
```

`this` es una instancia de la clase.

Para nosotros crear una instacia de personaje debemos hacer lo siguiente:

Debemos indicar la palabra de `new` para indicar que queremos una nueva instancia

```ts
const personaje = new Personaje(1, 'Goku', 1, 100)
```

Ahora agregaremos unos metodos a la clase, depues del constructor, escribimos el nombre del metodo y lo ponemos como una funcion pero no es necesario poner la palabra reservada `function`.

Un metodo es una funcion dentro de una clase:

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  hp: number
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this.hp = hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  cambiarHp(cantidad: number): number {
    this.hp = this.hp + cantidad
    return this.hp
  }
}
```

Para nosotros poder utilizar los metodos debemos crear una instancia de la clase y llamar al metodo:

```ts
const personaje = new Personaje(1, 'Goku', 1, 100)
personaje.cambiarHp(-10)
console.log('Personaje: ', personaje)
```

Ahora compilamos y vemos el resultado en la consola con `node`

```js
Personaje:  Personaje { id: 1, name: 'Goku', nivel: 1, hp: 90 }
```

En el caso del [**Type narrowing**](../tipos-avanzados/tiposAvanzados.md) que vimos en la seccion pasada, podemos hacer lo siguiente, para preguntar el tipo de dato que es:

```ts
if (personaje instanceof Personaje) {
  console.log('Es instancia de Personaje')
}
```

Y asi hacemos el `Type narrowing` cuando sean objetos.

Esto nos devuelve un `boolean` si es una instancia de la clase.

<h2 id="Control-de-acceso">Control de acceso</h2>

En este caso tenemos un problema con el `hp`, ya que este no debe pasarse del maximo y debemos hacer que estas propiedades no sea publicas.

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  private hp: number
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this.hp = hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  cambiarHp(cantidad: number): number {
    this.hp = this.hp + cantidad
    // no pasarse del maximo
    return this.hp
  }
}

const personaje = new Personaje(1, 'Goku', 1, 100)
personaje.cambiarHp(-10)
console.log('Personaje: ', personaje)
```

Vemos que ahora `hp` es privada, y solo se puede acceder dentro de la clase, hay conveciones y para declarar que una propiedad es privada aveces se utiliza un `_` para indicar que es privada.

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  private _hp: number
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }
}
```

Si ahora compilamos esto y lo ejecutamos con `node` nos entrega el siguiente codigo:

```js
Personaje:  Personaje { id: 1, name: 'Goku', nivel: 1, _hp: 90 }
```

Y podemos ver que el `_hp` es privada, porque tiene el `_`.

<h2 id="Parámetros-opcionales-y-de-solo-lectura">Parámetros opcionales y de solo lectura</h2>

Vamos a suponer que ahora tendran una profesion, y esta tiene un problema ya que no tendra una profesion por defecto, si no que despues se le asigna una, entonces se le delcara un valor con defecto o poner como una propiedad opcion de la siguiente manera:

```ts
class Personaje {
  id: number
  name: string
  nivel: number
  private _hp: number
  profesion?: string
}
```

Tambien para poner una propiedad como de solo lectura, se utiliza la palabra `readonly`, esto es para que la propiedad no se pueda modificar

```ts
class Personaje {
  readonly id: number
  name: string
  nivel: number
  private _hp: number
  profesion?: string
}
```

Las propiedades con `readonly` no se pueden modificar, pero si se pueden inicializar en el constructor.

```ts
class Personaje {
  readonly id: number
  name: string
  nivel: number
  private _hp: number
  profesion?: string
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = hp
  }
}
```

<h2 id="Propiedades-por-parámetros">Propiedades por parámetros</h2>

Vamos a ver como hacer esta misma definicion utilizado menos lineas, para eso utilizamos las `Propiedades por parametros`, y lo hacemos de la siguiente manera:

```ts
class Personaje {
  profesion?: string
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = _hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }
}
```

Esto se puede hacer cuando las propiedades estan incializadas, cuando no se dejan por fuera como el caso de `profesion`, ya que no se inicializa en el constructor.

<h2 id="Getters-y-setters">Getters y setters</h2>

Ahora para acceder a una propiedad privada para ver el valor, es con los `Getter y Setters` un get es para obtener el valor y un set es para asignar un valor, para esto se utiliza la palabra `get` y `set` seguido del nombre de la propiedad, y se utiliza de la siguiente manera:

```ts
get hp(): number {
  return this._hp
}

console.log(personaje.hp)
```

De esta forma se redactan los `Getter`

Ahora veremos como poner un `Setter`, para esto se utiliza la palabra `set` seguido del nombre de la propiedad, los `Setter` no retornan ningun valor,y se utiliza de la siguiente manera:

```ts
set hp(cantidad: number) {
  this._hp = this._hp + cantidad
}
personaje.hp = 20
```

Estos se hacen cuando realizamos validaciones de algun valor.

<h2 id="Propiedades-y-métodos-estáticos">Propiedades y métodos estáticos</h2>

Vamos a suponer que podemos tener un equipo de 4 personajes simultaneamente

Para esto vamos a agregar una nueva propiedad:

```ts
class Personaje {
  profesion?: string
  equipo: number = 0
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = _hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  agregarPersonaje(): void {
    this.equipo++
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }

  get hp(): number {
    return this._hp
  }
}

const personaje = new Personaje(1, 'Goku', 1, 100)
const personaje1 = new Personaje(2, 'Vegeta', 1, 120)

personaje.agregarPersonaje()
console.log(personaje, personaje1)
```

Como vemos hemos agregado un nuevo metodo `agregarPersonaje` que nos permite agregar un personaje al equipo, y tambien hemos agregado una nueva propiedad `equipo` que nos permite saber cuantos personajes tenemos en el equipo.

Pero si vemos lo que nos retorna en la consola tendremos lo siguiente:

```js
Personaje { id: 1, name: 'Goku', nivel: 1, _hp: 90, equipo: 1 }
Personaje { id: 2, name: 'Vegeta', nivel: 1, _hp: 120, equipo: 0 }
```

Como podemos ver el equipo de `Vegeta` no se ha modificado, esto es porque cada vez que creamos un nuevo personaje, se crea una nueva instancia de la clase, y por lo tanto cada personaje tiene su propia instancia, y por lo tanto cada personaje tiene su propio equipo.

Si nosotros queremos mantener algun dato, para que este sea compartido, debemos utilizar las **Metodos y Propiedades Estaticas** de la siguiente manera:

```ts
class Personaje {
  profesion?: string
  static equipo: number = 0
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = _hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  agregarPersonaje(): void {
    Personaje.equipo++
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }

  get hp(): number {
    return this._hp
  }
}
```

Como podemos ver es una propiedad estatica, y estas se modifican dentro de la clase no en la instancia

Si no queremos poder acceder a modificar en una instancia, si no que solo dentro de la clase, debemos agregar `static` a la propiedad o metodo.

```ts
class Personaje {
  profesion?: string
  private static equipo: number = 0
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = _hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  static agregarPersonaje(): void {
    Personaje.equipo++
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }

  get hp(): number {
    return this._hp
  }
}
```

De esta manera solo la clase puede acceder a la propiedad de `equipo` para que esta no sea modificada en las instancias.

Pero tampoco la podemos leer, para leerla podemos construir un metodo estatico que nos permita leerla.

```ts
static getEquipo(): number {
  return Personaje.equipo
}
```

Y ahora veremos cuantos personajes tenemos en el equipo.

<h2 id="Herencia">Herencia</h2>

Vamos a ver la **Herencia**, vamos a crear un nuevo archivo llamado `herencia.ts`, donde tendremos la clase de Producto, donde tendremos las propiedades de name, createdAt, creadetBy, stock, sku y mas datos

Ahora tambien tendremos una clase de Categoria donde tendremos las propiedades de name, desc, createdAt, creadetBy, en este caso ambas se les estan repitiendo las propiedades

Para esto debemos crear una clase superior y esta la asignara a las demas:

```ts
class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    public createdAt: Date,
    public createdBy: number
  ) {}

  get fullYear() {
    return this.createdAt.getFullYear()
  }
}
```

Ahora utilizaremos la herencia en las siguientes clases de la siguiente manera:

```ts
class Producto extends DatosBasicos {
  constructor(public stock: number, public sku: number) {
    super()
  }
}
```

`super()`, es el constructor de `DatosBasicos`, osea del padre, y debemos pasarle los parametros que se le piden en el constructor de `DatosBasicos`

```ts
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
}

let producto1 = new Producto(100, 1, 'Iphone', 'Iphone 12', new Date(), 1)
```

Ahora utilizaremos esta herencia para la clase de Categoria:

```ts
class Categoria extends DatosBasicos {
  public productos: Producto[] = []
  constructor(name: string, desc: string, createdAt: Date, createdBy: number) {
    super(name, desc, createdAt, createdBy)
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto)
  }
}

let categoria = new Categoria(
  'Celulares',
  'Celulares de ultima generacion',
  new Date(),
  1
)
categoria.agregarProducto(producto1)
```

Ahora compilamos y ejecutamos con NodeJS:

```js
Producto {
  name: 'Iphone',
  desc: 'Iphone 12',
  createdAt: 2022-12-08T18:03:24.033Z,
  createdBy: 1,
  stock: 100,
  sku: 1
}
Categoria {
  name: 'Celulares',
  desc: 'Celulares de ultima generacion',
  createdAt: 2022-12-08T18:03:24.033Z,
  createdBy: 1,
  productos: [
    Producto {
      name: 'Iphone',
      desc: 'Iphone 12',
      createdAt: 2022-12-08T18:03:24.033Z,
      createdBy: 1,
      stock: 100,
      sku: 1
    }
  ]
}
```

Y de esta manera nos ahorramos codigo, ya que no tenemos que repetir las propiedades de `name`, `desc`, `createdAt`, `createdBy` en las clases de `Producto` y `Categoria`

<h2 id="Method-override">Method override</h2>

Ahora crearemos un nuevo metodo que nos de el nombre y la descripcion juntos:

```ts
class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    public createdAt: Date,
    public createdBy: number
  ) {}

  get fullYear() {
    return this.createdAt.getFullYear()
  }

  get fullDesc() {
    return this.name + ' - ' + this.desc
  }
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
}

let producto1 = new Producto(100, 1, 'Iphone', 'Iphone 12', new Date(), 1)
let categoria = new Categoria(
  'Celulares',
  'Celulares de ultima generacion',
  new Date(),
  1
)
categoria.agregarProducto(producto1)

console.log(producto1.fullDesc)
```

<h2 id="Propiedades-protegidas-o-protected">Propiedades protegidas o protected</h2>

Vamos a hablar de las propiedades privadas y protegidas, vamos a ir a las propiedades de `DatosBasicos`

```ts
class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    private createdAt: Date,
    private createdBy: number
  ) {}
}
```

Si queremos acceder a este para leerlo o hacer algo mas:

```ts
class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected createdAt: Date,
    protected createdBy: number
  ) {}
}
```

Esto hace que solo sean accedidas desde dentro, pero igual por otras clases que Hereden los datos basicos

<h2 id="Clases-y-métodos-abstractos"">Clases y métodos abstractos</h2>

Las clases abstractas y los metodos abstractos son clases que no se pueden instanciar, solo se pueden heredar, y los metodos abstractos son metodos que no tienen implementacion, solo se pueden implementar en las clases que hereden de la clase abstracta.

Por ejemplo ahora podemos instanciar la clase `DatosBasicos`:

```ts
let datos = new DatosBasicos('Iphone', 'Iphone 12', new Date(), 1)
```

Pero nosotros si queremos bloquear las instancias de esta clase, podemos hacerlo de la siguiente manera:

```ts
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
}
```

Debemos agregar `abstract` antes de la palabra `class`, y ahora no podemos instanciar la clase `DatosBasicos`

Que pasa si queremos la clase de producto y categoria se tenga que implementar y producto se implemente de otra.

Si hacer implementaciones distintas, dentro de las clases abtractas, se pueden hacer **metodos abstractos** esto indica al compilador que todas las calses que heredan necesitan implentar este metodo, por ejemplo, un metodo de guardar:

```ts
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

  abstract guardar(): void
}
```

Y ahora debemos implementar este metodo en las clases que hereden de `DatosBasicos`:

```ts
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
```

Asi forzamos el implementar un metodo en particular necesario.

<h2 id="Interfaces">Interfaces</h2>

Las **Interfaces** son un tipo de dato que nos permite definir la estructura de un objeto, es decir, que propiedades y metodos debe tener un objeto para poder ser utilizado.

Para probar esto crearemos un nuevo archivo llamado `interfaces.ts`

Vamos a crear 2 animales, un caballo, y un chanchito, sabemos que los animales pueden caminar y emitir sonidos, esto se hace de la siguiente manera:

```ts
abstract class Animal {
  abstract name: string

  abstract caminar(): void
  abstract onomatopeya(): string
}

class Caballo extends Animal {
  name: string = 'Sanson'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Hin'
  }
}

class Cerdo extends Animal {
  name: string = 'Piggy'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Oink'
  }
}
```

En este caso tenemos una clase abstracta que nos indica que debemos implementar

Cuando no compartimos logica pero si necesitamos extender de una clase, podemos usar una **interface**, osea implementar metodos y propiedades que no necesariamente se van a usar, pero si se van a implementar.

```ts
interface Animal {
  name: string
  caminar(): void
  onomatopeya(): string
}
```

Ahora podemos implementar esta interface en las clases que queramos:

```ts
class Caballo implements Animal {
  name: string = 'Sanson'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Hin'
  }
}
```

Asi que ahora si no implementamos algo de eso, nos dara un erro

Las interfaces son muy parecidas a los tipos, pero las interfaces se pueden implementar en clases, y los tipos no.

interfaces -> clases
type -> objetos y demas

<h2 id="Index-signature">Index signature</h2>

Cuando estemos trabajando con objetos, podemos tener un index signature, que nos permite definir que propiedades puede tener un objeto, y que tipo de dato puede tener.

```ts
class DiccionarioUsuarios {
  [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'usuario 1'
diccionarioUsuarios['a1'] = 'usuario 2'

console.log(diccionarioUsuarios)
```
