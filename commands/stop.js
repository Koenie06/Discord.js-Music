const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the music of the bot and disconnects'),
	async execute(interaction) {

		/* Checking if there is music playing or not. If there isn't, return. */
		const queue = music.queue({
			interaction: interaction
		});
		if(queue.length === 0) return interaction.reply({ content: 'No music is playing', ephemeral: true });

        /* Get more info about how the stop command works at https://npmjs.com/package/@koenie06/discord.js-music#stop */
        music.stop({
            interaction: interaction
        });

	},
};