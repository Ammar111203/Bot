const { prefix, adminIds } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Menampilkan panduan penggunaan command beserta deskripsinya',
    execute(message, args) {

        // Your code to display help
        const embed = new Discord.MessageEmbed()
            .setTitle('Panduan Penggunaan Command')
            .setDescription('Berikut adalah daftar command yang dapat digunakan:')
            .addField(`${prefix}help`, 'Menampilkan panduan penggunaan command beserta deskripsinya')
            .addField(`${prefix}info`, 'Menampilkan informasi tentang bot')
            .addField(`${prefix}if-else`, 'Menampilkan materi tentang if else')
            .addField(`${prefix}switch-case`, 'Menampilkan materi tentang switch case')
            .addField(`${prefix}while`, 'Menampilkan materi tentang while loop')
            .addField(`${prefix}do-while`, 'Menampilkan materi tentang do while loop')
            .addField(`${prefix}for`, 'Menampilkan materi tentang for loop')
            .addField(`${prefix}study-case [nama materi]`, 'Menampilkan studi kasus sesuai dengan materi')
            .addField(`${prefix}ref [nama materi]`, 'Menampilkan referensi sesuai dengan materi')
            .setColor('#0099ff');
        
        message.author.send(embed)
            .then(() => {
                if (message.channel.type === 'text') {
                    message.reply('Panduan penggunaan command telah dikirim ke DM.');
                }
            })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('Tampaknya saya tidak dapat mengirim DM kepada Anda! Apakah pengaturan privasi Anda membatasi ini?');
            });
    },
};
