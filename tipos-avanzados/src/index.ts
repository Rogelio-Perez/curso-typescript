let puntaje: number | string = 98

puntaje = 'hola mundo'

type Animal = {
  id: number
  estado: string
}

type Usuario = {
  id: number
  name: string
}

let animal: Usuario | Animal = { id: 1, estado: '' }

function sumaDos(n: number | string): number {
  if (typeof n === 'number') {
    return n + 2
  }
  return parseInt(n) + 2
}

sumaDos('2')
sumaDos(5)

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

type Fibo = 0 | 1 | 2 | 3 | 5

const nDeFibo: Fibo = 2

function toNumber(s: string | null | undefined) {
  if (!s) {
    return 0
  }
  return parseInt(s)
}

const n = toNumber(undefined)

function getUser(id: number) {
  if (id < 0) {
    return null
  }
  return { id: 1, name: 'John', createdAt: new Date() }
}

const user = getUser(1)

console.log('Usuario: ', user?.createdAt)

const arr1 = null

arr1?.[0]

const fn5: any = null

fn5?.()

const difficulty: number | null = null

const user2 = {
  username: 'John',
  difficulty: difficulty ?? 1,
}

const elem: any = null

const elem1 = elem as number

const input = <HTMLInputElement>document.getElementById('username')

function Lala(x: string | number) {
  // type narrowing
  if (typeof x === 'number') {
    x.toString()
  }

  if (typeof x === 'string') {
    x.toUpperCase
  }
}

function procesa(algo: unknown ) {
  if(typeof algo === 'string') {
    return algo.toUpperCase()
  }
  if( typeof algo === 'number') {
    return algo.toExponential()
  }

  if ( algo instanceof String ) {

  }

  // algo.haceCosas()
  // algo.haceOtrasCosas()
  // algo.haceMasCosas()
}
