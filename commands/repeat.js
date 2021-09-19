const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repeat')
		.setDescription('Repeats the playing song forever')
        .addBooleanOption(boolean => 
            boolean
                .setName('onoroff')
                .setDescription('Sets the repeat to on or off')
                .setRequired(true)),
	async execute(interaction) {

        /* This will get the boolean that has been provided */
        const boolean = interaction.options.getBoolean('onoroff');

        /* Checking if the music is already repeated. If it is, return. */
        const isRepeated = music.isRepeated({
            interaction: interaction
        });
        if(isRepeated === boolean) return interaction.reply({ content: `The repeat option is also on ${boolean}`, ephemeral: true });

        /* Get more info about how the repeat command works at https://npmjs.com/package/@koenie06/discord.js-music#repeat */
        music.repeat({
            interaction: interaction,
            value: boolean
        });

        interaction.reply({ content: `Turned repeat mode to ${boolean}` });

	},
};