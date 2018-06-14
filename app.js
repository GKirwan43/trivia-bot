const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("on " +  client.guilds.size + " servers");
});

var prefix="+";

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    var content = message.content.split(prefix)[1];
    try {
        let commandFile = require("./bot.js");
        commandFile.run(Discord,client,message,content);
    } catch (err) {
        console.error(err);
    }
});

client.login('NDU1MDY2MTI2NjkxNDY3Mjg1.Df2lSw.teDL39cuz0tQkEPECi3r1dk-XPk');