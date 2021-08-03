const Discord = require('discord.js');

module.exports = {
    name: "skip",
    description: "skips the current song in the queue",

    async run (bot, message, args) {
        if(!message.member.voice.channel) return message.reply('Please join a voice channel!');

        await bot.distube.skip(message)
        await message.channel.send("Skipped current song!")
    }
}