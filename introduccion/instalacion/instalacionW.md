# Instalacion de **Typescript** en Windows

Debemos ingresar a nuestro explorador web, y debemos instalar **Node.js**, para ello debemos ingresar a la pagina oficial de [Node.js](https://nodejs.org/es/), y debemos descargar la version LTS, que es la version estable, o si lo prefieres puedes descargar la version Current, que es la version mas actualizada.

Una ves instalada, debemos ingresar en nuestra terminal, y debemos ejecutar el siguiente comando:

```bash
node -v
```
Y nos mostrara la version que tenemos instalada, en este caso es la version 14.15.4.

```bash
v14.15.4
```

Una ves instalado, debemos escribir el siguiente comando:

```bash
npm install -g typescript
```
Para comprar que se instalo correctamente, debemos escribir el siguiente comando:

```bash
tsc -v
```
Y nos mostrara la version que tenemos instalada, en este caso es la version 4.2.3.

```bash
Version 4.2.3
```

Si te muestra algun error, debes ejecutrar tu terminal como administrador, y escribir el siguiente comando en tu terminal:

```bash
get-ExecutePolicy
```

Y nos mostrara el siguiente mensaje:

```bash
Restricted
```

Si nos muestra el mensaje `Restricted`, debemos ejecutar el siguiente comando:

```bash
set-ExecutePolicy RemoteSigned
```

Y nos mostrara el siguiente mensaje:

```bash
Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose you to the security risks described in the about_Execution_Policies help topic at https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "Y"): 
```

Y debemos escribir la letra `A`, para darle permiso a todos, podremos salir, y abrir nuevamente la terminal y volvemos a ejecutar el comando `tsc -v`, y nos mostrara la version que tenemos instalada, en este caso es la version 4.2.3.

```bash
Version 4.2.3
```


