const client = require('../index')
const { MessageAttachment } = require('discord.js')
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    const rMember = interaction.guild.members.cache.get(interaction.user.id)
    if (interaction.customId === 'under16') {
        await interaction.deferUpdate()
        if(!interaction.member.permissions.has('KICK_MEMBERS')) {
        const sus = new MessageAttachment('https://cdn.discordapp.com/attachments/901279850176839691/975428257317011506/trim.82068F83-8B51-4242-9A48-24DFDC7AAFC8.mov?size=4096', 'moron.mov')

        interaction.followUp({ content: `<@${interaction.user.id}> Simp Nation does not endorse children in this server.`, ephemeral: true })
        setTimeout(async () => {
            interaction.member.ban({ reason: `Under 16` })
        }, 10 * 1000)
        const us = interaction.user
        us.send({ content: `Simp Nation does not endorse children in this server.` })
        us.send({ content: `You have been banned. We wish you luck in finding an age appropriate server, however, here's a consolation prize.`, files: [sus] })
    } else return;
    }
    if (interaction.customId === '16+') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Under 18')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === '18+') {
        const role = interaction.guild.roles.cache.find(r => r.name === '18+')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'male') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Male')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'female') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Female')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'other') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Other')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dping') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Dead Chat Ping')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'bumpers') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Bumpers')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dmclose') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'DMs Closed')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dmopen') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'DMS Open')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pansexual') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Pansexual')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'semibi') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Semi Bisexual')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'demi') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Demisexual')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'bi') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Bisexual')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'straight') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Straight')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'gay') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Gay')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'destiny') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Destiny')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'roblox') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Roblox')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'risk') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Risk')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dnd') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Dungeons and Dragons')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'cod') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Call of Duty')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'jackbox') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Jackbox')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'tos') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Town of Salem')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'ps') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Playstation')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'switch') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Switch')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'xbox') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Xbox')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pc') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'PC')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pod') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Podcast')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'casualvc') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Casual VC')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'asia') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Asia')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'southamerica') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'South America')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'northamerica') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'North America')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'africa') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Africa')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'australia') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Oceania')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'europe') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Europe')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'he') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'He/Him')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'she') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'She/Her')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'them') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'They/Them')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'ask') {
        const role = interaction.guild.roles.cache.find(r => r.name === 'Ask for Pronouns')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }


});