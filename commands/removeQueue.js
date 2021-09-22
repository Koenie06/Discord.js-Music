const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removequeue')
		.setDescription('Removes a song from the queue')
        .addIntegerOption(integer => 
            integer
                .setName('number')
                .setDescription('The number of the queue song to remove')
                .setRequired(true)),
	async execute(interaction) {

        /* Get the number that has been provided */
        const number = interaction.options.getInteger('number');

		/* Checking if the bot is connected. If it isn't, return. */
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Get the queue to check if the number exists. If it isn't, return. */
        const queue = await music.getQueue({
            interaction: interaction
        });
        if(!queue[number - 1]) return interaction.reply({ content: 'That number of the queue doesn\'t exist', ephemeral: true });

        /* Get more info about how the removeQueue command works at https://npmjs.com/package/@koenie06/discord.js-music#removequeue */
        music.removeQueue({
            interaction: interaction,
            number: number
        });
        interaction.reply({ content: `Removed the ${number}th song of the queue.` });

	},
};