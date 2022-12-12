# Integracion con NodeJS

## Indice

- <a href="#Integración con NodeJS y ExpressJS - parte 1"> Integración con NodeJS y ExpressJS - parte 1</a>
- <a href="#Integración con NodeJS y ExpressJS - parte 2"> Integración con NodeJS y ExpressJS - parte 2</a>

<h2 id="Integración con NodeJS y ExpressJS - parte 1">Integración con NodeJS y ExpressJS - parte 1</h2>

Aqui veremos como integrar **Typescript** con **NodeJS** y **ExpressJS**. Para crear nuestras propias API's.

Para ello crearemos una nueva carpeta, y crearemos un archivo `index.ts`, en cual escribiremos lo siguiente:

```ts
const holamundo: string = 'Hola Mundo'

console.log(holamundo)
```

Ahora debemos escribir el siguiente comando en la terminal:

```bash
npm i -D ts-node
```

Dentro de nuestro `package.json` debemos agregar lo siguiente:

```json
{
  "scripts": {
    "start": "ts-node index.ts"
  }
}
``` 

Ahora podemos ejecutar el comando `npm start` y veremos el resultado en la terminal.

Veremos que no nos genera un archivo `index.js` porque ya tenemos como ejecutar el archivo `index.ts` directamente.

Ahora haremos lo mismo con **ExpressJS**, escribiendo el siguiente comando en la terminal:

```bash
npm i -S express
```

Una ves instalada, debemos instalar los tipos de **ExpressJS**, existe una libreria llamada [definitelytyped](https://github.com/DefinitelyTyped/DefinitelyTyped) que contiene los tipos de muchas librerias, para instalar los tipos de **ExpressJS** escribiremos el siguiente comando en la terminal:

```bash
npm i -D @types/express @types/node typescript
```
Y ahora iniciaremos nuestra configuracion de **Typescript**, para ello crearemos un archivo `tsconfig.json` con el comando `tsc --init` en la terminal.

En este caso lo vamos a dejar asi, ahora en nuestro archivo `index.ts` escribiremos lo siguiente:

```ts
import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Ahora escribiremos el siguiente comando en la terminal:

```bash
npm start
```

Debemos ir al puerto `3000` y veremos el resultado.

<h2 id="Integración con NodeJS y ExpressJS - parte 2">Integración con NodeJS y ExpressJS - parte 2</h2>

En nuestra app, cada que hagamos un cambio debemos reinciar la aplicaion, para ello existe una herramienta, que vamos a instalar como dependencia de desarrollo, llamada [nodemon](https://www.npmjs.com/package/nodemon), para instalarla escribiremos el siguiente comando en la terminal:

```bash
npm i -D nodemon
```

Y en nuestro archivo `package.json` debemos agregar lo siguiente:

```json
{
  "scripts": {
    "start": "nodemon index.ts"
  }
}
```

Y ahora veremos que se encuentra escuchando los cambios que hagamos en nuestro archivo `index.ts`.

Si debemos reiniciar la aplicacion, podemos escribir el siguiente comando en la terminal:

```bash
rs
```

Ahora volveremos a nuestro archivo `index.ts` y escribiremos lo siguiente:

```ts
app.use(express.json())
```

Y agregaremos lo siguiente:

```ts
import express from 'express'

type Usuario = {
  id: string
  name: string
}

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const { name } = req.body as Usuario
  console.log(name)

  res.send('Hello ' + name)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Ahora podemos probar nuestro endpoint con **Postman**, o desde la terminal, en este caso yo lo hare desde la terminal, escribiendo el siguiente comando:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Roger"}' http://localhost:3000
```

Y veremos el resultado en la terminal.

Ahora cambiaremos la estructura de la aplicaion, asi que crearemos una carpeta llamada `users` y crearemos un archivo `index.ts` dentro de ella, y escribiremos lo siguiente:

```ts
import { Router } from 'express'

type Usuario = {
  id: string
  name: string
}

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/', (req, res) => {
  const { name } = req.body as Usuario
  console.log(name)

  res.send('Hello ' + name)
})

export default router

```

Y en nuestro archivo `index.ts` escribiremos lo siguiente:

```ts
import express from 'express'
import userRouter from './users'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/', userRouter)
```

Ahora volveremos a hacer una petición con **Postman** o desde la terminal, y veremos el resultado.

De esta manera es como podemos integrar **Typescript** con **NodeJS** y **ExpressJS**.