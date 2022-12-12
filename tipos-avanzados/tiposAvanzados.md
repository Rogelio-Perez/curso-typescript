# Tipos Avanzados

## Indice

- <a href="#Union-type"> Union type </a>
- <a href="#Intersection-type"> Intersection type </a>
- <a href="#Literal-types"> Literal types </a>
- <a href="#Nullable-types"> Nullable types </a>
- <a href="#Optional-chaining"> Optional chaining </a>
- <a href="#Nullish-coalescing-operator"> Nullish coalescing operator </a>
- <a href="#Type-assertion"> Type assertion </a>
- <a href="#Type-narrowing"> Type narrowing </a>
- <a href="#Type-Unknown"> Type Unknown </a>

<h2 id="Union-type">Union type</h2>

Un `Union type` es cuando podemos utilizar mas de un solo tipo para poder referirnos a una variable.

Para ello debemos utilizar el caracter `|` para separar los tipos.

```ts
let puntaje: number | string = 98

puntaje = 'hola mundo'
```

De esta manera no tendremos un mensaje de error, pero tenemos que ser cuidadosos, porque no hay nada que impida que pongamos todos los valores, algo parecido a un `any`

Tambien lo podemos hacer para oto tipo de variables

```ts
type Animal = {
  id: number
  estado: string
}

type Usuario = {
  id: number
  name: string
}

let animal: Usuario | Animal = { id: 1, estado: '' }
```

Ahora podremos utilizar ambos tipos de variables, pero no podremos utilizar los atributos que no esten en ambos tipos. Asi que tendra las propiedades que esten en `Animal` o en `Usuario`

Para utilizar el `Union type` en una funcion lo haremos de la siguiente manera:

```ts
function sumaDos(n: number | string): number {
  if (typeof n === 'number') {
    return n + 2
  }
  return parseInt(n) + 2
}
```

Si nosotros no realizamos esta validacion, solo nos ofrece los metodos que ambos tipos tengan en comun.

Si pobramos nuestro codigo lo podemos hacer de la siguiente manera:

```ts
sumaDos('2')
sumaDos(3)
```

Y no tendremos ningun error.

<h2 id="Intersection-type">Intersection type</h2>

Ahora veremos como trabajar con `Intersection type`, que es cuando queremos que una variable tenga mas de un tipo, pero que tenga todos los atributos de ambos tipos.

Para ello utilizaremos el caracter `&`

```ts
type Audit = {
  createdAt: string
  modifiedAt: string
}

type Product = {
  name: string
}

const product: Audit & Product = {
  createdAt: '',
  modifiedAt: '',
  name: '',
}
```

Esto nos sirve para tener un objeto que tenga todos los atributos de ambos tipos.

<h2 id="Literal-types">Literal types</h2>

Veremos los `Literal types`, que son cuando queremos que una variable solo pueda tener un valor especifico.

Para ello utilizaremos el caracter `|` para separar los tipos.

```ts
const nDeFibo: 3 = 4 // Error
```

```ts
const nDeFibo: 0 | 1 | 2 | 3 | 5 = 2
const nDeFibo: 0 | 1 | 2 | 3 | 5 = 4 //Error
```

Como podemos ver en el ejemplo, solo nos permite utilizar los valores que le hemos indicado.

Pero esto se ve muy cansado de poner asi que lo podemos hacer de la siguiente manera:

```ts
type Fibo = 0 | 1 | 2 | 3 | 5

const nDeFibo: Fibo = 2
```

<h2 id="Nullable-types">Nullable types</h2>

Ahora veremos los `Nullable types`, que son cuando queremos que una variable pueda ser nula.

Para ello utilizaremos el caracter `?` despues del tipo de la variable.

```ts
function toNumber(s: string) {
  return parseInt(s)
}

const n = toNumber(null)
```

Si ponemos esto en nuestro codigo no tendremos ningun error, pero si lo ejecutamos nos dara un error, porque no podemos convertir un `null` a un `number`.

Para nosotros resolver este problema hay 2 opciones:

La primera seria activar en nuestra configuracion de `tsconfig.json` la opcion `strictNullChecks` y asi nos dara un error.

Lo que tambien podriamos hacer es poner ese valor en falso, y al compilar todo saldra bien, pero al momento de correr la aplicacion nos dara un error.

Asi que la forma correcta es la siguiente:

```ts
function toNumber(s: string | null) {
  if (!s) {
    return 0
  }
  return parseInt(s)
}

const n = toNumber(null)
```

Asi nosotros comprobamos si el valor existe o no, y si no existe le asignamos un valor por defecto.

Pero que pasa si le pasamos `undefined`

```ts
function toNumber(s: string | null | undefined) {
  if (!s) {
    return 0
  }
  return parseInt(s)
}

const n = toNumber(undefined)
```

<h2 id="Optional-chaining">Optional chaining</h2>

Esto se puede utilizar en 3 instancias, cuando queremos acceder a un atributo de un objeto, cuando queremos acceder a un elemento de un array y cuando queremos llamar a una funcion.

Ahora lo veremos en codigo:

```ts
function getUser(id: number) {
  if (id < 0) {
    return null
  }
  return { id: 1, name: 'John', createdAt: new Date() }
}
```

Como vemos podemos devolver `null` o un objeto.

```ts
function getUser(id: number) {
  if (id < 0) {
    return null
  }
  return { id: 1, name: 'John', createdAt: new Date() }
}

const user = getUser(-1)

console.log(user.createdAt)
```

Si ponemos esto nos va a dar un error, ya que no sabemos si posiblemente el objeto que nos devuelve sea `null` o no.

Para solucionar esto debemos colocar el caracter `?` despues del objeto.

```ts
console.log(user?.createdAt)
```

Esto lo que hace es que si el objeto es `null` no va a intentar acceder a ese atributo.

Esto tambien lo podemos hacer con arreglos

```ts
const arr1 = null

arr1?.[0]
```

Esto lo que hace es que si el arreglo es `null` no va a intentar acceder al primer elemento, si no es `null` entonces accedera al primer elemento del arreglo .

Tambien podemos hacerlo en funciones:

```ts
const fn5: any = null

fn5?.()
```

En caso de que la funcion este indefinida no va a intentar llamarla.

Si compilamos esto no tendremos ningun error.

<h2 id="Nullish-coalescing-operator">Nullish coalescing operator</h2>

El `Nullish coalescing operator` es cuando queremos que una variable sea `null` o `undefined` y que no sea `0` o `''`

Vamos a ver un ejemplo:

```ts
const difficulty: number | null = null

const user2 = {
  username: 'John',
  difficulty:
}
```

En JavaScript lo hariamos de la siguiente manera:

```js
const user2 = {
  username: 'John',
  difficulty: difficulty || 1,
}
```

Solo que esto presenta un problema ya que cuando utilizamos el operador de `||` si el valor es `0` o `''` lo va a tomar como `false` y va a tomar el valor por defecto, pero nosotros queremos que tome el valor del `0`.

Para esto necesitamos el `Nullish coalescing operator`:

```ts
const user2 = {
  username: 'John',
  difficulty: difficulty ?? 1,
}
```

De esta manera si el valor es `null` o `undefined` va a tomar el valor por defecto, pero si es `0` o `''` no lo va a tomar como `false` y va a tomar el valor que le hemos asignado.

<h2 id="Type-assertion">Type assertion</h2>

Ahora veremos `Type assertion`, que es cuando queremos decirle a TypeScript que un valor es de un tipo en especifico.

Esto es cuando tenemos un valor obtenido de algun lado, que sabemos que tipo de dato es este.

Por ejemplo:

```ts
const elem: any = null

const elem1 = elem
```

Si vemos `elem1` es de tipo `any`, pero nosotros sabemos que es de tipo algun tipo, por ejemplo `number` o `HTMLInputElement`. Para aplicar esto se hace de la siguiente forma

```ts
const elem: any = null

const elem1 = elem as number
```

Ahora `elem1` es de tipo `number`.

Pero si `elem` es `any` y `null` pero forzamos a `elem1` a ser de tipo `number` nos va a dar un error, ya que `null` no es de tipo `number`.

Esto sirve cuando buscamos un elemento en el DOM, ya que si no lo encontramos nos va a dar `null` y si lo encontramos nos va a dar un elemento del DOM.

Por ejemplo el buscar elementos dentro del DOM:

```ts
const input = document.getElementById('username')
input.value // Error
```

En este caso nos daria un error, porque `input` es de tipo `HTMLInputElement | null` y no podemos acceder a `value` si es `null`.

Pero en este caso nosotros sabemos que `input` es del tipo `HTMLInputElement` ya que lo buscamos en el DOM, entonces podemos forzarlo a ser de tipo `HTMLInputElement`:

```ts
const input = document.getElementById('username') as HTMLInputElement
```

**Esto solo lo debemos usar cuando estamos 100% seguros de que el valor es de un tipo en especifico.**

Tambien podemos escribirlo de la siguiente manera:

```ts
const input = <HTMLInputElement>document.getElementById('username')
```

<h2 id="Type-narrowing">Type narrowing</h2>

El `Type narrowing` es cuando TypeScript puede deducir que un valor es de un tipo en especifico. 

Es cuando podemos tener mas de un tipo de dato.

Por ejemplo:

```ts
function Lala(x: string | number) {
  // type narrowing
  if(typeof x === 'number') {
    x.toString()
  } 

  if(typeof x === 'string') {
    x.toUpperCase
  }
}
```
De esta manera escribimos validaciones dependiendo el tipo de dato que estemos utilizando.

<h2 id="Type-Unknown">Type Unknown</h2>

Ahora veremos el remplazo del tipo `any`, que es el tipo `unknown`.

Por ejemplo:
```ts
function procesa(algo: any ) {
  algo.haceCosas()
  algo.haceOtrasCosas()
  algo.haceMasCosas()
}

```
Si ponemos esto, no nos va a dar ningun error, pero si ponemos `unknown` nos va a dar un error ya que nos obliga a poner los posbiles caminos que puede tomar el valor.

```ts
function procesa(algo: unknown ) {
  if(typeof algo === 'string') {
    return algo.toUpperCase()
  }
  if( typeof algo === 'number') {
    return algo.toExponential()
  }

  if ( algo instanceof String ) {
    
  }

  algo.haceCosas()
  algo.haceOtrasCosas()
  algo.haceMasCosas()
}
```

