const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('volume')
		.setDescription('Changes the volume of the music')
        .addIntegerOption(integer => 
            integer
                .setName('volume')
                .setDescription('The new volume of the music')
                .setRequired(true)),
	async execute(interaction) {

        /* This will get the volume that has been provided */
        const volume = interaction.options.getInteger('volume');

        /* If the volume is higher than 100, return. */
        if(volume > 100) return interaction.reply({ content: 'Can\'t go higher than 100%', ephemeral: true });

        /* Checking if there is any music playing. If it isn't, return. */
        const isPlaying = music.isPlaying({
            interaction: interaction
        });
        if(!isPlaying) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Get more info about how the volume command works at https://npmjs.com/package/@koenie06/discord.js-music#volume */
        music.volume({
            interaction: interaction,
            volume: volume
        });

        interaction.reply({ content: `Set the volume to ${volume}` });

	},
};