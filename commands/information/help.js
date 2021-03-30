const Discord = require("discord.js");

module.exports = {
	name: 'help',
    aliases: ['h'],
    cooldown: 10,
	description: 'Enlista todos los comandos del bot.',
    guildOnly: false,
    permissions: false,
    args: false,
    usage: '(comando)',
	execute(client, message, args) {
        const { prefix } = client.config;
        const { commands, categories } = client;
        
        if (!args.length) {
            const commandsEmbed = new Discord.MessageEmbed()
            .setTitle("Lista de mis comandos")
            .setDescription([...categories.keys()].map(category => `**${category}**\n${categories.get(category).map(command => `\`${command.name}\``).join(", ")}`).join('\n\n'))

            return message.author.send(commandsEmbed).then(() => {
                if (message.channel.type === 'dm') return;
                message.channel.send('¡Revisa tus mensajes directos! :envelope:');
            }).catch(error => {
                console.error(`No se pudo enviar un DM al usuario ${message.author.tag}.\n`, error);
                message.channel.send('No puedo enviarte mensajes privados, ¿tienes desactivados los mensajes privados? :warning:');
            });
        }
        
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        
        if (!command) {
            return message.channel.send('Ese comando no existe. :x:');
        }
        
        const commandEmbed = new Discord.MessageEmbed()
        .setTitle(`Información detallada`)
        .addField("Nombre", command.name)
        .addField("Categoría", [...categories.keys()].filter(category => categories.get(category).find(command => command.name == args[0])))
        
        if (command.aliases) commandEmbed.addField("Aliases", command.aliases.join(', '));
        if (command.description) commandEmbed.addField("Descripción", `${command.description}`);
        if (command.usage) commandEmbed.addField("Uso", `${prefix}${command.name} ${command.usage}`);        
        
        commandEmbed.addField("Cooldown", `${command.cooldown || 3} segundos.`);
        
        message.channel.send(commandEmbed);
	},
};