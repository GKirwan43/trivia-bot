exports.run = (Discord,client, message, content) => {
    if (content === "ping") {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Pong! 🏓")
        .setDescription(client.ping + "ms")
        message.channel.send({embed})
    }
}
