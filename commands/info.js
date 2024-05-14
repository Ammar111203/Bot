const { MessageEmbed } = require('discord.js');
const { version, author } = require('../package.json');

module.exports = {
    name: 'info',
    description: 'Menampilkan informasi tentang bot',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Informasi Bot')
            .setDescription(`Bot ini dibuat oleh ${author} dan saat ini berjalan pada versi ${version}.`)
            .addField('Website', '[Kunjungi](https://www.example.com)')
            .addField('Support', '[Server Discord](https://discord.gg/example)')
            .setThumbnail('https://example.com/bot-icon.png')
            .setFooter('Terima kasih telah menggunakan bot kami!')
            .setTimestamp();

        message.channel.send(embed);
    },
};
