const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getqueue')
		.setDescription('Shows the queue'),
	async execute(interaction) {

		/* Checking if the bot is connected. If it isn't, return. */
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Get more info about how the getQueue command works at https://npmjs.com/package/@koenie06/discord.js-music#getqueue */
        const queue = await music.getQueue({
            interaction: interaction
        });

        let response = ``;

        for (let i = 0; i < queue.length; i++) {
            response += `${i + 1}. [${queue[i].info.title}](${queue[i].info.url}) - ${queue[i].info.duration}\n`
        };

        interaction.reply({ content: response });

	},
};