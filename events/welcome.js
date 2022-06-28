const {
    Util,
    Client,
    Collection,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");
const client = require('../index')

client.on('guildMemberAdd', async (member) => {
    if (member.bot) return;

    const channelIs = client.channels.cache.get("990584442919743513");

    channelIs.send({content: `${member} Welcome to ${member.guild.name}! Please check out <#990584442919743510> and pick your roles! Self-roles are mandatory. `})

    member.roles.add('990584442307375133')
})