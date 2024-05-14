const { MessageEmbed } = require('discord.js');
const materi = require('../data/materi.json');

module.exports = {
    name: 'do-while',
    description: 'Menampilkan materi tentang do while loop',
    execute(message, args) {
        const doWhileLoopMateri = materi.doWhileLoop;
        const embed = new MessageEmbed()
            .setTitle(doWhileLoopMateri.title)
            .setDescription(doWhileLoopMateri.description)
            .addField('Struktur Dasar:', doWhileLoopMateri.structure)
            .addField('Penjelasan:', doWhileLoopMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', doWhileLoopMateri.example)
            .setColor('#FFA500');
        
        message.channel.send(embed);
    },
};
