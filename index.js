const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = "/";
const ownerID = `642694924847808512`
const active = new Map();
const map = new Map();
const ytdl = require('ytdl-core');
var ffmpeg = require('ffmpeg');
var opusscript = require("opusscript");
const m3u8stream = require('m3u8stream');
const parseTime   = require('m3u8stream/dist/parse-time');
const sql = require("sqlite");
const db = require("quick.db")
const fs = require ("fs")
const request = require('snekfetch');
const Pornsearch = require('pornsearch');
const Fortnite = require("fortnite");
const Searcher = new Pornsearch('tits');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
send = require('quick.hook');
bot.commands = new Discord.Collection();



const config = require("./config.json");


fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    console.log(`${files.length} commands`);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("commands non trouvée.");
        return;

    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", function() {
    bot.user.setActivity("Someday | /help");
    
});

bot.login(config.token);

bot.on("message", async message => {
  if(message.content ==="podkpdokpdkekdpjk"){
    message.reply("Salut toi !");
    console.log("Salut toi ! commande effectuée")
  }

          
let ops = {
  ownerID: ownerID,
  active: active
}


    bot.emit("checkMessage", message);

    const prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const commandeFile = bot.commands.get(cmd);
        if(commandeFile) commandeFile.run(bot, message, args);

        db.add(`globalMessages_${message.author.id}`, 1);

        db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)


        

        
    });
    










