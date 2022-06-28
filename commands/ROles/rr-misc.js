const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-misc',
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
   // const me = await chann.messages.fetch('920678930762051605')
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Miscellaneous roles')
            //.setDescription('')
            .addField('Casual VC', 'Take this role if you want to be pinged for when we\'re having chill chats in VC.')
            .addField('Podcast Listener', 'Take this role if you are a podcast listener.')
            .addField('Dead Chat Ping', 'Take this role if you want to be pinged when chat is dead.')
            .addField('Bumpers', 'Take this role if you want to be pinged when you can bump again.')
                        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('casualvc')
                .setLabel('Casual VC')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('pod')
                .setLabel('Podcast Listener')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('dping')
                .setLabel('Dead Chat Ping')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('bumpers')
                .setLabel('Bumpers')
                .setStyle('PRIMARY'),
                
                
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};