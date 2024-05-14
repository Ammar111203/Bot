const { MessageEmbed } = require('discord.js');
const materi = require('../data/materi.json');

module.exports = {
    name: 'for',
    description: 'Menampilkan materi tentang for loop',
    execute(message, args) {
        const forLoopMateri = materi.forLoop;
        const foreachLoopMateri = materi.foreachLoop;
        const continueMateri = materi.continue;

        let explanationString = "";
        for (const exp of forLoopMateri.explanation) {
            explanationString += `**${exp.title}**\n${exp.content}\n\n`;
        }
        
        const embed = new MessageEmbed()
            .setTitle(forLoopMateri.title)
            .setDescription(forLoopMateri.description)
            .addField('Struktur Dasar:', forLoopMateri.structure)
            .addField('Penjelasan:', explanationString)
            .addField('Contoh Penggunaan:', forLoopMateri.example)
            .setColor('#FFA500');
        
        message.channel.send(embed);

        
        const embed1 = new MessageEmbed()
            .setTitle(foreachLoopMateri.title)
            .setDescription(foreachLoopMateri.description)
            .addField('Struktur Dasar:', foreachLoopMateri.structure)
            .addField('Penjelasan:', foreachLoopMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', foreachLoopMateri.example)
            .setColor('#FFA500');
        
        message.channel.send(embed1);

        const embed2 = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(continueMateri.title)
            .setDescription(continueMateri.description)
            .addField('Penjelasan:', continueMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh:', continueMateri.example);

        message.channel.send(embed2);
    },
};
