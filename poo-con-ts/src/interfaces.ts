interface Animal {
  name: string
  caminar(): void
  onomatopeya(): string
}

class Caballo implements Animal {
  name: string = 'Sanson'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Hin'
  }
}

class Cerdo implements Animal {
  name: string = 'Piggy'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Oink'
  }
}

class Perro implements Animal {
  name: string = 'Firulais'

  caminar(): void {
    console.log('Caminando...')
  }

  onomatopeya(): string {
    return 'Guau'
  }
}

class DiccionarioUsuarios {
  [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'usuario 1'
diccionarioUsuarios['a1'] = 'usuario 2'


console.log(diccionarioUsuarios)
