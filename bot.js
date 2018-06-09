const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix="!";

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.channel.send({embed: {
        color: 3447003,
        title: "Pong! 🏓",
        description: client.ping + "ms"
    }});
  }
});

client.login('NDU1MDY2MTI2NjkxNDY3Mjg1.Df2lSw.teDL39cuz0tQkEPECi3r1dk-XPk');