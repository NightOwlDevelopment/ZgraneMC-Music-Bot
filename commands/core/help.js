const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h', "yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('**Komendy**');
        embed.addField(`Dostepne komendy - ${commands.size} Dostepne Komendy`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Music Bot  - ZgraneMC.pl ❤️', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};