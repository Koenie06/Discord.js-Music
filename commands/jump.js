const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Jumps to a selected song of the queue')
        .addIntegerOption(integer => 
            integer
                .setName('number')
                .setDescription('The number of the queue to jump to')
                .setRequired(true)),
	async execute(interaction) {

        /* This will get the number that has been provided */
        const number = interaction.options.getInteger('number');

        /* Checking if the number is higher than the queue length. If it is, return. */
        const queue = music.queue({
            interaction: interaction
        });
        if(number > queue.length) return interaction.reply({ content: 'Can\'t jump that far!', ephemeral: true });

        /* Get more info about how the jump command works at https://npmjs.com/package/@koenie06/discord.js-music#jump */
        music.jump({
            interaction: interaction,
            number: number
        });
        
        interaction.reply({ content: `Jump the song to the given queue number.` });

	},
};