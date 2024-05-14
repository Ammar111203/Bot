const { MessageEmbed } = require('discord.js');
const studiCase = require('../data/studycase.json');

module.exports = {
    name: 'study-case',
    description: 'Menampilkan studi kasus',
    execute(message, args) {
        if (args.length === 0) {
            // Jika tidak ada argumen, tampilkan semua studi kasus
            const allStudiCaseEmbed = new MessageEmbed()
                .setTitle('Semua Studi Kasus')
                .setColor('#FFA500');

            studiCase.forEach(item => {
                allStudiCaseEmbed.addField(item.title, item.description);
            });

            message.channel.send(allStudiCaseEmbed);
        } else {
            // Jika ada argumen, cari studi kasus sesuai dengan nama studikasus
            const input = args.join(' ').toLowerCase();
            const foundttl = studiCase.find(item => item.title.toLowerCase() === input);
            const foundmtr = studiCase.find(item => item.materi.toLowerCase() === input);

            if (!foundttl) {
                message.reply(`Tidak ada studi kasus untuk ${input}.`);
            } else {
                const studiCaseEmbe = new MessageEmbed()
                    .setTitle(foundttl.title)
                    .setDescription(foundttl.description)
                    .addField('Jenis Materi', foundttl.materi)
                    .addField('Link', foundttl.link)
                    .setColor('#FFA500');

                message.channel.send(studiCaseEmbe);
            }
            // Jika ada argumen, cari studi kasus sesuai dengan nama materi

            if (!foundmtr) {
                message.reply(`Tidak ada studi kasus untuk materi ${input}.`);
            } else {
                const studiCaseEmbed = new MessageEmbed()
                    .setTitle(foundmtr.title)
                    .setDescription(foundmtr.description)
                    .addField('Jenis Materi', foundmtr.materi)
                    .addField('Link', foundmtr.link)
                    .setColor('#FFA500');

                message.channel.send(studiCaseEmbed);
            }
        }
    },
};
