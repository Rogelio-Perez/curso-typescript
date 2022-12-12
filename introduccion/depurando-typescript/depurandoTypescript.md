# Depurar TypeScript

Para poder depurar en Typescript primero debemos tener nuestro proyecto iniciado y configurado con el compilador de Typescript, como lo hicimos en la seccion anterior [**Configurando el compilador**](../configurando-compilador/configurandoCompilador.md). 

La opcion que ahora nos interesa buscar es la de `sourceMap`, esto es para que nos genere un archivo de `map` que nos permitira depurar nuestro codigo.

```json
"sourceMap": true,
```
Ahora intentaremos compilar nuestro proyecto, y veremos que nos genera un archivo de `map` en la carpeta `dist`, este archivo es el que nos permitira depurar nuestro codigo.

Si lo revisamos veremos que es un archivo de `json`, y este contiene la informacion de nuestro codigo fuente, y el codigo Js que se genero.

Algo como esto:

```json
{"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";AAAA,IAAI,OAAO,GAAW,YAAY,CAAA;AAClC,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,CAAA"}
```

Ahora escribiremos un poco de logica en nuestro archivo de `index.ts` para que tenga un poco de sentido todo lo que estamos haciendo.

```ts
let mensaje: string = 'Hola mundo'

mensaje = 'Hola mundo 2'

console.log(mensaje)

mensaje = 'Chao mundo'
```

Ahora colocaremos un Breakpoint, para detener la ejecucion del codigo, cuando estemos depurando la app.
Ahora tenemos que ir al depurador de VSCode, en la barra de actividades, le debemos dar clic donde dice `Depurar`, y nos aparecera un menu desplegable, donde seleccionaremos la opcion de **cree un archivo launch.json**.

Le debemos indicar la opcion de **NodeJS**, y nos abrira un archivo llamado `launch.json` que contendra lo siguiente:

```json
{
  // Use IntelliSense para saber los atributos posibles.
  // Mantenga el puntero para ver las descripciones de los existentes atributos.
  // Para más información, visite: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${file}",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```
A esto le debemos agregar una opcion mas llamada `preLaunchTask` y le escribiremos lo siguiente:

```json
"preLaunchTask": "tsc: build - tsconfig.json",
```

Esto nos ayuda a ver errores en la app, para ver los datos sin necesidad de andar compilando.