const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("on " +  client.guilds.size + " servers");
});

var prefix="!";

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.channel.send({embed: {
        color: 0x00ff00,
        title: "Pong! 🏓",
        description: client.ping + "ms"
    }});
  }
  if (msg.content.split(" ", 3)[0] === prefix + 'ban') {
    if (msg.content.split(" ", 3)[1] != null && msg.content.split(" ", 3)[2] != null) {
        let member = msg.mentions.members.first();
        msg.channel.send(member.toString());
    }
    else
    {
        msg.channel.send({embed: {
            color: 0xff0000,
            title: "Invalid Syntax",
            description: "Please use this format: !ban <User> <Reason>"
        }});
    }  
  }
  if (msg.mentions.members.first() != null && msg.mentions.members.first() == "<@455066126691467285>") {
    msg.channel.send(msg.member.toString());
  }
});

client.login('NDU1MDY2MTI2NjkxNDY3Mjg1.Df2lSw.teDL39cuz0tQkEPECi3r1dk-XPk');
