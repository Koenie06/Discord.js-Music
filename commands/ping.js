const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Shows the ping of the bot.'),
	async execute(interaction) {
		
        interaction.reply({ content: `Pong! My ping is ${interaction.client.ws.ping}ms!` });

	},
};
