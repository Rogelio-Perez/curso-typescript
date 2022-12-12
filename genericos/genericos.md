# Genericos

## Indice

- <a href="#Genéricos en funciones"> Genéricos en funciones </a>
- <a href="#Genéricos en clases"> Genéricos en clases </a>
- <a href="#Genéricos en interfaces"> Genéricos en interfaces </a>
- <a href="#Restricciones en genéricos"> Restricciones en genéricos </a>
- <a href="#Genéricos y herencia"> Genéricos y herencia </a>
- <a href="#Operador keyof"> Operador keyof </a>
- <a href="#Utility types"> Utility types </a>

<h2 id="Genéricos en funciones">Genéricos en funciones</h2>

Vamos a hablar de los genericos y el problema que estos resuelven, para ello vamos a hacer algo corto:

```ts
function log(a: string, b: string) {
  console.log(a, b)
}

function logN(a: number, b: number) {
  console.log(a, b)
}

log('dato', 'Hola mundo')
```

Asi con todos los datos que podamos, necesitar, esto es muy repetitivo, pero para eso existen los genericos y lo implementamos de la siguiente manera:

```ts
function log<T>(a: string, b: T) {
  console.log(a, b)
}

log<number>('Dato', 12)
```

Esto nos permite poner el tipo que queremos usar en esa funcion

```ts
function log<T>(a: string, b: T) {
  console.log(a, b)
}

log<number>('Dato', 12)
log<string>('Dato', 'Hola mundo')
```

Esto nos permite poner el tipo que queremos usar en esa funcion

Esto lo podemos usar tambien para el retorno de la funcion

```ts
function log<T>(a: string, b: T): T {
  console.log(a, b)

  return b
}

log<number>('Dato', 12)
log<string>('Dato', 'Hola mundo')
```

Y podemos agregar varios genericos:

```ts
function log<T, V>(a: T, b: V): V {
  console.log(a, b)

  return b
}

log<string, number>('Dato', 12)
log<string, string>('Dato', 'Hola mundo')
```

Typescript tambien infiere el tipo de dato que se esta usando

Ahora veremos un caso de la vida real

```ts
async function fetchData<T>(recurso: string): Promise<T> {
  const respuesta = await fetch(`${recurso}`)
  return await respuesta.json()
}

type User = {
  id: string
  name: string
}
async function main() {
  const user = await fetchData<User>('/users')
}
```

Asi podemos reutilizar para los tipos o buscar datos.

<h2 id="Genéricos en clases">Genéricos en clases</h2>

Ahora hablaremos de los genericos y como utilizarlos en las clases de **Typescript**

```ts
type Computador = {
  encender: () => void
  apagar: () => void
}

class Programador<T> {
  computador: T
  constructor(t: T) {
    this.computador = t
  }
}

const programdor = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
})
const programdor1 = new Programador<string>('Macbook')
```

<h2 id="Genéricos en interfaces">Genéricos en interfaces</h2>

Vamos a ver los genericos en las interfaces

```ts
interface KeyValue<T, V> {
  key: T
  value: V
}

interface Product {
  id: string
}

function fetchProduct(): KeyValue<string, Product> {
  return {
    key: 'product',
    value: { id: '1' },
  }
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: 'stock',
    value: 500,
  }
}
```

De esta manero indicamos los distintos valores

<h2 id="Restricciones en genéricos">Restricciones en genéricos</h2>

Vamos a ver las `constraints` o restricciones en los genericos

Esto se refiere al tipo de generico que se le entrega a una clase, a una funcion o una interfaz:

```ts
function print<T extends boolean>(t: T): T {
  console.log(t)

  return t
}

print(false)
```

Ahora veremos una implementacion mas util:

```ts
interface Usuario {
  id: string
  name: string
}

function print<T extends Usuario>(t: T): T {
  console.log(t)

  return t
}

print({ id: '1', name: 'Juan' })
```

Ahora sabemos que dentro de la funcion va a tener la forma de un usuario.

Tambien podemos extender los genericos haciendo usos de las clases:

```ts
class Usuario {
  constructor(public id: string) {}
}

function print<T extends Usuario>(t: T): T {
  console.log(t)

  return t
}

print({ id: '1', name: 'Juan' })
```

<h2 id="Genéricos y herencia">Genéricos y herencia</h2>

Vamos a ver como aplicar genericos cuando usamos herencia en **TypeScript**

```ts
class Estado<T> {
  private data: T[] = []

  agregar(t: T): void {
    this.data.push(t)
  }

  getEstado(): T[] {
    return this.data
  }
}

class EstadoEliminar<T> extends Estado<T> {
  eliminar(id: string) {}
}
```

De esta manera nosotros pasamos el Generico a `EstadoEliminar`

Ahora veremos el siguiente ejemplo:

```ts
type ObjectId = { id: string }

class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((x) => x.id !== id)
  }
}
```

Asi se pasa un generico con restricciones

Ahora veremos otra forma:

```ts
class EstadoUsuarios extends Estado<Usuario> {
  reiniciarContrasena() {}
}

const estadoUsuarios = new EstadoUsuarios()
```

Esta forma es pasar el generico fijo

<h2 id="Operador keyof">Operador keyof</h2>

Ahora veremos el `Operador keyof`, con un calendario:

```ts
type Calendar = {
  id: number
  fuente: string
  dueno: string
}

const calendar: Calendar = { id: 1, fuente: 'google', dueno: 'Yo' }

function getProp<T>(objeto: T, property: string): unknown {
  return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
getProp<Calendar>(calendar, 'propiedadInexistente')
```

No deberia dejarnos acceder a la propiedad `propiedadInexistente` ya que no existe, pero si lo hace.

```ts
function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
getProp<Calendar>(calendar, 'propiedadInexistente')
```

En este caso valida las propiedades que existen en el objeto

<h2 id="Utility types">Utility types</h2>

Estos son los tipos que nos ayudan en base a unos ya existentes:

```ts
type Punto = {
  x: number
  y: number
  desc?: string
}

type PuntoOpcional = {
  x?: number
  y?: number
  desc?: string
}
```

En ves de hacer esto podemos usar los `Utility types`:

```ts
type PuntoOpcional = Partial<Punto>
```

Esto hace que todas las propiedades sean opcionales

Ahora veremos otro ejemplo, en este caso cuando el punto debe ser requerido:

```ts
type PuntoOpcional = Required<Punto>
```

De esta manera todas las propiedades son requeridas

Ahora veremos un ejemplo de `record`:

```ts
const keyValue: Record<string, number> = {
  'soy un string': 42
}

type kv = {[key: string]: number}
```

Estas son 2 formas distintas de escribirlo

El siguiente que veremos es el de `Omit`:

```ts
const p: Omit <Punto, 'desc' | 'y'> = {x: 1}
```

De esta manera omitimos las propiedades que no queremos

Ahora veremos el `Pick`:

```ts
const p1: Pick<Punto, 'x' | 'y'> = {x: 1, y: 2}
```

De esta manera solo podemos acceder a las propiedades que queremos

Ahora veremos el `Readonly`:

```ts
const readOnlyP: Readonly<Punto> = { x: 1, y: 2, desc: 'soy un punto' }

readOnlyP.x = 2 // esto no se puede hacer
```

De esta manera no podemos modificar las propiedades