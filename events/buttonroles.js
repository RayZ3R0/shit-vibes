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
        const role = interaction.guild.roles.cache.find(r = r.name === 'Under 18')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === '18+') {
        const role = interaction.guild.roles.cache.find(r = r.name === '18+')
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'male') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'female') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'other') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dping') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'bumpers') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dmclose') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dmopen') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pansexual') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'semibi') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'demi') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'bi') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'straight') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'gay') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'destiny') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'roblox') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'risk') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'dnd') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'cod') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'jackbox') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'tos') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'ps') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'switch') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'xbox') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pc') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'pod') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'zeus') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'hades') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
            interaction.followUp({ content: `${interaction.user} You're a fucking moron`, ephemeral: true })
        }
    }
    if (interaction.customId === 'carl') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'casualvc') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'asia') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'southamerica') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'northamerica') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'africa') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'australia') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }
    if (interaction.customId === 'europe') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'he') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'she') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'them') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }

    if (interaction.customId === 'ask') {
        if (rMember.roles.cache.has(role.id)) {
            await interaction.deferUpdate()
            rMember.roles.remove(role.id);
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id)
        }
    }


});