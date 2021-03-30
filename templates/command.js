/* Uso de la plantilla:
module.exports = {
	name: '', //Nombre del comando.
    aliases: [''], //Aliases del comando.
    cooldown: 0, //Cooldown del comando. (segundos) (si no requiere, ponerle false)
	description: '', //Descripción del comando.
    guildOnly: false, //El comando es solo para servidores. (true/false)
    permissions: '', //Permiso clave requerido por el comando. (si no requiere, ponerle false) (véase https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)
    args: false, //Requiere argumentos. (true/false)
    usage: '', //Uso del comando. (si no requiere, ponerle false)
	execute(client, message, args) { //Argumentos del evento, luego de client, separados por comas.
        //Ejecución del comando.
	},
};
*/

//Copiar esto de abajo y pegarlo en su archivo de comando.

module.exports = {
	name: '',
    aliases: [''],
    cooldown: 0,
	description: '',
    guildOnly: false,
    permissions: '',
    args: false,
    usage: '',
	execute(client, message, args) {

	},
};