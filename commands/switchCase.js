const { MessageEmbed } = require('discord.js');
const materi = require('../data/materi.json');

module.exports = {
    name: 'switch-case',
    description: 'Menampilkan materi tentang switch case',
    execute(message, args) {
        const switchCaseMateri = materi.switchCase;
        const breakDefaultMateri = materi.breakDefault;

        const embedSwitchCase = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(switchCaseMateri.title)
            .setDescription(switchCaseMateri.description)
            .addField('Struktur:', switchCaseMateri.structure)
            .addField('Penjelasan:', switchCaseMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh:', switchCaseMateri.example);

        message.channel.send(embedSwitchCase);

        const embedBreakDefault = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(breakDefaultMateri.title)
            .setDescription(breakDefaultMateri.description)
            .addField('Penjelasan:', breakDefaultMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh:', breakDefaultMateri.example);

        message.channel.send(embedBreakDefault);
    },
};
