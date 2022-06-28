const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-sexuality',
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
            .setTitle('Pick your Sexuality roles!')
            //.setDescription('')
            .addField('Straight', 'Take this role if you are Straight.')
            .addField('Gay', 'Take this role if you are Gay.')
            .addField('Bisexual', 'Take this role if you are Bisexual.')
            .addField('Pansexual', 'Take this role if you are Pansexual.')
            .addField('Demisexual', 'Take this role if you are Demisexual.')
                        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('straight')
                .setLabel('Straight')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('gay')
                .setLabel('Gay')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('bi')
                .setLabel('Bisexual')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('pansexual')
                .setLabel('Pansexual')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('demi')
                .setLabel('Demisexual')
                .setStyle('PRIMARY'),
                
                
                
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};