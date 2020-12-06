# Discord utils

Discord utils is a package made to handle general things on your bot

# Installing

```js

npm i discord-eutils

```

# usage 

```js
const Discord = require('discord.js'); // --> require discord.js

const utils = require("discord-eutils") // --> import our module

const client = new Discord.Client(); // --> create a discord bot client

const util = new utils.UtilClient(client, {
   Ownerids: ["your id"] // --> a array
}) // --> create a util client with your client and options

client.util = util // --> bind it to client.util so you can use it any were 


client.once('ready', async () => {
 const activities = [
    `${client.guilds.cache.size} servers!`,
    `${client.channels.cache.size} channels!`,
    `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
  ]; // --> ex : set a switching status for your bot
client.util.switchingstatus(activities, {
    time: 70000,// --> interval between changes
    type: 'WATCHING' // --> Status time
})
	console.log('Ready!');
});
client.util.on('ready', async () => {
console.log('eutil ready')
});

```

# methods 

```js

coming soon

```