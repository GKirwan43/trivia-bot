exports.run = (Discord,client,prefix,message, content) => {
    const fs = require("fs");
    let userData = JSON.parse(fs.readFileSync("./userData.json", "utf8"));
    var sections = content.split(" ");
    command = sections[0];
    if (command === "fish") {
        if (!userData[message.author.id]) {
            userData[message.author.id] = {
                commonFish: 0,
                uncommonFish: 0,
                rareFish: 0
            };
            fs.writeFile("./userData.json", JSON.stringify(userData), (err) => console.error);
        }
        function randomFish() {
            var random = Math.floor((Math.random()*100) + 1);
            if (random >= 30) {userData[message.author.id].commonFish++; return "Common";}
            if (random > 1 && random < 30) {userData[message.author.id].uncommonFish++; return "Uncommon";}
            if (random === 1) {userData[message.author.id].rareFish++; return "Rare";}
        }
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Fishy")
        .setDescription(message.author + ", you caught a " + randomFish() + "!")
        message.channel.send({embed})
        fs.writeFile("./userData.json", JSON.stringify(userData), (err) => console.error);
    }
}
