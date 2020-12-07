# Welcome to help of **sendFile()** method


# Usage

You can use this to send a file in a channel or to a message autor/user

```js

const util = require('discord-eutil') 
const Discord = require('discord.js');
const client = new Discord.Client(); 

// as previous create a util client

const utilclient = new util.UtilClient(client, {
    Ownerids: ["what ever id"]
});

client.util = utilclient

client.on('message', async message => { 
     if(message.author.bot) return;
     
if(message.content = helpfile) {
  client.util.sendFile(message.channel, {
      Location: `./helpfile.js`
     }
  }) // --> example of sending a file in the message channel
 // output --> send a message with the file 
 })
```

<a href="https://zupimages.net/viewer.php?id=20/50/939c.png"><img src="https://zupimages.net/up/20/50/939c.png" alt="" /></a>









