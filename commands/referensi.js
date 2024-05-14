const Discord = require('discord.js');

const references = {
    'if-else': {
        w3schools: 'https://www.w3schools.com/js/js_if_else.asp',
        youtube: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM'
    },
    'switch-case': {
        w3schools: 'https://www.w3schools.com/js/js_switch.asp',
        youtube: 'https://www.youtube.com/watch?v=7ZaOe6ZMPW4'
    },
    'while': {
        w3schools: 'https://www.w3schools.com/js/js_loop_while.asp',
        youtube: 'https://www.youtube.com/watch?v=3CzEdO5No1Y'
    },
    'do-while': {
        w3schools: 'https://www.w3schools.com/js/js_loop_while.asp#dowhile',
        youtube: 'https://www.youtube.com/watch?v=UXDSeD9mN-k'
    },
    'for': {
        w3schools: 'https://www.w3schools.com/js/js_loop_for.asp',
        youtube: 'https://www.youtube.com/watch?v=SFm2K21g-1Y'
    }
};

module.exports = {
    name: 'ref',
    description: 'Memberikan link referensi sesuai jenis materi',
    execute(message, args) {
        const topic = args[0];
        if (!topic) {
            return message.reply('Silakan berikan nama materi yang ingin Anda cari referensinya.');
        }

        const reference = references[topic.toLowerCase()];
        if (!reference) {
            return message.reply('Referensi untuk materi tersebut tidak ditemukan.');
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`Referensi untuk ${topic}`)
            .addField('W3Schools', reference.w3schools)
            .addField('YouTube', reference.youtube);

        message.channel.send(embed);
    },
};
