const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });
var sayHello = require('./dady.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


var nias = 135;


client.on('messageCreate', (message) => {


  if (message.content === "Nibbas"){
  message.reply({content: 'biba'})
    
  sayHello.execute();
  }
  
});

client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');