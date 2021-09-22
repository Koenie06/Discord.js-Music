const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pauses the current playing song'),
	async execute(interaction) {

        /* Checking if the bot is connected. If it isn't, return. */
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Checking if the music is already paused. If it is, return. */
        const isPaused = music.isPaused({
            interaction: interaction
        });
        if(isPaused) return interaction.reply({ content: 'The song is already paused', ephemeral: true });

        /* Get more info about how the pause command works at https://npmjs.com/package/@koenie06/discord.js-music#pause */
        music.pause({
            interaction: interaction
        });

        interaction.reply({ content: `Paused the music` });

	},
};