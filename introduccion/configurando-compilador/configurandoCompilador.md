# Configurando el compilador

Ahora veremos como configurar las configuraciones del compilador, para que nos ayude a compilar nuestro codigo.

Debemos crear nuestro archivo de `index.ts`

Y es nuestra terminal debemos ejecutar el siguiente comando:

```bash
tsc --init
```

Este nos creara un nuevo archivo llamado `tsconfig.json`, y este archivo es el que contiene las configuraciones del compilador.

En este archivo encontraremos muchas configuraciones, pero por el momento nos enfocaremos en la que dice `target`, y esta nos permite configurar la version de `ES` que queremos que compile nuestro codigo.

```json
{
  "compilerOptions": {
    "target": "ES2016"
  }
}
```

Nosotros vamos a usar la `ES2016`, pero puedes usar la que quieras, esta version es la que todos los navegadores usan.

Ahora buscaremos la opcion de `"rootDir"` este es para indicar que todo el codigo fuente de la aplicacion se encontrara dentro de esa carpeta

```json
"rootDir": "./src",
```

Ahora debemos crear esta carpta `src`, y dentro de esta carpeta debemos crear nuestro archivo `index.ts`

Ahora vamos a ir a la seccion de `Emit`, y lo que nos interesa es la opcion de `"outDir"` esta es para indicar que carpeta vamos a escubir el codigo Js una ves ha sido compilado.

```json
"outDir": "./dist",
```

`dist` es una convencion para nombrar la carpeta en donde tu vas a dejar todo el codigo Js una ves compilado.

Ahora debemos cambiar la opcion de `"noEmitOnError"` a `true`, esto es para que no nos compile el codigo si hay errores.

```json
"noEmitOnError": false,
```

La ultima opcion que vamos a configurar es la de `"removeComments"` esta es para que no nos compile los comentarios que tengamos en nuestro codigo.

```json
"removeComments": true,
```

Ahora volveremos a ejecutar el comando de `tsc` debido a que ya esta configurado, indicando donde esta el codigo fuente, y donde debe dejar el codigo Js.

```bash
tsc
```

Al ejecutar veremos que se ha creado la carpeta de `dist` y ahi tendremos generado el codigo Js.
