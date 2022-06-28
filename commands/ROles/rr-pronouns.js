const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
  name: 'rr-pronouns',
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
    //const chann = message.guild.channels.cache.get('709656390943244299')
    //const me = await chann.messages.fetch('924972304675524618')
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pick your Pronoun roles!')
            //.setDescription('')
            .addField('He/Him', 'Take this role if your pronouns ase He/Him.')
            .addField('She/Her', 'Take this role if your pronouns are She/Her.')
            .addField('They/Them', 'Take this role if your pronouns are They/Them.')
            .addField('Ask for Pronouns', 'Take this role if you have pronouns which are not mentioned above.')
            
                        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('he')
                .setLabel('He/Him')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('she')
                .setLabel('She/Her')
                .setStyle('DANGER'),
                new MessageButton()
                .setCustomId('them')
                .setLabel('They/Them')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('ask')
                .setLabel('Ask for Pronouns')
                .setStyle('DANGER'),
                
                
                
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
message.delete()
  },
};