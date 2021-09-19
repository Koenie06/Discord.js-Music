const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skips the current playing song'),
	async execute(interaction) {

		/* Checking if there is any music playing. If it isn't, return. */
        const isPlaying = music.isPlaying({
            interaction: interaction
        });
        if(!isPlaying) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Get more info about how the skip command works at https://npmjs.com/package/@koenie06/discord.js-music#skip */
        music.skip({
            interaction: interaction
        });

        interaction.reply({ content: `Skipped the song` });

	},
};