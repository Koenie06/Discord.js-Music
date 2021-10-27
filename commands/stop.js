const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the music of the bot and disconnects'),
	async execute(interaction) {

		/* Checking if the bot is connected. If it isn't, return. */
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

		/* Checking if there is music playing or not. If there isn't, return. */
		const queue = music.getQueue({
			interaction: interaction
		});
		if(queue.length === 0) return interaction.reply({ content: 'No music is playing', ephemeral: true });

        /* Get more info about how the stop command works at https://npmjs.com/package/@koenie06/discord.js-music#stop */
        music.stop({
            interaction: interaction
        });

	},
};
