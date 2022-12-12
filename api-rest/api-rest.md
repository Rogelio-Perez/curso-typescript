# API REST CON **TYPESCRIPT**

En esta seccion aprenderemos a crear una API REST con **Typescript**, para ello utilizaremos el framework [Express](https://expressjs.com/es/).

Primero debes tener instalado [Node.js](https://nodejs.org/es/) y [Typescript](https://www.typescriptlang.org/).

Para asegurarte que tienes instalado node, npm puedes ejecutar el siguiente comando en tu bash

```bash
node -v
npm -v
```

Y te aparecera la version que tangas instalada.

## Instalacion de **Typescript**

Para instalar **Typescript** debes ejecutar el siguiente comando en tu bash

```bash
npm i typescript -g
```
Con esto instalaras typescript de manera global en tu computadora, sin importar el proyecto en el que te encuentres.

## Instalacion de **ts-node**

ts-node es un modulo que nos permite ejecutar archivos de **Typescript** sin necesidad de compilarlos, para instalarlo debes ejecutar el siguiente comando en tu bash

```bash
npm i ts-node -g
```

## Intalacion de **Nodemon**

Nodemon es un modulo que nos permite reiniciar el servidor cada vez que se realice un cambio en el codigo, para instalarlo debes ejecutar el siguiente comando en tu bash

```bash
npm i nodemon -g
```
Todas las intalaciones las estamos instalando de manera global, para que puedas utilizarlas en cualquier proyecto.

## Creacion de un proyecto

Esto se puede resumir en unos simples pasos que acontinuacion veras detalladamente:
- Iniciar proyecto con **tsc**
- Iniciar proyecto de **node**
- Instalar dependencias
- Instalar dependencias de desarrollo
- Instalar tipados de las dependencias

Una ves intalado todo, debemos iniciar el proyecto, para ello debes crear una carpeta con el nombre de tu proyecto, en mi caso sera **api-rest**, y dentro de esta carpeta debes ejecutar el siguiente comando en tu bash

```bash
tsc --init
```

Esto crea un archivo llamado **tsconfig.json**, el cual contiene la configuracion de **Typescript**.

Esto le dice a **Typescript** cual es su configuracion

Despues de instalar esto, debemos iniciar un proyecto de **Node.js**, para ello debes ejecutar el siguiente comando en tu bash

```bash
npm init -y
```

Una ves iniciado los proyectos, debemos instalar las dependencias, para ello debes ejecutar el siguiente comando en tu bash

```bash
npm i express cors dotenv multer mongoose
```

| Dependencia | Descripcion |
| ----------- | ----------- |
| express | Framework para crear API REST |
| cors | Permite el acceso a la API desde cualquier origen |
| dotenv | Permite leer variables de entorno |
| multer | Permite subir archivos |
| mongoose | Permite conectar con una base de datos de MongoDB |

Luefo de la instalacion, debemos instalar los diferentes tipados, para que **Typescript** sepa que tipo de datos estamos utilizando, para ello debes ejecutar el siguiente comando en tu bash, solo debes agregar un `@types/` antes del nombre de la dependencia, y le colocaremos `-D`, porque van a ser dependencias de desarrollo

```bash
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
```

## Estructura del proyecto

Una ves instalado todo, debemos crear nuestro archivo **.gitignore**, este archivo nos permite ignorar archivos que no queremos que se suban a nuestro repositorio

Dentro escribiremos lo siguiente

```bash
node_modules
dist
.env
```

Ahora crearemos una carpeta llamada **src**, en esta carpeta crearemos la estructura del proyecto, y crearemos la estrucutra de carpetas, vamos a aplicar un patron de 3 capas, **Modelo, Vista, Controlador**.

Vamos a crear las siguientes carpetas, lo puedes crear dentro de tu editor de codigo, o puedes ejecutar el siguiente comando en tu bash

```bash
mkdir src
```

Dentor de la carpeta **src** vamos a crear las siguientes carpetas

```bash
mkdir config controllers interfaces middlewares models routes services utils
```

| Carpeta | Descripcion |
| ------- | ----------- |
| config | Contiene la configuracion de la base de datos |
| controllers | Contiene los controladores de las rutas |
| interfaces | Contiene las interfaces de los modelos |
| middlewares | Contiene los middlewares de las rutas |
| models | Contiene los modelos de la base de datos |
| routes | Contiene las rutas de la API |
| services | Contiene los servicios de la API |
| utils | Contiene los archivos de utilidad |

Al final tendremos la siguiente estructura
```bash
├─ src
│  ├─ config
│  ├─ controllers
│  ├─ interfaces
│  ├─ middlewares
│  ├─ models
│  ├─ routes
│  ├─ services
│  └─ utils
```

Dentro de la carpeta **src** vamos a crear un archivo llamado **app.ts**, este sera el archivo principal de nuestra API, y aqui es donde vamos a crear el servidor de **Express**.

Dentro vamos a importar **Express**, **Cors**, **Dotenv**, y crearemos la instancia de **Express**

```typescript
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})

```

Una ves creado nuestra instancia de **Express**, en nuestro archivo **package.json** vamos a agregar un script para ejecutar el servidor, para ello debes agregar lo siguiente

```json
"scripts": {
  "dev": "nodemon ./src/app.ts",
},
```

Y en la terminal ejecutamos el siguiente comando

```bash
npm run dev
```

Y en tu terminal deberias ver lo siguiente

```bash

> api-rest@1.0.0 dev
> nodemon ./src/app.ts

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/app.ts`
Server running on port 3000
http://localhost:3000
```
Ahora ya tenemos nuestra estructura inicial del proyecto

## Rutas de API



