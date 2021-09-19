const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queue')
		.setDescription('Shows the queue'),
	async execute(interaction) {

		/* Checking if there is any music playing. If it isn't, return. */
        const isPlaying = music.isPlaying({
            interaction: interaction
        });
        if(!isPlaying) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        /* Get more info about how the queue command works at https://npmjs.com/package/@koenie06/discord.js-music#queue */
        const queue = music.queue({
            interaction: interaction
        });

        let response = ``;

        for (let i = 0; i < queue.length; i++) {
            response += `${queue[i] + 1}. [${queue[i].title}](${queue[i].url}) - ${queue[i].duration}\n`
        };

        interaction.reply({ content: response });

	},
};