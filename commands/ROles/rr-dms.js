const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-dms',
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
    
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('DMs')
            //.setDescription('')
            .addField('DMs Open', 'Take this role if your DMs are open.')
            .addField('DMs Closed', 'Take this role if your DMs are closed.')
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('dmopen')
                .setLabel('DMs Open')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('dmclose')
                .setLabel('DMs Closed')
                .setStyle('DANGER'),
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};