module.exports = {
	name: 'ping',
    aliases: ['p'],
    cooldown: 5,
	description: 'Muestra la cantidad de ping que tiene el bot.',
    guildOnly: false,
    permissions: false,
    args: false,
    usage: false,
	execute(client, message, args) {
        message.channel.send(`Ping! :ping_pong:\n\nPing del cliente: \`${client.ws.ping}ms\`\n\nPing de mensajes: \`${message.createdTimestamp - new Date().getTime()}ms\``);
	},
};