exports.run = (Discord,client,prefix,message, content) => {
    const fs = require("fs");
    const mysql = require("mysql");
    var con = mysql.createConnection({
        host: "66.147.240.181",
        user: "dsheetco_Bot",
        password: "Crabisland1",
        database: "dsheetco_userData"
    });
    con.connect(err => {
        if (err) throw err;
        console.log("Connected");
    });
    var sections = content.split(" ");
    command = sections[0];
    if (command === "fish") {
        function randomFish() {
            var random = Math.floor((Math.random()*100) + 1);
            if (random >= 30) {return "Common";}
            if (random > 1 && random < 30) {return "Uncommon";}
            if (random === 1) {return "Rare";}
        }
        const embed = new Discord.RichEmbed()
        .setColor(0x00ff00)
        .setTitle("Fishy")
        .setDescription(message.author + ", you caught a " + randomFish() + "!")
        message.channel.send({embed})
    }
}
