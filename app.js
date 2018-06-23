const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("on " +  client.guilds.size + " servers");
});

var prefix="+";
var general = ["general","ping","serverinfo"];
var generalDescriptions = ["Check your ping to Trivia Bot","Shows all the server info"];
var help = ["help", "help", "help general", "help admin"];
var helpDescriptions = ["Lists all commands", "General Commands", "Admin Commands"];
var admin = ["admin", "mute", "unmute", "kick", "ban", "unban"]
var adminDescriptions = ["Mutes a member", "Unmutes a member"]
var fun = ["fun", "fish", "test", "kick", "ban", "unban"]
var funDescriptions = ["Mutes a member", "Unmutes a member"]
var commands = [general,help,admin,fun];
var descriptions = [generalDescriptions,helpDescriptions,adminDescriptions,funDescriptions];

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    var content = message.content.split(prefix)[1];
    for (i = 0; i < commands.length; i++) {
        var current = commands[i];
        for (c = 1; c < current.length; c++) {
            if (current[c] === content.split(" ")[0]) {
                var file = current[0] + ".js";
            }
        }
    }
    if (file) {
        try {
            let commandFile = require("./commands/" + file);
            commandFile.run(Discord,client,prefix,message,content,commands,descriptions);
        } catch (err) {
            console.error(err);
        }
    }
});

client.login(process.env.TOKEN);
