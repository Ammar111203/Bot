const { MessageEmbed } = require('discord.js');
const materi = require('../data/materi.json');

module.exports = {
    name: 'while',
    description: 'Menampilkan materi tentang while loop',
    execute(message, args) {
        const whileLoopMateri = materi.whileLoop;
        const embed = new MessageEmbed()
            .setTitle(whileLoopMateri.title)
            .setDescription(whileLoopMateri.description)
            .addField('Struktur Dasar:', whileLoopMateri.structure)
            .addField('Penjelasan:', whileLoopMateri.explanation.map(exp => `**${exp.title}**\n${exp.content}`).join('\n\n'))
            .addField('Contoh Penggunaan:', whileLoopMateri.example)
            .setColor('#FFA500');
        
        message.channel.send(embed);
    },
};
