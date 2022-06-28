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
        if (rMember.roles.cache.has('709824547586572288')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709824547586572288');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709824547586572288')
        }
    }
    if (interaction.customId === '18+') {
        if (rMember.roles.cache.has('709824510106533954')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709824510106533954');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709824510106533954')
        }
    }
    if (interaction.customId === 'male') {
        if (rMember.roles.cache.has('709820229043224646')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709820229043224646');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709820229043224646')
        }
    }
    if (interaction.customId === 'female') {
        if (rMember.roles.cache.has('709820162940993617')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709820162940993617');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709820162940993617')
        }
    }
    if (interaction.customId === 'other') {
        if (rMember.roles.cache.has('823436227012460564')) {
            await interaction.deferUpdate()
            rMember.roles.remove('823436227012460564');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('823436227012460564')
        }
    }
    if (interaction.customId === 'dping') {
        if (rMember.roles.cache.has('832445109898444831')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832445109898444831');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832445109898444831')
        }
    }
    if (interaction.customId === 'bumpers') {
        if (rMember.roles.cache.has('920239312132526091')) {
            await interaction.deferUpdate()
            rMember.roles.remove('920239312132526091');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('920239312132526091')
        }
    }
    if (interaction.customId === 'dmclose') {
        if (rMember.roles.cache.has('822355899023753257')) {
            await interaction.deferUpdate()
            rMember.roles.remove('822355899023753257');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('822355899023753257')
        }
    }
    if (interaction.customId === 'dmopen') {
        if (rMember.roles.cache.has('822355807634063370')) {
            await interaction.deferUpdate()
            rMember.roles.remove('822355807634063370');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('822355807634063370')
        }
    }
    if (interaction.customId === 'pansexual') {
        if (rMember.roles.cache.has('709826514249842829')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709826514249842829');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709826514249842829')
        }
    }
    if (interaction.customId === 'semibi') {
        if (rMember.roles.cache.has('902365343501148183')) {
            await interaction.deferUpdate()
            rMember.roles.remove('902365343501148183');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('902365343501148183')
        }
    }
    if (interaction.customId === 'demi') {
        if (rMember.roles.cache.has('822412663287185438')) {
            await interaction.deferUpdate()
            rMember.roles.remove('822412663287185438');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('822412663287185438')
        }
    }
    if (interaction.customId === 'bi') {
        if (rMember.roles.cache.has('709826630427869275')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709826630427869275');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709826630427869275')
        }
    }
    if (interaction.customId === 'straight') {
        if (rMember.roles.cache.has('709826421262123120')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709826421262123120');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709826421262123120')
        }
    }
    if (interaction.customId === 'gay') {
        if (rMember.roles.cache.has('709826485678112838')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709826485678112838');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709826485678112838')
        }
    }
    if (interaction.customId === 'destiny') {
        if (rMember.roles.cache.has('884768013168029706')) {
            await interaction.deferUpdate()
            rMember.roles.remove('884768013168029706');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('884768013168029706')
        }
    }
    if (interaction.customId === 'roblox') {
        if (rMember.roles.cache.has('832433954815606785')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832433954815606785');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832433954815606785')
        }
    }
    if (interaction.customId === 'risk') {
        if (rMember.roles.cache.has('711894758624198656')) {
            await interaction.deferUpdate()
            rMember.roles.remove('711894758624198656');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('711894758624198656')
        }
    }
    if (interaction.customId === 'dnd') {
        if (rMember.roles.cache.has('884769399326793758')) {
            await interaction.deferUpdate()
            rMember.roles.remove('884769399326793758');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('884769399326793758')
        }
    }
    if (interaction.customId === 'cod') {
        if (rMember.roles.cache.has('884768013168029706')) {
            await interaction.deferUpdate()
            rMember.roles.remove('884768013168029706');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('884768013168029706')
        }
    }
    if (interaction.customId === 'jackbox') {
        if (rMember.roles.cache.has('709659224464031827')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709659224464031827');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709659224464031827')
        }
    }
    if (interaction.customId === 'tos') {
        if (rMember.roles.cache.has('709658757231018007')) {
            await interaction.deferUpdate()
            rMember.roles.remove('709658757231018007');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('709658757231018007')
        }
    }
    if (interaction.customId === 'ps') {
        if (rMember.roles.cache.has('884735343482519563')) {
            await interaction.deferUpdate()
            rMember.roles.remove('884735343482519563');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('884735343482519563')
        }
    }
    if (interaction.customId === 'switch') {
        if (rMember.roles.cache.has('883746012840222770')) {
            await interaction.deferUpdate()
            rMember.roles.remove('883746012840222770');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('883746012840222770')
        }
    }
    if (interaction.customId === 'xbox') {
        if (rMember.roles.cache.has('883746038479990784')) {
            await interaction.deferUpdate()
            rMember.roles.remove('883746038479990784');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('883746038479990784')
        }
    }
    if (interaction.customId === 'pc') {
        if (rMember.roles.cache.has('883746023569248338')) {
            await interaction.deferUpdate()
            rMember.roles.remove('883746023569248338');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('883746023569248338')
        }
    }
    if (interaction.customId === 'pod') {
        if (rMember.roles.cache.has('884768421189943326')) {
            await interaction.deferUpdate()
            rMember.roles.remove('884768421189943326');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('884768421189943326')
        }
    }
    if (interaction.customId === 'zeus') {
        if (rMember.roles.cache.has('913696207426191360')) {
            await interaction.deferUpdate()
            rMember.roles.remove('913696207426191360');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('913696207426191360')
        }
    }
    if (interaction.customId === 'hades') {
        if (rMember.roles.cache.has('913696410107543582')) {
            await interaction.deferUpdate()
            rMember.roles.remove('913696410107543582');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('913696410107543582')
            interaction.followUp({ content: `${interaction.user} You're a fucking moron`, ephemeral: true })
        }
    }
    if (interaction.customId === 'carl') {
        if (rMember.roles.cache.has('913696419888627773')) {
            await interaction.deferUpdate()
            rMember.roles.remove('913696419888627773');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('913696419888627773')
        }
    }
    if (interaction.customId === 'casualvc') {
        if (rMember.roles.cache.has('914504717307113492')) {
            await interaction.deferUpdate()
            rMember.roles.remove('914504717307113492');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('914504717307113492')
        }
    }

    if (interaction.customId === 'asia') {
        if (rMember.roles.cache.has('832445753728303184')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832445753728303184');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832445753728303184')
        }
    }
    if (interaction.customId === 'southamerica') {
        if (rMember.roles.cache.has('832447749290459136')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832447749290459136');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832447749290459136')
        }
    }
    if (interaction.customId === 'northamerica') {
        if (rMember.roles.cache.has('832446116413964308')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832446116413964308');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832446116413964308')
        }
    }
    if (interaction.customId === 'africa') {
        if (rMember.roles.cache.has('832448472531337239')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832448472531337239');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832448472531337239')
        }
    }
    if (interaction.customId === 'australia') {
        if (rMember.roles.cache.has('832445948314517584')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832445948314517584');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832445948314517584')
        }
    }
    if (interaction.customId === 'europe') {
        if (rMember.roles.cache.has('832448387394568233')) {
            await interaction.deferUpdate()
            rMember.roles.remove('832448387394568233');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('832448387394568233')
        }
    }

    if (interaction.customId === 'he') {
        if (rMember.roles.cache.has('924961467302838282')) {
            await interaction.deferUpdate()
            rMember.roles.remove('924961467302838282');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('924961467302838282')
        }
    }

    if (interaction.customId === 'she') {
        if (rMember.roles.cache.has('924961482876289034')) {
            await interaction.deferUpdate()
            rMember.roles.remove('924961482876289034');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('924961482876289034')
        }
    }

    if (interaction.customId === 'them') {
        if (rMember.roles.cache.has('924961488316268544')) {
            await interaction.deferUpdate()
            rMember.roles.remove('924961488316268544');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('924961488316268544')
        }
    }

    if (interaction.customId === 'ask') {
        if (rMember.roles.cache.has('924961491642376213')) {
            await interaction.deferUpdate()
            rMember.roles.remove('924961491642376213');
        } else {
            await interaction.deferUpdate()
            await interaction.guild.members.cache.get(interaction.user.id).roles.add('924961491642376213')
        }
    }


});