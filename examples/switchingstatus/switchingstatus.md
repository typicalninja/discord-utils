# welcome to help of switchingstatus() method

here you will find out how to set a status for your bot that switched every interval you set

```js
const util = require("discord-eutils")
const Discord = require('discord.js');
const client = new Discord.Client();

const utilclient = new utils.UtilClient(client, {
   Ownerids: ["the bots owners ids"]
})

client.once('ready', async () => {
 const activities = [
    `${client.guilds.cache.size} servers!`,
    `${client.channels.cache.size} channels!`,
    `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
  ];
util.switchingstatus(activities, {
    time: 70000,// --> interval between changes
    type: 'WATCHING' // --> Status type
})
	console.log('Ready!');
});
```

you are done ,
have fun
