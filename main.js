const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
const youtubedl = require("youtube-dl");
var wombat = require("./wombat.json");
fs = require('fs');

client.on('ready', () => {
    console.log('Bot initialized');
    //console.log(JSON.stringify(jsonObj));
});

client.on("message", message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    //console.log(message + ` ${message.author.username} `);
    fs.appendFileSync('log.txt', command + ` ${message.author.username} \n`, function (err) {
        if (err) return console.log(err);
        console.log(command + ` ${message.author.username} `);
      });



    if(command == "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    console.log(command + ` ${message.author.username} `);

    if(command == "wombat") {
        const embed = new Discord.MessageEmbed()
        .setTitle("Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! Wombat! ")
        .setImage(wombat[Math.floor(Math.random() * 100)].url)
        .setFooter("Glory to Australia");
        message.channel.send(embed);
    }
    if(command == "slav") {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('reee.mp3', {
                volume: 0.3,
            });
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                voiceChannel.leave();
              });

            
          } else {
            message.reply('You need to join a voice channel first!');
          }

        if(command == "stop") {
            dispatcher.destroy();
            message.channel.send("yeee")
        }

        message.delete();
    }
});

client.login(config.BOT_TOKEN);