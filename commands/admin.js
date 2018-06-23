exports.run = (Discord,client,prefix,message, content) => {
    var sections = content.split(" ");
    var member = message.mentions.members.first();
    command = sections[0];
    function success(title, description) {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle(title)
        .setDescription(description)
        message.channel.send({embed})
    }
    function error(type, error) {
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle(type)
        .setDescription(error)
        message.channel.send({embed})
    }
    function reason(start,current) {
        var reason = content.split(" ", start)[current]
        if (!reason) return "No Reason given";
        return reason;
    }
    if (command === "mute") {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return error("Permission Denied", "You do not have permission to use this command.");
        if (!message.guild.roles.find("name", "Muted")) return error("Error", "Please create a role named 'Muted' to use this command.");
        if (!member) return error("Invalid Syntax", "User not found\nUse this format: +mute <user> <reason>");
        if (member.roles.has(message.guild.roles.find("name", "Muted").id)) return error("Error", member + " is already muted");
        if (!member.kickable) return error("Permission Denied", "This member cannot be muted. This member has a higher rank then you or I cannot mute them.");
        member.addRole(message.guild.roles.find("name", "Muted"));
        success("Moderation", member + " was muted for: " + reason(3,2))
    }
    if (command === "unmute") {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return error("Permission Denied", "You do not have permission to use this command.");
        if (!message.guild.roles.find("name", "Muted")) return error("Error", "Please create a role named 'Muted' to use this command.");
        if (!member) return error("Invalid Syntax", "User not found\nUse this format: +unmute <user>");
        if (!member.roles.has(message.guild.roles.find("name", "Muted").id)) return error("Error", member + " is not muted");
        member.removeRole(message.guild.roles.find("name", "Muted"));
        success("Moderation", member + " was unmuted")
    }
    if (command === "kick") {
        if (!message.member.hasPermission("KICK_MEMBERS")) return error("Permission Denied", "You do not have permission to use this command.");
        if (!member) return error("Invalid Syntax", "User not found\nUse this format: +kick <user> <reason>");
        if (!member.kickable) return error("Permission Denied", "This member cannot be kicked. This member has a higher rank then you or I cannot kick them.");
        member.kick();
        success("Moderation", member + " was kicked for: " + reason(3,2))
    }
    if (command === "ban") {
        if (!message.member.hasPermission("BAN_MEMBERS")) return error("Permission Denied", "You do not have permission to use this command.");
        if (!member) return error("Invalid Syntax", "User not found\nUse this format: +ban <user> <reason>");
        if (!member.bannable) return error("Permission Denied", "This member cannot be banned. This member has a higher rank then you or I cannot ban them.");
        member.ban("You were banned for: " + reason(3,2));
        success("Moderation", member + " was banned for: " + reason(3,2))
    }
    if (command === "unban") {
        if (!message.member.hasPermission("BAN_MEMBERS")) return error("Permission Denied", "You do not have permission to use this command.");
        if (!member) return error("Invalid Syntax", "User not found\nUse this format: +unban <user>");
        if (member) return error("Error", member + " is not banned");
        member.unban();
        success("Moderation", member + " was unbanned")
    }
}