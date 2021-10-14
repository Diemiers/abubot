

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILDS_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  
});

client.on('messageCreate',  (message) => {

  console.log("Interacted");


});


client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');

