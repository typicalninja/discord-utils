  
const Discord = require('discord.js');

exports.defaultoptions = {
    DJSlib: Discord.version.split('.')[0] === '12' ? 'v12' : 'v11',
    Ownerids: [],
    Supportserverids: [],
    warnings: true

};