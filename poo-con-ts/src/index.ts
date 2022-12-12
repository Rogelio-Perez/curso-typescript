class Personaje {
  profesion?: string
  private static equipo: number = 1
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    this.id = id
    this.name = name
    this.nivel = nivel
    this._hp = _hp
  }
  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  static agregarPersonaje(): void {
    Personaje.equipo++
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad
    // no pasarse del maximo
    return this._hp
  }

  get hp(): number {
    return this._hp
  }

  static getEquipo(): number {
    return Personaje.equipo
  }
}

const personaje = new Personaje(1, 'Goku', 1, 100)
personaje.cambiarHp(-10)

const personaje1 = new Personaje(2, 'Vegeta', 1, 120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())


