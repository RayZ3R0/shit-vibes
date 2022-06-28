const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-harem',
  //aliases: [' '],
  //description: 'No.',
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
    //const me = await chann.messages.fetch('920678907823423551')
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Harem roles')
            //.setDescription('')
            .addField('Zeus\'s Harem', 'Take this if you want to join Zeus\'s harem.')
            .addField('Hades\'s Harem', 'Take this if you want to join Hades\'s harem.')
            .addField('Carl\'s Harem', 'Take this if you want to join Carl\'s harem.')
                        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('zeus')
                .setLabel('Zeus\'s Harem')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('hades')
                .setLabel('Hades\'s Harem')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('carl')
                .setLabel('Carl\'s Harem')
                .setStyle('PRIMARY'),
                
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};