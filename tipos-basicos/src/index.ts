let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'Tyrannosaurus'
let extintos = true

function extincion(config: any) {
  return config
}

let autos: string[] = ['Ford', 'Chevrolet', 'Toyota']
let nums: number[] = [1, 2, 3, 4, 5]
let checks: boolean[] = []
let nums2: Array<number> = []

let tupla: [number, string[]] = [1, ['Jhon', 'Doe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

//PascaleCase
enum Talla {
  Chica = 's',
  Mediana = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}

const var1 = Talla.Grande
console.log(var1)

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success

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

const arr: Persona[] = []

const fn: (a: number) => string = (edad: number) => {
  if (edad > 17) return 'Puedes pasar'
  return 'No puedes pasar'
}

function validaEdad(edad: number, msg: string = 'Chancho'): string {
  if (edad > 17) return `Puedes ingresar ${msg}`

  return 'No puedes ingresar'
}

validaEdad(18)

function ErrorUsuario(): never {
  throw new Error('Error de usuario')
}
