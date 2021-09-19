const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('Resumes the current playing song'),
	async execute(interaction) {

        /* Checking if the music is already resumed. If it is, return. */
        const isResumed = music.isResumed({
            interaction: interaction
        });
        if(isResumed) return interaction.reply({ content: 'The song is already resumed', ephemeral: true });

        /* Get more info about how the resume command works at https://npmjs.com/package/@koenie06/discord.js-music#resume */
        music.resume({
            interaction: interaction
        });

        interaction.reply({ content: `Resumed the music` });

	},
};