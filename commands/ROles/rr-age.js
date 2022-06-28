const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-age',
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
    
    const chann = message.guild.channels.cache.get('709656390943244299')
    const me = await chann.messages.fetch('920656015035334686')
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pick your age roles!')
            //.setDescription('')
            .addField('Under 16', 'Take this role if you are under 16 years old!')
            .addField('Under 18', 'Take this role if you are under 18!')
            .addField('18+', 'Take this role if you are over 18 years old!')
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('under16')
                .setLabel('Under 16')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('16+')
                .setLabel('Under 18')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('18+')
                .setLabel('18+')
                .setStyle('PRIMARY'),
            );
        me.edit({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};