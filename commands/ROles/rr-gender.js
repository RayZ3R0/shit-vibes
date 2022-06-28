const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-gender',
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

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pick your Gender roles!')
            //.setDescription('')
            .addField('Male', 'Take this role if you are male.')
            .addField('Female', 'Take this role if you are female.')
            .addField('Other', 'Take this role if you identify as something different to the above options.')
            
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('male')
                .setLabel('Male')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('female')
                .setLabel('Female')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('other')
                .setLabel('Other')
                .setStyle('SECONDARY'),
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};