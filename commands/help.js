exports.run = (Discord,client,prefix,message, content,commands,descriptions) => {
    function getTitle() {
        for (i = 0; i < commands.length; i++) {
            for (c=1;c < commands[i].length;c++) {
                if (commands[i][0] === content) return "Command List";
                if (commands[i][0] === content.split("help ")[1]) return commands[i][0].replace(/^\w/, c => c.toUpperCase()) + " Command List";
            }
        }
    }
    function getCommands() {
        var commandlist = "";
        for (i = 0; i < commands.length; i++) {
            for (c=1;c < commands[i].length;c++) {
                if (commands[i][0] === content || commands[i][0] === content.split("help ")[1]) {
                    commandlist = commandlist + "\n**" + prefix + commands[i][c] + ":** " + descriptions[i][c - 1];
                }
            }
        }
        return commandlist;
    }
    if (getCommands()) {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Help: " + getTitle())
        .setDescription("Command Prefix is set to: " + prefix + getCommands())
        message.channel.send({embed})
    }
}