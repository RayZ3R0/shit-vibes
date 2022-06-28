const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
        name: 'rr-location',
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
                    .setTitle('Pick your Location roles!')
                    //.setDescription('')
                    .addField('Asia', 'Take this role if you are from Asia.')
                    .addField('Europe', 'Take this role if you are from Europe.')
                    .addField('North America', 'Take this role if you are from North America.')
                    .addField('South America', 'Take this role if you are from South America.')
                    .addField('Africa', 'Take this role if you are from Africa.')
                    .addField('Oceania', 'Take this role if you are from Oceania.')
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setCustomId('asia')
                        .setLabel('Asia')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('europe')
                        .setLabel('Europe')
                        .setStyle('PRIMARY'),
                        new MessageButton()
                        .setCustomId('northamerica')
                        .setLabel('North America')
                        .setStyle('DANGER'),
                        new MessageButton()
                        .setCustomId('southamerica')
                        .setLabel('South America')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('africa')
                        .setLabel('Africa')
                        .setStyle('PRIMARY'),
                    );
                const row2 = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setCustomId('australia')
                        .setLabel('Oceania')
                        .setStyle('DANGER'),
                    );
                message.channel.send({
                    embeds: [embed],
                    components: [row, row2]
                })
message.delete()
            },
        };