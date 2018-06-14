const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("on " +  client.guilds.size + " servers");
});

var prefix="+";

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        message.channel.send({embed: {
            color: 0x00ff00,
            title: "Pong! 🏓",
            description: client.ping + "ms"
        }});
    }
    if (message.content.split(" ", 2)[0] === prefix + 'poll') {
        if (message.content.split(" ", 2)[1] != null) {
            const embed = new Discord.RichEmbed()
            .setColor(0x00ff00)
            .setTitle("Poll")
            .setDescription(message.content.split(" ", 2)[1])
            var poll = message.channel.send({embed})
            .then(function(message){
                message.react("👍")
                message.react("👎")
            })
        }
        else
        {
            message.channel.send({embed: {
                color: 0xff0000,
                title: "Invalid Syntax",
                description: "Please use this format: " + prefix + "mute <User> <Reason>"
            }});
        }
    }
    if (message.content.split(" ", 3)[0] === prefix + 'mute') {
        if (message.mentions.members != null) {
            if (message.content.split(" ", 3)[1] != null && message.content.split(" ", 3)[2] != null) {
                let member = message.mentions.members.first();
                if (member != null) {
                    member.addRole(message.guild.roles.find("name", "Muted"));
                    const embed = new Discord.RichEmbed()
                    .setColor(0x00ff00)
                    .setTitle("Moderation")
                    .setDescription(member.toString() + " has been muted for: " + message.content.split(" ", 3)[2])
                    message.channel.send({embed});
                }
                else
                {
                    message.channel.send({embed: {
                        color: 0xff0000,
                        title: "Invalid Syntax",
                        description: "Please use this format: " + prefix + "unmute <User>"
                    }});
                }  
            }
            else
            {
                message.channel.send({embed: {
                    color: 0xff0000,
                    title: "Invalid Syntax",
                    description: "Please use this format: " + prefix + "mute <User> <Reason>"
                }});
            }
        }
        else
        {
            message.channel.send({embed: {
                color: 0xff0000,
                title: "Invalid Syntax",
                description: "This command must be used in a server."
            }}); 
        }  
    }
    if (message.content.split(" ", 3)[0] === prefix + 'unmute') {
        if (message.mentions.members != null) {
            if (message.content.split(" ", 3)[1] != null) {
                let member = message.mentions.members.first();
                if (member != null) {
                    member.removeRole(message.guild.roles.find("name", "Muted"));
                    const embed = new Discord.RichEmbed()
                    .setColor(0x00ff00)
                    .setTitle("Moderation")
                    .setDescription(member.toString() + " has been unmuted")
                    message.channel.send({embed});
                }
                else
                {
                    message.channel.send({embed: {
                        color: 0xff0000,
                        title: "Invalid Syntax",
                        description: "Please use this format: " + prefix + "unmute <User>"
                    }});
                }  
            }
            else
            {
                message.channel.send({embed: {
                    color: 0xff0000,
                    title: "Invalid Syntax",
                    description: "Please use this format: " + prefix + "unmute <User>"
                }});
            }  
        }
        else
        {
            message.channel.send({embed: {
                color: 0xff0000,
                title: "Invalid Syntax",
                description: "This command must be used in a server."
            }}); 
        }
    }
    if (message.content.split(" ", 3)[0] === prefix + 'kick') {
        if (message.mentions.members != null) {
            if (message.content.split(" ", 3)[1] != null && message.content.split(" ", 3)[2] != null) {
                let member = message.mentions.members.first();
                if (member != null) {
                    member.kick(message.content.split(" ", 3)[2]);
                    const embed = new Discord.RichEmbed()
                    .setColor(0x00ff00)
                    .setTitle("Moderation")
                    .setDescription(member.toString() + " has been kicked for: " + message.content.split(" ", 3)[2])
                    message.channel.send({embed});
                }
                else
                {
                    message.channel.send({embed: {
                        color: 0xff0000,
                        title: "Invalid Syntax",
                        description: "Please use this format: " + prefix + "unmute <User>"
                    }});
                }  
            }
            else
            {
                message.channel.send({embed: {
                    color: 0xff0000,
                    title: "Invalid Syntax",
                    description: "Please use this format: " + prefix + "kick <User> <Reason>"
                }});
            }  
        }
        else
        {
            message.channel.send({embed: {
                color: 0xff0000,
                title: "Invalid Syntax",
                description: "This command must be used in a server."
            }}); 
        }
    }
    if (message.content.split(" ", 3)[0] === prefix + 'ban') {
        if (message.mentions.members != null) {
            if (message.content.split(" ", 3)[1] != null && message.content.split(" ", 3)[2] != null) {
                let member = message.mentions.members.first();
                if (member != null) {
                    member.ban({reason: message.content.split(" ", 3)[2]});
                    const embed = new Discord.RichEmbed()
                    .setColor(0x00ff00)
                    .setTitle("Moderation")
                    .setDescription(member.toString() + " has been banned for: " + message.content.split(" ", 3)[2])
                    message.channel.send({embed});
                }
                else
                {
                    message.channel.send({embed: {
                        color: 0xff0000,
                        title: "Invalid Syntax",
                        description: message.content.split(" ", 3)[1] + " Is not a valid user."
                    }}); 
                }
            }
            else
            {
                message.channel.send({embed: {
                    color: 0xff0000,
                    title: "Invalid Syntax",
                    description: "Please use this format: " + prefix + "ban <User> <Reason>"
                }});
            }  
        }
        else
        {
            message.channel.send({embed: {
                color: 0xff0000,
                title: "Invalid Syntax",
                description: "This command must be used in a server."
            }}); 
        }
    }
    if (message.content.includes("<@455066126691467285>")) {
        message.channel.send(message.author.toString());
    }
    if (message.content == prefix + "help") {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setAuthor("Trivia Bot Commands","https://www.triviahelpers.com/GK.png")
        .setDescription("Command Prefix is: '" + prefix + "'\n" 
        + "**__Main Commands__**\n"
        + "**" + prefix + "Help:** Shows every command.\n" 
        + "**" + prefix + "Ping:** Check your ping to Trivia Bot.\n" 
        + "**__Moderation Commands__**\n"
        + "**" + prefix + "Kick <User> <Reason>:** Kicks a user.\n"
        + "**" + prefix + "Ban <User> <Reason>:** Bans a user.")
        .setThumbnail("https://www.triviahelpers.com/GK.png")
        message.channel.send({embed});
    }
});

client.login('NDU1MDY2MTI2NjkxNDY3Mjg1.Df2lSw.teDL39cuz0tQkEPECi3r1dk-XPk');
