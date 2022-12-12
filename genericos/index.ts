async function fetchData<T>(recurso: string): Promise<T> {
  const respuesta = await fetch(`${recurso}`)
  return await respuesta.json()
}

type User = {
  id: string
  name: string
}
async function main() {
  const user = await fetchData<User>('/users')
}

type Computador = {
  encender: () => void
  apagar: () => void
}

class Programador<T> {
  computador: T
  constructor(t: T) {
    this.computador = t
  }
}

const programdor = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
})
const programdor1 = new Programador<string>('Macbook')

interface KeyValue<T, V> {
  key: T
  value: V
}

interface Product {
  id: string
}

function fetchProduct(): KeyValue<string, Product> {
  return {
    key: 'product',
    value: { id: '1' },
  }
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: 'stock',
    value: 500,
  }
}

class Usuario {
  constructor(public id: string) {}
}

function print<T extends Usuario>(t: T): T {
  console.log(t)

  return t
}

print({ id: '1', name: 'Juan' })

class Estado<T> {
  protected data: T[] = []

  agregar(t: T): void {
    this.data.push(t)
  }

  getEstado(): T[] {
    return this.data
  }
}

type ObjectId = { id: string }

class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((x) => x.id !== id)
  }
}

class EstadoUsuarios extends Estado<Usuario> {
  reiniciarContrasena() {}
}

const estadoUsuarios = new EstadoUsuarios()

type Calendar = {
  id: number
  fuente: string
  dueno: string
}

const calendar: Calendar = { id: 1, fuente: 'google', dueno: 'Yo' }

function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')

type Punto = {
  x: number
  y: number
  desc?: string
}

type PuntoOpcional = Partial<Punto>
type PuntoRequerido = Required<Punto>

const keyValue: Record<string, number> = {
  'soy un string': 42,
}

type kv = { [key: string]: number }

const p: Omit<Punto, 'desc' | 'y'> = { x: 1 }

const p1: Pick<Punto, 'x' | 'y'> = { x: 1, y: 2 }

const readOnlyP: Readonly<Punto> = { x: 1, y: 2, desc: 'soy un punto' }

