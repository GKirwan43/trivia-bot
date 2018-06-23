exports.run = (Discord,client,prefix,message, content) => {
    if (content === "ping") {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Pong! 🏓")
        .setDescription(client.ping + "ms")
        message.channel.send({embed})
    }
    if (content === "serverinfo") {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Server Info")
        .addField("Server Name:",message.guild.name,true)
        .addField("Members:",message.guild.members.size,true)
        .addBlankField(true)
        .addField("Channels:",message.guild.channels.size,true)
        .addField("Owner:",message.guild.owner,true)
        .addBlankField(true)
        message.channel.send({embed})
    }
}