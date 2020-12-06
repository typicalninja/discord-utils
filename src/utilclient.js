const Discord = require('discord.js');
const defaultoptions = require('./src/doptions.js')
const merge = require('deepmerge');
const EventEmitter = require('events')
const chalk = require('chalk');
const version = require('./package.json').version
const fetch = require('node-fetch')
class UtilClient extends EventEmitter {

     /**
     * @param {Discord.Client} client The Discord Client
     */
constructor(client, options) {
    super();
    if (!client) throw new Error('Client is a required option.');
const v = fetch('https://api.github.com/repos/typicalninja493/discord-utils/releases/latest').then(res => res.json());
const nv = v.tag_name
    if(version !== nv) {
        console.log("\x1B[31mWARNING:\x1B[0m Discord util is out of date use 'npm i discord-util' to update");
    const error = "Discord util is out of date"
        this.emit('error', error)
    }

    this.client = client;

    this.options = merge(defaultoptions, options);

    this.v12 = this.options.DJSlib === 'v12';
    this.warning = this.options.warnings
    this._init();

    if(!this.v12 && this.warning) {
        console.log(chalk.red(["Warning"]),"Out dated discord.js version, only v12 is supported");
    }

    this.emit('ready', this.options)
 
}
    switchingstatus(statuses, options) {
    let i = 0;
    let time = options.time || 70000
    let type = options.type || 'WATCHING';
        setInterval(() => this.client.user.setActivity(`${statuses[i++ % activities.length]}`, { type: type }), time);

    }

   emojify(message) {
       const args = message
    if (!args.join(" ")) {
         throw new Error('No args was provided');
      }
  
      const mapping = {
        " ": "   ",
        "0": ":zero:",
        "1": ":one:",
        "2": ":two:",
        "3": ":three:",
        "4": ":four:",
        "5": ":five:",
        "6": ":six:",
        "7": ":seven:",
        "8": ":eight:",
        "9": ":nine:",
        "!": ":grey_exclamation:",
        "?": ":grey_question:",
        "#": ":hash:",
        "*": ":asterisk:"
    };

        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
          });
       const m = args
                  .join(" ")
                   .split("")
                   .map(c => mapping[c] || c)
                   .join("")

        return m
      };
    react(message, author, time, validReactions) {
    
    time *= 1000;

        for (const reaction of validReactions) await message.react(reaction);

        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        return message
            .awaitReactions(filter, { max: 1, time: time})
            .then(collected => collected.first() && collected.first().emoji.name);
       }
       getmember(message, name) {
        toFind = toFind.toLowerCase();

        let target = this.v12 ? message.guild.members.cache.get(toFind) : message.guild.members.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;

       }
     error(message, error) {
        const msg = message
        let err = error

    if(!err) err = 'Unknown error'


    const errorEmbed = new Discord.MessageEmbed()
	.setColor('RED')
  .setDescription(` ❌ Following Error occured while completing the command\n\`\`\`${err}\`\`\``)

  return errorEmbed


     }
   }



module.exports = UtilClient;