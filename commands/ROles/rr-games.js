const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
        name: 'rr-game',
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
            //const me = await chann.messages.fetch('920656078470008846')
                const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Pick your Gaming roles!')
                    .addField('Switch', 'Take this role if you are a switch user.')
                    .addField('PC', 'Take this role if you are a PC user.')
                    .addField('Playstation', 'Take this role if you are a Playstation user.')
                    .addField('Xbox', 'Take this role if you are a Xbox user.')
                    .addField('Dungeons and Dragons', 'Take this role if you play DnD.')
                    .addField('Roblox', 'Take this role if you play Roblox.')
                    .addField('Apex Legends', 'Take this role if you play Apex Legends.')
                    .addField('Risk', 'Take this role if you play Risk.')
                    .addField('Jackbox', 'Take this role if you play Jackbox.')
                    .addField('Town of Salem', 'Take this role if you play Town of Salem.')
                    
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setCustomId('switch')
                        .setLabel('Switch')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('pc')
                        .setLabel('PC')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('ps')
                        .setLabel('Playstation')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('xbox')
                        .setLabel('Xbox')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('dnd')
                        .setLabel('Dungeons and Dragons')
                        .setStyle('SUCCESS'),
                        
                    );
                const row2 = new MessageActionRow()
                    .addComponents(
                        
                        new MessageButton()
                        .setCustomId('roblox')
                        .setLabel('Roblox')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('cod')
                        .setLabel('Apex Legends')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('risk')
                        .setLabel('Risk')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('jackbox')
                        .setLabel('Jackbox')
                        .setStyle('SUCCESS'),
                        new MessageButton()
                        .setCustomId('tos')
                        .setLabel('Town of Salem')
                        .setStyle('SUCCESS'),
                    );
                message.channel.send({
                    embeds: [embed],
                    components: [row, row2]
                })
message.delete()
            },
        };