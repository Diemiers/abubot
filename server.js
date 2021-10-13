const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });
var sayHello = require('./dady.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('messageCreate', (message) => {


 
 let arrayOfStrings = message.content.split(' ');
  var args =[];
  
  console.log(arrayOfStrings[0]);
 // sayHello.execute(message,args, message.content, client);
 
  
});

client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');