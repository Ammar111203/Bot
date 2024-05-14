const { MessageEmbed } = require('discord.js');
const materi = require('../data/materi.json');

module.exports = {
    name: 'if-else',
    description: 'Menampilkan materi tentang if-else',
    execute(message, args) {
        const ifElseMateri = materi.ifElse;
        const nestedIfMateri = materi.nestedIf;
        const elseIfMateri = materi.elseIf;
        
        const embed = new MessageEmbed()
            .setTitle(ifElseMateri.title)
            .setDescription(ifElseMateri.description)
            .addField('Struktur Dasar:', ifElseMateri.structure)
            .addField('Penjelasan:', ifElseMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', ifElseMateri.example)
            .setColor('#FFA500');
        message.channel.send(embed);
        
        const embed1 = new MessageEmbed()
            .setTitle(nestedIfMateri.title)
            .setDescription(nestedIfMateri.description)
            .addField('Struktur Dasar:', nestedIfMateri.structure)
            .addField('Penjelasan:', nestedIfMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', nestedIfMateri.example)
            .setColor('#FFA500'); 
        message.channel.send(embed1);

        const embed2 = new MessageEmbed()
            .setTitle(elseIfMateri.title)
            .setDescription(elseIfMateri.description)
            .addField('Struktur Dasar:', elseIfMateri.structure)
            .addField('Penjelasan:', elseIfMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', elseIfMateri.example)
            .setColor('#FFA500');
        message.channel.send(embed2);
    },
};
