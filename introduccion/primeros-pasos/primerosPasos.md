# Primeros pasos

Primero necesitamos un editor de codigo puedes utilizar el que quieras, pero yo utilizo [Visual Studio Code](https://code.visualstudio.com/), es un editor de codigo muy potente y ligero, y es gratuito.

Debemos abrir nuestro editor de codigo, y debemos crear una carpeta, y dentro de esta carpeta debemos crear un archivo llamado `index.ts`, y dentro de este archivo debemos escribir el siguiente codigo:

```ts
console.log("Hola mundo");
```
Lo que queremos es poder compilar este codigo, y para eso debemos abrir nuestra terminal, y debemos escribir el siguiente comando:

```bash
tsc index.ts
```
Y nos creara un nuevo archivo llamado `index.js`.

Si ingresamos al archivo `index.js` veremos que el codigo es el siguiente:

```js
console.log("Hola mundo");
```

Ahora para hacer uso de las funcionalidades de **TS**, escribiremos el siguiente codigo en nuestro archivo `index.ts`:

```ts
let mensaje: string = "Hola Mundo"
```

Al poner el tipo de dato `string` a la variable `mensaje`, estamos diciendo que la variable `mensaje` solo puede contener un valor de tipo `string`, y si intentamos asignarle un valor de otro tipo, nos mostrara un error.

```ts
let mensaje: string = "Hola Mundo"

mensaje = 1
```

Si ejecutamos el comando `tsc index.ts`, nos mostrara el siguiente error:

```bash
index.ts:2:1 - error TS2322: Type '1' is not assignable to type 'string'.
```

Si la variable la cambiamos, a otro tipo de dato que sea string podemos compilar correctamente.

```ts
let mensaje: string = "Hola Mundo"
mensaje = "Hola mundo 2"
```

Si ejecutamos el comando `tsc index.ts`, no nos mostrara ningun error.

Y en el archivo de `index.js` veremos que el codigo es el siguiente:

```js
var mensaje = "Hola Mundo";
mensaje = 'Hola Mundo 2';
```
Este codigo es `ES5`, y ahora se escribe en `ES2022` pero no todos los navegadores usan esta convencion.
