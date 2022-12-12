# Introduccion a **Typescript**

**Typescript** es un lenguaje creado por Microsoft, para resolver las deficiencias que tiene **Javascript**, agregar funcionalidad que **Javascript** no tiene, y otros lenguajes si, le agrega mas rigides.

Typescript debe cumplir con ciertas regals, y esta construido ensima de **Javascript**.

La funcionalidad mas importante que le agrega, es el tipado estatico, los lenguajes de programacion se pueden definier en 2, estaticos y dinamicos.

## Lenguajes de programacion estaticos
En los lenguajes de programacion de tipado estatico tenemos:
- Java
- C#
- C++

En estos lenguajes nosotros conocemos el tipo de dato al momento de compilar la aplicacion, y cuando programamos, si definimos una variable `n=1` sabemos que el tipo de dato de la variable `n` es un numero, y no podemos cambiar el tipo de dato de la variable `n` a un string, por ejemplo, y si lo intentamos nos lanzara un error.

```java
int n=1;
n="hola"; //error
```
De igual forma ocurre si la variable es del tipo `string` y le queremos asignar un numero, nos lanzara un error.

```c#
string n="hola";
n=1; //error
```

## Lenguajes de programacion dinamicos
En los lenguajes podemos encontrar los siguientes:
- Javascript
- PHP
- Python

En estos lenguajes no conocemos el tipo de dato al momento de compilar la aplicacion, y cuando programamos, si definimos una variable `n=1` sabemos que el tipo de dato de la variable `n` es un numero, y podemos cambiar el tipo de dato de la variable `n` a un string, por ejemplo, y si lo intentamos no nos lanzara un error.

```javascript
var n=1;
n="hola"; //no error
```

Esto entrega mucha flexibilidad al momento de programar, pero si una funcion espera un numero, y le pasamos un string, no nos lanzara un error, y podriamos tener un error en tiempo de ejecucion.

```javascript
function suma(a,b){
    return a+b;
}
suma(1,2); //3
suma("hola","mundo"); //holamundo
```
Estos errores ocurriran al ejecutar la aplicacion, nuestro editor de codigo no nos mostrara ningun error, solo hasta que la aplicacion este en produccion, y se ejecute, podremos ver el error.

O si la aplicacion tiene test unitarios, estos test unitarios nos mostraran el error.

Para evitar este comportamiento en **Javascript** podemos utilizar la palabra reservada `typeof` para saber el tipo de dato de una variable, y asi evitar errores en tiempo de ejecucion.

```javascript 
const n = "hola"
console.log(typeof n) //string
```
En nuestra terminal nos mostrara el tipo de dato de la variable `n`, en este caso es un string.

```bash
string
```

Lo que podriamos hacer es prguntar cada ves que ejecutemos un codigo.

```js
const n = "hola"
if(typeof n === "string"){
    console.log("es un string")
}else{
    console.log("no es un string")
}
```

Pero esto es muy engorroso, y no es una buena practica, ya que si tenemos un codigo muy grande, y tenemos que preguntar el tipo de dato de cada variable, seria muy engorroso, y no es una buena practica.

Esto lo viene a solucionar **Typescript**, es **Javascript** pero con tipado estatico, y nos ayuda a evitar errores en tiempo de ejecucion.

Beneficios de **Typescript**:
- Tipado estatico
- Entregarle el codigo al compilador
- Mensajes de error en tiempo real

Contras:
- Vas a sentir que se esta metiendo en tu codigo