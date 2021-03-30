require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.categories = new Discord.Collection();
client.config = require('./config.json');

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	let property = "on";
    if (event.once) property = "once";
	client[property](event.name, (...args) => event.execute(client, ...args));
}

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
        if (!client.categories.get(folder)) client.categories.set(folder, new Discord.Collection());
        client.categories.get(folder).set(command.name, command);
	}
}

client.login(process.env.BOT_TOKEN);