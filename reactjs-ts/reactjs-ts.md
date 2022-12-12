# Integracion con ReactJS

## Indice

- <a href="#Creación e integración con BulmaCSS"> Creación e integración con BulmaCSS</a>
- <a href="#Obteniendo los tipos correctos"> Obteniendo los tipos correctos</a>
- <a href="#Tipos de formularios"> Tipos de formularios</a>
- <a href="#Refactorizando UserForm"> Refactorizando UserForm</a>
- <a href="#useState"> useState</a>
- <a href="#Enviando y limpiando formularios"> Enviando y limpiando formularios</a>
- <a href="#useEffect y agregando elementos"> useEffect y agregando elementos</a>

<h2 id="Creación e integración con BulmaCSS">Creación e integración con BulmaCSS</h2>

En esta sección veremos como crear un proyecto de **ReactJS** con **Typescript** y como integrar [**BulmaCSS**](https://bulma.io/).

Lo primero es crear una carpeta, y ejecutar el siguiente comando en la terminal:

```bash
npx create-react-app reactjs-ts --template typescript
```

Esto puede tomar algo de tiempo, pero una vez terminado, debemos hacer algunas modificaiones a los archivos

`App.css`

```css
.App {
  margin: 20px;
}
```

`App.tsx`

```tsx
import React from 'react'
import './App.css'

function App() {
  return <div className='App'></div>
}

export default App
```

Ahora debemos instalar **BulmaCSS** ya que es uno de los frameworks mas famosos de Css , para ello ejecutaremos el siguiente comando en la terminal:

```bash
npm i -S bulma
```

Una ves instalada debemos importarla en el archivo `App.ts`

```ts
import 'bulma/css/bulma.css'
```

Y agregaremos lo siguiente en nuestra funcion de `App`

```tsx
function App() {
  return (
    <div className='App'>
      <button className='button is-primary'>Hola Mundo</button>
    </div>
  )
}
```

Ahora ejecutaremos el siguiente comando en la terminal:

```bash
npm start
```

Para ver si esta tomando bien el framework de **BulmaCSS**.

<h2 id="Obteniendo los tipos correctos">Obteniendo los tipos correctos</h2>

Ahora vamos a refactorizar la app, y vamos a ver trucos para seguir para que los tipos dentro de React sean correctos.

Primero vamos a crear un componente de `Buton.tsx` y dentro crearemos el siguiente codigo:

```tsx
export default function Button() {
  return <button className='button is-primary'>Button</button>
}
```

Ahora vamos a importar este componente en el archivo `App.tsx` y lo vamos a usar en la funcion `App`

```tsx
import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'

import Button from './components/Button'

function App() {
  return (
    <div className='App'>
      <Button />
    </div>
  )
}

export default App
```

Y vermos que sigue funcionando correctamente.

Ahora mejoraremos el componente `Button` con lo siguiente.

```tsx
export default function Button({ children }) {
  return <button className='button is-primary'>{children}</button>
}
```

Pero vemos que esto nos da un error debido a que el elemento `children` es `any`, para solucionar esto haremos lo siguiente, asignar una `interfaz` al arguimento.

```tsx
interface ButtonProps {}
```

Esta es una convencion en la que debes poner el nombre del componente seguido de `Props`, y dentro de esta interfaz debes poner los argumentos que recibe el componente.

```tsx
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <button className='button is-primary'>{children}</button>
}
```

Ahora si vemos que no nos da error. Y debemos agregar algo dentro del `<Button>` que esta en `App.tsx` para ver que todo esta funcionando correctamente.

```tsx
<Button>Click me</Button>
```

Vemos que todo esta funcionando correctamente.

Ahora agregaremos una nueva propiedad a nuestro componente `Button` para manejar cuando el usario haga click sobre el boton.

Ahora como sabemos que tipo de datos es si nunca lo hemos visto antes, para esto vamos a hacer lo siguiente:

```tsx
import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}
```

Ahora debemos pasar esta propiedad a nuestro componente `Button` y para ello debemos hacer lo siguiente:

```tsx
export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className='button is-primary'>
      {children}
    </button>
  )
}
```

Ahora en nuestro archivo de `App.tsx` debemos pasar esta propiedad a nuestro componente `Button` y para ello debemos hacer lo siguiente:

```tsx
function App() {
  const handleCick = () => {}

  return (
    <div className='App'>
      <Button handleClick={handleCick}>Click me</Button>
    </div>
  )
}
```

Pero debemos saber de que tipo es `handleClick`, para eso debemos asignarle el mismo tipo de dato que tiene la propiedad `handleClick` de nuestro componente `Button`.

```tsx
function App() {
  const handleCick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <div className='App'>
      <Button handleClick={handleCick}>Click me</Button>
    </div>
  )
}
```

Ahora si probamos esto en la app, en nuestra consola los aprecera el `Button clicked`

<h2 id="Tipos de formularios">Tipos de formularios</h2>

Ahora agregaremos otro componente en nuestro `App.tsx`

```tsx
const handleChange = () => {}

;<Input placeholder='Nombre' handleChange={handleChange} />
```

Y tambien debemos crear este componente en el archivo `Input.tsx`, tambien debemos crear las propiedades de este componente.

```tsx
import { ChangeEventHandler } from 'react'

interface InputProps {
  placeholder: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ placeholder, handleChange }: InputProps) {
  return <input placeholder={placeholder} onChange={handleChange} />
}
```

Y tambien este tipo lo necesitamos en nuetro archivo de `App.tsx`

```tsx
const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  console.log(e.target.value)
}
```

Ahora si probamos esto, veremos en nuestra consola cada que tengamos un cambio en el input.

<h2 id="Refactorizando UserForm">Refactorizando UserForm</h2>

Vemos que nuestra app se esta volviendo un poco desordenada, para ello la vamosa refactorizar, en nuestro archivo de `App.tsx` todas las funciones referentes al formulario las vamos a mover a otro componente llamada `Users.tsx` que estara dentro de una carpeta llamada `form` y dentro escrebiremos lo suiguiente:

```tsx
import { ChangeEventHandler, MouseEventHandler } from 'react'
import Button from '../Button'
import Input from '../Input'

export default function UserForm() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <>
      <Input placeholder='Nombre' handleChange={handleChange} />
      <Button handleClick={handleClick}>Click me</Button>
    </>
  )
}
```

Y en nuestro `App.tsx` solo tendremos que importar este componente y llamarlo.

```tsx
import UserForm from './components/forms/Users'

function App() {
  return (
    <div className='App'>
      <UserForm />
    </div>
  )
}
```

Y ahora pondremos lo suiguiente en nuestro archivo de `Users.tsx`

```tsx
return (
  <>
    <Input placeholder='Nombre' handleChange={handleChange} />
    <Input placeholder='Apellido' handleChange={handleChange} />
    <Button handleClick={handleClick}>Click me</Button>
  </>
)
```

<h2 id="useState">useState</h2>

Ahora veremos como manejar el estado con el hook de `useState`, dentro de nuestro componente de `Users.tsx` vamos a hacer lo siguiente:

```tsx
  const [form, setForm] = useState()
```

Pero tambien tenemos que hacer que contenga las propiedades del usuario:
```tsx
type UserFormString = {
  name: string
  lastname: string
}
```

Tambien vamos a indicar una constante que contenga el estado inicial de nuestro formulario:
```tsx
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

type UserFormString = {
  name: string
  lastname: string
}

const InicialValues: UserFormString = {
  name: '',
  lastname: '',
}

export default function UserForm() {
  const [form, setForm] = useState(InicialValues)
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <>
      <Input placeholder='Nombre' handleChange={handleChange} />
      <Input placeholder='Apellido' handleChange={handleChange} />
      <Button handleClick={handleClick}>Click me</Button>
    </>
  )
}

```

Para poder manejar el esto es utilizando `currying` con la funcion, pero hay otra opcion con la propiedad `name` de los inputs, para ello vamos a hacer lo siguiente:

```tsx
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

type UserFormString = {
  name: string
  lastname: string
}

const InicialValues: UserFormString = {
  name: '',
  lastname: '',
}

export default function UserForm() {
  const [form, setForm] = useState(InicialValues)
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormString
    setForm({ ...form, [name]: e.target.value })
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
      <Input name='name' placeholder='Nombre' handleChange={handleChange} />
      <Input name='lastname' placeholder='Apellido' handleChange={handleChange} />
      <Button handleClick={handleClick}>Click me</Button>
    </>
  )
}

```
Si probamos esto veremos que nos da las propiedades


<h2 id="Enviando y limpiando formularios">Enviando y limpiando formularios</h2>

Ahora vamos a enviar el formulario y limpiarlo, para ello vamos a hacer lo siguiente:

```tsx
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

type UserFormString = {
  name: string
  lastname: string
}

const InicialValues: UserFormString = {
  name: '',
  lastname: '',
}

interface UserFormProps {
  handleSubmit: (user: UserFormString) => void
}

export default function UserForm({ handleSubmit }: UserFormProps) {
  const [form, setForm] = useState(InicialValues)
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormString
    setForm({ ...form, [name]: e.target.value })
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    handleSubmit(form)
    setForm(InicialValues)
  }

  return (
    <>
      <Input value={form.name} name='name' placeholder='Nombre' handleChange={handleChange} />
      <Input value={form.lastname} name='lastname' placeholder='Apellido' handleChange={handleChange} />
      <Button handleClick={handleClick}>Click me</Button>
    </>
  )
}
```

<h2 id="useEffect y agregando elementos">useEffect y agregando elementos</h2>

Ahora vamos a ver como hacer uso de `useEffect` para agregar elementos a nuestra lista, para ello vamos a hacer lo siguiente:

En nuestro archivo de `App.tsx` vamos a hacer lo siguiente, tratar de buscar archivos dentro de una Api, para cargalos dentro de un estado:

Vamos a hacer uso de una API gratuita para hacer esto, vamos a usar la siguiente API: https://jsonplaceholder.typicode.com/users

Pero primero cambiaremos unas propiedades de nuestro archivo de `App.tsx`:

```tsx
import React, { useState, useEffect } from 'react'
```

Y definieromos el estado dentro de nuestro componente:
```tsx
  const [users, setUsers] = useState([])
```

Y debemos poner los tipos:

```tsx
import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import UserForm, { UserFormString } from './components/forms/Users'

type User = UserFormString & { id: number }

function App() {
  const [users, setUsers] = useState<User[]>([])

  return (
    <div className='App'>
      <UserForm
        handleSubmit={(user) => {
          console.log(user)
        }}
      />
    </div>
  )
}

export default App
```

Y debemos cambiar nuestro componente de `Users.ts` para que este acepte los datos de la forma correcta:

```tsx
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

export type UserFormString = {
  name: string
  username: string
}

const InicialValues: UserFormString = {
  name: '',
  username: '',
}

interface UserFormProps {
  handleSubmit: (user: UserFormString) => void
}

export default function UserForm({ handleSubmit }: UserFormProps) {
  const [form, setForm] = useState(InicialValues)
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormString
    setForm({ ...form, [name]: e.target.value })
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    handleSubmit(form)
    setForm(InicialValues)
  }

  return (
    <>
      <Input value={form.name} name='name' placeholder='Nombre' handleChange={handleChange} />
      <Input value={form.username} name='username' placeholder='Usuario' handleChange={handleChange} />
      <Button handleClick={handleClick}>Enviar</Button>
    </>
  )
}

```

Y ahora si llamaremos a la API en nuestro archivo de `App.tsx`:

```tsx
import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import UserForm, { UserFormString } from './components/forms/Users'

type User = UserFormString & { id: number }

function App() {
  const [users, setUsers] = useState<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: User[] = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='App'>
      <ul>
        {users.map((user) => (
          <li key={user.id} >{user.name}</li>
        ))}
      </ul>
      <UserForm
        handleSubmit={(user) => {
          setUsers([...users, {...user, id: Date.now()}])
        }}
      />
    </div>
  )
}

export default App

```

Si vemos ahora podemos ver como se cargan los datos de la API y como se agregan los datos que nosotros enviamos. Y podemos agregar nosotros uno nuevo con nuestro from