const Discord = require("discord.js");

module.exports = {
	name: 'message',
	once: false,
	execute(client, message) {
        const { prefix } = client.config;

        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(' ');
        const commandName = args.shift().toLowerCase();
    
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
        if (!command) return;
        
        if (command.guildOnly && message.channel.type === 'dm') return message.channel.send('No puedo ejecutar este comando en mensajes directos. :frowning:').then(m => m.delete({ timeout: 20000 }));
    
        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) return message.channel.send('No puedes hacer eso. :warning:').then(m => m.delete({ timeout: 20000 }));
        }
    
        if (command.args && !args.length) {
            let reply = `No diste ningún argumento, ${message.author}. :warning:`;
    
            if (command.usage) reply += `\nEl uso apropiado debería ser: \`${prefix}${command.name} ${command.usage}\``;
    
            return message.channel.send(reply).then(m => m.delete({ timeout: 20000 }));
        }
    
        const { cooldowns } = client;
    
        if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Discord.Collection());
        
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;
        
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.channel.send(`Por favor espere **${timeLeft.toFixed(1)} segundos** más para reusar el comando \`${command.name}\`.`).then(m => m.delete({ timeout: 20000 }));
            }
        }
    
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
        try {
            command.execute(client, message, args);
        } catch (error) {
            console.error(error);
            message.reply('Ocurrió un error intentando ejecutar ese comando. :x:').then(m => m.delete({ timeout: 20000 }));
        }
	},
};