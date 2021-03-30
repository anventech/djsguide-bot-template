# discordjs.guide Bot Template

Plantilla para bot de Discord siguiendo la guía de discordjs.guide.

## Descripción

Esta es una plantilla para un bot de Discord con command y event handler, para los que no sepan que es un command handler o event handler acá les dejo una descripción hecha por mí:

```
Se le denomina "command handler" a una estructura modular (basada en módulos y usando el paradigma "programación orientada a objetos") que se encarga de poner los comandos de bot aparte dentro de una carpeta y luego leerlos y guardarlos en una colección, para posteriormente ser usados por el usuario.

Se le denomina "event handler" a una estructura modular (basada en módulos y usando el paradigma "programación orientada a objetos") que se encarga de poner los eventos del bot aparte dentro de una carpeta y luego leerlos y ejecutarlos o "escucharlos" (event listener) desde el archivo principal.
```

## Luego de clonar el repositorio

Luego de clonar o descargar el repositorio, ejecutamos el siguiente comando dentro de la carpeta donde hayamos puesto todo:

```
npm install
```

Este comando instalará todos los paquetes que requiere la plantilla. (ver `package.json` si hay alguna duda)

## Estructura de los archivos

```
- commands (Carpeta de comandos)
	- information (Carpeta de comandos de información)
		ping.js (Comando ping)
		help.js (Comando help)
- events (Carpeta de eventos)
	ready.js (Evento ready)
	message.js (Evento message)
- templates (Carpeta de plantillas)
	command.js (Plantilla de comando)
	event.js (Plantilla de evento)
.env.example (Archivo de ejemplo de variables de entorno)
.eslintrc.json (Archivo de configuración del linter)
.gitignore (Archivo para ignorar otros archivos al momento de hacer push)
config.json (Configuración del bot (prefix))
index.js (Archivo principal)
package-lock.json (Archivo de información detallada de los paquetes de NPM)
package.json (Archivo de información de los paquetes de NPM)
```

## Encender el bot

Para encender el bot es simple, vamos por pasos: (antes de esto tenemos que hacer el comando `npm install` (mirar arriba))

**Paso 1:** Cambiarle el nombre al archivo `.env.example` a `.env`, esto hará que se convierta en un archivo de variables de entorno real.

![](https://cdn.discordapp.com/attachments/826286539213504512/826488020487241768/image-20210330110400284.png)

![](https://cdn.discordapp.com/attachments/826286539213504512/826488022518071306/image-20210330110416726.png)

**Paso 2:** Abrir el archivo `.env` y en la parte que dice `BOT_TOKEN=`, poner nuestro token, por ejemplo: `BOT_TOKEN=ODA3Mjk5NDQ3Mzg1NjIwNTUz.YB1-Mw.wIYQRtc5cIEspq-jEOtyiA5X8Lw`

![](https://cdn.discordapp.com/attachments/826286539213504512/826488018533482506/image-20210330110246301.png)

![](https://cdn.discordapp.com/attachments/826286539213504512/826488017078321152/image-20210330110236902.png)



**Paso 3:** Entrar a nuestra carpeta con la consola (si ya sabes cómo hacer esto te lo puedes saltar e ir al paso 4), presionar `Windows+R`, escribir `cmd` y presionar enter (si ya tienes una terminal que no es el `cmd`, puedes usarla), luego de tener la terminal abierta,  copiamos la ruta de nuestra carpeta (para esto abrimos la carpeta y en la parte de arriba damos click y nos saldrá la ruta completa), y ejecutamos el siguiente comando: `cd NUESTRA_RUTA_VA_ACA`

![](https://cdn.discordapp.com/attachments/826286539213504512/826488023817650191/image-20210330110443008.png)

![](https://cdn.discordapp.com/attachments/826286539213504512/826488025647022150/image-20210330110449955.png)

![](https://cdn.discordapp.com/attachments/826286539213504512/826488026657849344/image-20210330110504710.png)



**Paso 4:** Escribir`node .`

![](https://media.discordapp.net/attachments/826286539213504512/826488014813265960/image-20210330110650747.png?width=881&height=461)



**Paso 5:** Nuestro bot ya quedó encendido:

![](https://media.discordapp.net/attachments/826286539213504512/826488015853453402/image-20210330110721179.png?width=192&height=60)

## Créditos

Esta plantilla fue hecha siguiendo las siguiente guía:

[Command handling | Discord.js Guide](https://discordjs.guide/command-handling/)

## Contactar al creador

Si quieres contactar al creador de este repositorio puedes hacerlo a través de:

**Discord:** Anventec#8287

**Servidor de Discord:** [discord.gg/XvmUX9wph3](https://discord.gg/XvmUX9wph3)

**Twitter:** [@anventec](https://twitter.com/anventec)