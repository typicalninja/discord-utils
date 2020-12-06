const Discord = require('discord.js');
const defaultoptions = require('./src/doptions.js')
const merge = require('deepmerge');
const EventEmitter = require('events')
const chalk = require('chalk');
const version = require('./package.json').version
class UtilClient extends EventEmitter {

     /**
     * @param {Discord.Client} client The Discord Client
     */
constructor(client, options) {
    super();
    if (!client) throw new Error('Client is a required option.');

    if(version !== newversion)

    this.client = client;

    this.options = merge(defaultoptions, options);

    this.v12 = this.options.DJSlib === 'v12';
    this.warning = this.options.warnings
    this._init();

    if(!this.v12 && this.warning) {
        console.log(chalk.red(["Warning"]),"Out dated discord.js version, only v12 is supported");
    }
 
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
   }



module.exports = UtilClient;