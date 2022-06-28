const Nuggies = require('nuggies');
const Discord = require('discord.js');

module.exports = {
  name: 'createrr',
  //aliases: [' '],
  description: 'No.',
  //timeout: 3000,
  //usage: ' ',
  ownerOnly: true,
    /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
run: async (client, message, args) => {
    const owners = [
        '636598760616624128',
        '141680593250287616',
        '261331303306231812'
    ]
    if (!owners.includes(message.author.id)) return;
	const brmanager = new Nuggies.buttonroles();
	message.channel.send('Send messages in `roleID color label emoji` syntax! Once finished say `done`.');

	/**
	 * @param {Discord.Message} m
	 */
	const filter = m => m.author.id === message.author.id;
	const collector = message.channel.createMessageCollector(filter, { max: Infinity });

	collector.on('collect', async (msg) => {
        if(!msg.content) return;
		if (msg.content.toLowerCase() == 'done') return collector.stop('DONE');
		const colors = ['grey', 'gray', 'red', 'blurple', 'green'];
		if (!msg.content.split(' ')[0].match(/[0-9]{18}/g) || !colors.includes(msg.content.split(' ')[1])) return;

		const role = msg.content.split(' ')[0];
		// const role = message.guild.roles.cache.get(roleid);
		if (!role) return message.channel.send('Invalid role');

		const color = colors.find(color => color == msg.content.split(' ')[1]);
		if (!color) return message.channel.send('Invalid color');

		const label = msg.content.split(' ').slice(2, msg.content.split(' ').length - 1).join(' ');

		const reaction = (await msg.react(msg.content.split(' ').slice(msg.content.split(' ').length - 1).join(' ')).catch(/*() => null*/console.log));

		const final = {
			role, color, label, emoji: reaction ? reaction.emoji.id || reaction.emoji.name : null,
		};
		brmanager.addrole(final);
	})

	collector.on('end', async (msgs, reason) => {
		if (reason == 'DONE') {
			const embed = new Discord.MessageEmbed()
				.setTitle('Button roles!')
				.setDescription('Click on the buttons to get the specific role or vice-versa')
				.setColor('RANDOM')
				.setTimestamp();
			Nuggies.buttonroles.create({ message, content: embed, role: brmanager, channelID: message.channel.id })
		}
	})


  },
};