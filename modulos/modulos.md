# Modulos

## Indice

- <a href="#Qué son?"> Qué son? </a>
- <a href="#Export nombrados y por defecto"> Export nombrados y por defecto </a>
- <a href="#Wildcard import y re-export"> Wildcard import y re-export </a>
- <a href="#JavaScript y TypeScript co-existiendo"> JavaScript y TypeScript co-existiendo </a>

<h2 id="Qué son?"> Qué son?</h2>

Los modulos nos permiten tomar todo el codigo escrito y separarlo en distintos archivos, para que sea mas facil de leer y mantener, ademas de que nos permite reutilizar codigo.

Vamos a crear una carpeta llamada `modulos` y dentro crearemos un `index.ts` y dentro escribiremos lo siguiente:

```ts
class Point {
  constructor(public x: number, public y: number) {}
}

class Group {
  constructor(public readonly id: number, public name: string) {}
}
```

Si nosotros quizieramos usar estas clases en otros archivos no se podra, por convencion las clases deben estar en su propio archivo, asi que haremos esto.

En nuestro archivo de `Point.ts` escribiremos lo siguiente:

```ts
export class Point {
  constructor(public x: number, public y: number) {}
}
```

De esta manera estamos exportando la clase `Point` para que pueda ser usada en otros archivos.

Y en el archivo donde lo queremos importar escribiremos lo siguiente:

```ts
import { Point } from './Point'
```

Esto mismo haremos con la clase `Group`.

```ts
import { Point } from './Point'
import { Group } from './Group'

const punto = new Point(1, 2)
const grupo = new Group(1, 'grupo 1')
```

<h2 id="Export nombrados y por defecto"> Export nombrados y por defecto</h2>

Podemos tener una funcion

```ts
const manejaUsuario = () => {}
```

Este es un detalle de implementacion. No es algo que queremos exportar. Podemos exportar una funcion que nos permita manejar usuarios.

En este caso debemos usar los `export default` para exportar la funcion.

```ts
export default class Group {
  constructor(public readonly id: number, public name: string) {}
}
```

Ahora para importarla debemos hacer lo siguiente:

```ts
import Group from './Group'
```

Solo le quitamos los `{}`.

Igual podemos exportar funciones, clases, interfaces, etc.

```ts
export const defaultGroup = {
  users: 'users',
  admin: 'admin',
}
```

Para importarla debemos hacer lo siguiente:

```ts
import Group, { defaultGroup } from './Group'
```

<h2 id="Wildcard import y re-export"> Wildcard import y re-export</h2>

Esto es como importar con Comodin, y los `re-export` son exportar algo que ya esta exportado.

Para que todo sea exportado y quede en una sola variable se hace lo siguiente:

```ts
import * as G from './Group'
```

Ahora si queremos acceder a lo que hemos exportado debemos hacer lo siguiente:

```ts
const grupo = new G.default(1, 'grupo 1')
```

Esto `*` se conoce como `Wildcard import`, o como `Importar con comodin`.

Ahora crearemos un archivo llamado `animales.ts`, y escribiremos lo siguiente:

```ts
export class Animales {}

export class Chanchitos {}

export class Caballos {}
```

Y lo importaremos en el archivo `index.ts` de la siguiente manera:

```ts
import { Animales, Caballos, Chanchitos } from './Animales'

console.log(Animales)
console.log(Caballos)
console.log(Chanchitos)
```

Ahora lo que haremos, si tenemos muchas clases, para seguir las buenas practicas, seria hacer una carpeta de animales y en ella meter todas las clases en sus referentes archivos.

```ts
import { Animales, Caballos, Chanchitos } from './Animales'
```

Esto es para que la carpeta siempre valla al mismo nivel que el archivo `index.ts`.

Y en nuestro archivo de index.ts dentro de animales escribiremos lo siguiente:

```ts
export { Animales } from './Animales'
export { Caballos } from './Caballos'
export { Chanchitos } from './Chanchitos'
```

Esto es para importar algo y exportalo de nuevo.

<h2 id="JavaScript y TypeScript co-existiendo"> JavaScript y TypeScript co-existiendo</h2>

Ahora vamos a hacer algo sumamente necesario que es utilizar **JavaScript** en nuestros proyectos escritos con **TypeScript**.

Si pretendes hacer una migracion, cuando tengas un proyecto grande, y no quieres hacerlo todo de una vez, puedes ir migrando poco a poco.

Vamos a crear una carpeta llamada `con-js` con un archivo llamado `saludos.js` y dentro escrebiremos el siguiente codigo:

```js
export function holamundo(mensaje){
  console.log(`Hola mundo ${mensaje}`)
}
```

Esto es **JavaScript** puro, ahora crearemos un archivo llamado `index.ts` y escribiremos lo siguiente:

```ts
import { holamundo } from "./saludos"
```

Debemos habilitar 2 opciones en nuestro `tsconfig.json` para que esto funcione.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

Ahora no tendremos error de compilacion

Ahora en nuestro archivo de `saludos.js` nos enviara un error, en el parametro de mensaje

Para habilitar los tipos en **JavaScript** debemos escribir lo siguiente con `JS Doc`:


```js
/**
 * 
 * @param {string} mensaje 
 * @returns {string}
 */

export function holamundo(mensaje){
  console.log(`Hola mundo ${mensaje}`)

  return mensaje
}
```
