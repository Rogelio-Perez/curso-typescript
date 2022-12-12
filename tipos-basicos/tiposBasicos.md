# Tipos Basicos

En esta seccion aprenderemos los siguiente:

- Que son los tipos basicos
- Por que no usar any
- Array
- Tuplas
- Enums
- Objetos
- Funciones
- Never

Primero debemos iniciar nuestro proyecto de Typescript y ponerle la configuracion como lo hemos visto en las ultimas secciones [**Primeros Pasos**](../primeros-pasos/primerosPasos.md) y [**Configurar Compilador**](../configurando-compilador/configurandoCompilador.md) .

## Tipos en Typescript

Existen multiples tipos que ya son nativos en Javascript que son los siguientes:

- number
- string
- boolean
- null
- undefined
- object
- function

El arregle es de tipo objeto

Estos son los tipos nativos que ya tiene Javascritp y que Typescript los hereda.

Ahora veremos los tipos de Typescript que son los siguientes:

- any (no recomendado)
- unknown
- never
- arrays
- tuplas
- Enums

Tipos inferidos
Cunado inicialisemos una variable va a saber cual es esta. Por ejemplo

```typescript
let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'Tyrannosaurus'
let extintos = true

extintos = 12 // error
```

En este caso Typescript esta inferrando que la variable extintos es de tipo boolean, y por eso nos aparece un error.

Esto ocurre siempre que inicialisemos una variable.
Que ocurre si no la inicializamos:

```ts
let variableSinInicializar
```

Nos va a indicar que la variable es de tipo any, esto es porque no se sabe que tipo de dato es. Pero nosotros no queremos eso.

## No usar any

Este tipo nos permite asignar cualquier valor a las variables

```ts
let variable: any = 12
variable = 'hola'
variable = true
```

Esto no nos entrega ningun error debido a que any nos permite asignar cualquier tipo de dato. Pero esto elimina el proposito de **Typescript** asi que debemos asignarle un tipo de dato a una variable.

Si la inicializamos no es necesario indicar el tipo de dato que es:

```ts
let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = 'Tyrannosaurus'
let extintos = true
```

Si queremos ser mas explicitos podemos hacerlo:

```ts
let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'Tyrannosaurus'
let extintos: boolean = true
```

No queremos dejar una variables sin un tipo o valor inicializado

Ahora veremos el caso de las funciones:

```ts
function extincion(config) {
  // no se sabe que tipo de dato es config
  return config
}
```

Esto nos entrega el siguiente error `El parámetro 'config' tiene un tipo 'any' implícitamente.` y tenemos configurado el proyecto para no soportar esto.

Para solucionarlo debemos indicarle que tipo de dato es el parametro que recibe la funcion:

```ts
function extincion(config: any) {
  return config
}
```

Esta forma no es correcta de hacerlo

La forma correcta de hacerlo es la siguiente, en nuetro archivo de configuracion, debemos ir al `noImplicitAny` y cambiarlo a `false`:

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "strict": true,
    "noImplicitAny": false,
    "outDir": "./dist"
  }
}
```

Pero esto es descativar Typescript, asi que no es la mejor opcion.

## Tipo Array

Ahora definiremos una variable que contenga un arreglo de autos:

```ts
let autos: string[] = ['Ford', 'Chevrolet', 'Toyota']
```

Y veremos que esta resiviendo `strings`

Y colocaremos un arreglo de numeros:

```ts
let nums: number[] = [1, 2, 3, 4, 5]
```

Ahora declararemos un arreglo vacio:

```ts
let checks = []
```

Pero esto nos devolvera que es del tipo `any[]` y no queremos eso. Para ello debemos iniciarlizarla o declararle el tipo de dato:

```ts
let checks: number[] = []
```

Y tambien podemos definir los arreglos de la siguiente forma:

```ts
let nums2: Array<number> = [1, 2, 3, 4, 5]
```

Ahora vamos a hacer uso de una de las funcionalidades de Typescript

```ts
let autos: string[] = ['Ford', 'Chevrolet', 'Toyota']
autos.map(x => x.) // el auto completado suguiere los tipos de datos
```

## Tuplas

Estas no existen dentro de Javascript pero Typescript si las soporta. Son arreglos de longitud fija, es decir, que no pueden cambiar de tamaño.

Vamos a definir un arreglo:

```ts
let tupla: [number, string] = [1, 'Jhon']
```

Si agregamos un elemento mas nos va a indicar que no es valido:

```ts
let tupla: [number, string] = [1, 'Jhon', true] // error
```

Tambien podemos crear tipos de datos de arreglo dentro de las tuplas

```ts
let tupla: [number, string[]] = [1, ['Jhon', 'Doe']]
```

Debemos mantener la cantidad de datos que definimos en la tupla, con 2 o 3 datos es suficiente.

Un error que tenemos en Typescript es el siguiente:

```ts
let tupla: [number, string[]] = [1, ['Jhon', 'Doe']]
tupla.push(12)
```

Esto no nos esta arrojando un error que no podemos realizar dicha operacion.

## Enums

En Javascript no existen los enums, pero Typescript si los soporta. Son un conjunto de valores que se pueden asignar a una variable.

Significa tipo enumerado, una lista de constantes para referenciar en un futuro, se usan para respresentar estados en bases de datos, o para representar cuando un estado esta cargando.

Estados de carga
| Estado  | Definicion |
| ------  | ----- |
| **IDLE**    | Aun no se llama a la API |
| **LOADING** | Se llama a la API |
| **SUCCESS** | La API responde con exito |
| **ERROR**   | La API responde con un error |

```ts
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'
```
De esta forma se haria sin los Enum.
Ahora lo haremos con Enum:

```ts
enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}
```
Debemos tomar en cuenta que se utiliza **PascalCase** para los enums.

Ahora el compilador les va a entregar valor por defecto a cada uno de los elementos del enum:

```ts
enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}
console.log(Talla.Chica) // 0
console.log(Talla.Mediana) // 1
console.log(Talla.Grande) // 2
console.log(Talla.ExtraGrande) // 3
```
Para que esto no suceda y le queremos pasar `strings` debemos definirlo de la siguiente forma:

```ts
enum Talla {
  Chica = 's',
  Mediana = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}
```
Ahora podemos definir una constante de uno de los valores del enum:

```ts
//PascaleCase
enum Talla {
  Chica = 's',
  Mediana = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}

const var1 = Talla.Grande
console.log(var1)
```
Si corremos esto con NodeJs nos va a devolver `l`

Si revisamos nuesto output vamos a ver el siguiente codigo:

```js
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const var1 = Talla.Grande;
console.log(var1);
```
Esto esta utilizando una IFFE -> Immediately Invoked Function Expression, y esto significa que se va a ejecutar de forma automatica.

Ahora veremos un caso mas realizta de como podemos utilizar los Enums:

```ts
const enum LoadingState { Idle, Loading, Success, Error }
```

Al utilizar `const` el codigo sera mas optimo en el Javascript.

## Objetos

Ahora continuaremos con los ojetos, vamos a crear una nueva constante de tipo objeto:

```ts
const objeto: {
  id: number
  name: string
  age: number
  isAdult: boolean
} = { id: 1, name: 'Jhon', age: 30, isAdult: true }
```
Si de alguna forma queremos que una opcion sea opcional podemos hacerlo de la siguiente forma:

```ts
const objeto: {
  id: number
  name: string
  age: number
  isAdult?: boolean
} = { id: 1, name: 'Jhon', age: 30 }
```

A esta objeto le podemos cambiar los nombre de sus propiedades:

```ts
objeto.name = 'Doe'
```
Pero que sucede si queremos que una propiedad no se pueda cambiar, para esto antes de la propiedad debemos agregar `readonly`

```ts
const objeto: {
  id: number
  name: string
  readonly age: number
  isAdult?: boolean
} = { id: 1, name: 'Jhon', age: 30 }

objeto.age = 31 // error
```
Esto sirve cuando vienen datos desde la base de datos y queremos que no sean reescribibles.

Tambien podemos definir propiedades que sean de tipo objeto, array, enum, por ejemplo:

```ts
const objeto: {
  id: number
  name: string
  readonly age: number
  isAdult?: boolean
  talla: Talla
} = { id: 1, name: 'Jhon', age: 30, talla: Talla.Grande }
```
Si seguimos definiendo los objetos de esta forma puede ser muy cansado, para ello podemos hacerlo de la siguiente forma:

```ts
type Persona = {
  id: number
  name: string
  readonly age: number
  isAdult?: boolean
  talla: Talla
}

const objeto: Persona = { id: 1, name: 'Jhon', age: 30, talla: Talla.Grande }
```
De esta forma podemos reutilizar el tipo de objeto.

Tambien podemos definir los tipos de los objetos y componerlos:

```ts
type Direccion = {
  calle: string
  numero: number
  pais: string
}

type Persona = {
  id: number
  name: string
  readonly age: number
  isAdult?: boolean
  talla: Talla
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  name: 'Jhon',
  age: 30,
  talla: Talla.Grande,
  direccion: {
    numero: 123,
    calle: 'Calle 123',
    pais: 'Colombia',
  },
}
```
## Funciones

Las funciones pueden se complejas o abrumadoras, pero son el mejor aliado con el tipado que estas tiene en **TypeScript**.

Para ello definiremos una funcion:

```ts
const fn: () => void = () => {

}
```
Una funcion cuyo tipo de retorno es void, quiere decir que no retorna nada

Ahora para cambiar esto y que retorne un `number`, debemos aplicarlo de la siguiente manera:

```ts
const fn: () => number = () => {
  return 2
}
```

Ahora le entregaremos un argumento a la funcion:

```ts
const fn: (a: number) => number = (edad: number) => {
 return 2 
}
```

Como vemos no estamos usando su valor, para ello le agregaremos una configuracion para mostrar un error cuando este no se use, en la configuracion de `tsconfig.json` agregaremos `"noUnusedParameters": true,`

```ts
const fn: (a: number) => number = (edad: number) => {
  return edad
}
``` 
Ahora no nos arroja ningun error, pero le agregaremos mas logicas a la funcion:

```ts
const fn: (a: number) => string = (edad: number) => {
  if ( edad > 17)
    return 'Puedes pasar'
  return 'No puedes pasar'
}
```

Si ahora ponemos una funcion de la siguiente manera:

```ts
function validaEdad(edad: number) {
  if( edad > 17)
    return 'Puedes ingresar'
}
```
Esto lo va a inferir pero lo podemos corregir de la siguiente manera:

```ts
function validaEdad(edad: number): string {
  if( edad > 17)
    return 'Puedes ingresar'
}
```
Y con esto nosotros ponemos el tipo con el que se debe retornar la funcion

Para que nosotros podamos corregir esta situacion en el codigo y que nos retorne un error, debemos agregar en la configuracion de `tsconfig.json` `"noImplicitReturns": true,`

Ahora en nuestro codigo aparecera un error

```ts
function validaEdad(edad: number): string {
  if( edad > 17)
    return 'Puedes ingresar'

  return 'No puedes ingresar'
}
```

Ahora ejecutaremos la funcion de validad edad:

```ts
validaEdad(18, 2)
```

Si nosotros ponemos esto VSCode no lo identifica, pero si lo compilamos, nos arrojara un error, porque estamos pasando 2 argumentos y necesitamos pasar solo 1, para poner 2 argumentos se debe hacer de la siguiente manera:

```ts
function validaEdad(edad: number, msg: string): string {
  if( edad > 17)
    return `Puedes ingresar ${msg}`

  return 'No puedes ingresar'
}

validaEdad(18, 'a la fiesta')
```

Si queremos agregarle un valor por defecto, lo podemos hacer de la siguiente manera:

```ts
function validaEdad(edad: number, msg = 'Chancho'): string {
  if( edad > 17)
    return `Puedes ingresar ${msg}`

  return 'No puedes ingresar'
}

validaEdad(18, 'a la fiesta')
```
Asi ya no es necesario que le pasemos los 2 argumentos, si queremos ser explicitos con los argumentos, podemos hacerlo de la siguiente manera:

```ts
function validaEdad(edad: number, msg: string = 'Chancho'): string {
  if( edad > 17)
    return `Puedes ingresar ${msg}`

  return 'No puedes ingresar'
}

validaEdad(18)
```
## Never

Never es un tipo cuando una funcion no valla a lanzar algo.
Para eso definiremos una funcion:

```ts
function ErrorUsuario():never {
  throw new Error('Error de usuario')
}
```
Esto se utiliza para lanzar errores dentro de la funcion.

La diferencia entre `void` y `never` es que `void` es cuando una funcion no retorna nada, y `never` es cuando una funcion no retorna nada y lanza un error. Si tenemos funciones que lanzan errores debemos utilizar `never`.